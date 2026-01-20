import Router from '@koa/router';
import multer from '@koa/multer';
import * as uploadController from '../controllers/uploadController';

const router = new Router();

// === Multer Setup ===
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
router.post('/upload', upload.single('file'), uploadController.uploadImage);

export default router;
