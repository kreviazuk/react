import Router from '@koa/router';
import multer from '@koa/multer';
import path from 'path';
import fs from 'fs';
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const router = new Router();

// === Configuration ===
const isR2Enabled = !!(process.env.R2_ACCOUNT_ID && process.env.R2_ACCESS_KEY_ID);

// === Multer Setup ===
// If R2 is enabled, use memory storage (buffer); otherwise use disk storage (files)
// We need 'any' type cast for multer storage sometimes due to type definition mismatches
const storage = isR2Enabled 
  ? multer.memoryStorage()
  : multer.diskStorage({
      destination: function (_req, _file, cb) {
        const uploadDir = path.join(process.cwd(), 'uploads');
        if (!fs.existsSync(uploadDir)) {
          fs.mkdirSync(uploadDir, { recursive: true });
        }
        cb(null, uploadDir);
      },
      filename: function (_req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = path.extname(file.originalname);
        cb(null, file.fieldname + '-' + uniqueSuffix + ext);
      }
    });

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
        fileSize: 5 * 1024 * 1024 // 5MB
    }
});

// === R2 Client ===
let s3Client: S3Client | null = null;
if (isR2Enabled) {
    s3Client = new S3Client({
        region: "auto",
        endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
        credentials: {
            accessKeyId: process.env.R2_ACCESS_KEY_ID!,
            secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
        },
    });
}

/**
 * @swagger
 * /api/upload:
 *   post:
 *     summary: Upload an image
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

  try {
    let url = '';
    const filename = `${Date.now()}-${Math.round(Math.random() * 1E9)}${path.extname(ctx.file.originalname)}`;

    if (isR2Enabled && s3Client) {
        // Upload to R2
        console.log(`Uploading to R2: ${filename}`);
        
        await s3Client.send(new PutObjectCommand({
            Bucket: process.env.R2_BUCKET_NAME,
            Key: filename,
            Body: ctx.file.buffer, // Available because of memoryStorage
            ContentType: ctx.file.mimetype,
        }));

        const publicDomain = process.env.R2_PUBLIC_DOMAIN || '';
        // If publicDomain has a trailing slash, remove it to avoid double slashes
        const cleanDomain = publicDomain.endsWith('/') ? publicDomain.slice(0, -1) : publicDomain;
        url = `${cleanDomain}/${filename}`;
    } else {
        // Local Storage
        console.log(`Uploaded to Local: ${ctx.file.filename}`);
        const serverBaseUrl = `${ctx.protocol}://${ctx.host}`;
        url = `${serverBaseUrl}/uploads/${ctx.file.filename}`;
    }

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
