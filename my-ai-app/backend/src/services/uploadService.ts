import { PutObjectCommand } from "@aws-sdk/client-s3";
import path from 'path';
import sharp from 'sharp';
import { s3Client, R2_BUCKET_NAME, R2_PUBLIC_DOMAIN, isR2Enabled } from '../config/r2';

interface FileData {
    buffer: Buffer;
    originalname: string;
    mimetype: string;
}

export const uploadFile = async (file: FileData) => {
    if (!isR2Enabled) {
        throw new Error('STORAGE_NOT_CONFIGURED');
    }

    let fileBuffer = file.buffer;
    let contentType = file.mimetype;
    let extension = path.extname(file.originalname);

    // Compress image if it is an image
    if (contentType.startsWith('image/')) {
        try {
            fileBuffer = await sharp(file.buffer)
                .rotate()
                .resize({ width: 1920, withoutEnlargement: true })
                .webp({ quality: 80 })
                .toBuffer();
                
            contentType = 'image/webp';
            extension = '.webp';
        } catch (error) {
            console.error('Image compression failed:', error);
            // Fallback to original file
        }
    }

    const filename = `${Date.now()}-${Math.round(Math.random() * 1E9)}${extension}`;

    console.log(`Uploading to R2: ${filename}`);
    
    await s3Client.send(new PutObjectCommand({
        Bucket: R2_BUCKET_NAME,
        Key: filename,
        Body: fileBuffer,
        ContentType: contentType,
    }));

    const cleanDomain = R2_PUBLIC_DOMAIN.endsWith('/') ? R2_PUBLIC_DOMAIN.slice(0, -1) : R2_PUBLIC_DOMAIN;
    const url = `${cleanDomain}/${filename}`;

    return {
        url,
        filename
    };
};
