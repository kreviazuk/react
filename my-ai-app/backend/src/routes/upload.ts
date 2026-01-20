import Router from '@koa/router';
import multer from '@koa/multer';
import path from 'path';
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const router = new Router();

// === Configuration ===
const isR2Enabled = !!(process.env.R2_ACCOUNT_ID && process.env.R2_ACCESS_KEY_ID);

if (!isR2Enabled) {
    console.warn("⚠️ Cloudflare R2 is NOT configured. Uploads will fail.");
}

// === Multer Setup ===
// Always use memory storage since we only upload to R2
const storage = multer.memoryStorage();

const fileFilter = (_req: any, file: any, cb: any) => {
    if (file.mimetype.startsWith('image/')) {
        cb(null, true);
    } else {
        cb(new Error('Not an image! Please upload an image.'), false);
    }
};

const upload = multer({ 
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 50 * 1024 * 1024 // 50MB
    }
});

// === R2 Client ===
const s3Client = new S3Client({
    region: "auto",
    endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: {
        accessKeyId: process.env.R2_ACCESS_KEY_ID || '',
        secretAccessKey: process.env.R2_SECRET_ACCESS_KEY || '',
    },
});

/**
 * @swagger
 * /api/upload:
 *   post:
 *     summary: Upload an image to Cloudflare R2
 *     tags: [Upload]
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Image uploaded successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 url:
 *                   type: string
 */
router.post('/upload', upload.single('file'), async (ctx) => {
  if (!ctx.file) {
    ctx.status = 400;
    ctx.body = { error: 'No file uploaded' };
    return;
  }

  if (!isR2Enabled) {
      ctx.status = 500;
      ctx.body = { error: 'Server storage not configured' };
      return;
  }

  try {
    const filename = `${Date.now()}-${Math.round(Math.random() * 1E9)}${path.extname(ctx.file.originalname)}`;

    console.log(`Uploading to R2: ${filename}`);
    
    await s3Client.send(new PutObjectCommand({
        Bucket: process.env.R2_BUCKET_NAME,
        Key: filename,
        Body: ctx.file.buffer,
        ContentType: ctx.file.mimetype,
    }));

    const publicDomain = process.env.R2_PUBLIC_DOMAIN || '';
    const cleanDomain = publicDomain.endsWith('/') ? publicDomain.slice(0, -1) : publicDomain;
    const url = `${cleanDomain}/${filename}`;

    ctx.body = { 
        success: true, 
        url: url,
        filename: filename 
    };

  } catch (error) {
      console.error("Upload error:", error);
      ctx.status = 500;
      ctx.body = { error: 'Upload failed' };
  }
});

export default router;
