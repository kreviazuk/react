import Router from '@koa/router';
import multer from '@koa/multer';
import path from 'path';
import fs from 'fs';

const router = new Router();

// Configure storage
const storage = multer.diskStorage({
  destination: function (_req, _file, cb) {
    const uploadDir = path.join(process.cwd(), 'uploads');
    // Ensure directory exists
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: function (_req, file, cb) {
    // Generate unique filename: timestamp-random-originalName
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + ext);
  }
});

// Filter for images
const fileFilter = (_req: any, file: any, cb: any) => {
    if (file.mimetype.startsWith('image/')) {
        cb(null, true);
    } else {
        cb(new Error('Not an image! Please upload an image.'), false);
    }
};

const upload = multer({ 
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024 // 5MB limit
    },
    fileFilter: fileFilter
});

/**
 * @swagger
 * /api/upload:
 *   post:
 *     summary: Upload an image
 *     consumes:
 *       - multipart/form-data
 *     parameters:
 *       - in: formData
 *         name: file
 *         type: file
 *         description: The file to upload
 *     responses:
 *       200:
 *         description: File uploaded successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 url:
 *                   type: string
 */
router.post('/upload', upload.single('file'), async (ctx) => {
  if (!ctx.file) {
    ctx.status = 400;
    ctx.body = { error: 'No file uploaded' };
    return;
  }

  // Return the URL to access the file
  // Assuming the server is running on the same host, straightforward for localhost
  // In production, this might need to be a full URL key
  const filename = ctx.file.filename;
  // Construct URL. Context protocol/host might work, or hardcode base for now if behind proxy
  // Local development structure: http://localhost:8000/uploads/filename.jpg
  
  const serverBaseUrl = `${ctx.protocol}://${ctx.host}`; // e.g. http://localhost:8000
  const url = `${serverBaseUrl}/uploads/${filename}`;

  ctx.body = { 
    success: true, 
    url: url,
    filename: filename 
  };
});

export default router;
