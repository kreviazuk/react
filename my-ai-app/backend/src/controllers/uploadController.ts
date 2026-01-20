import { Context } from 'koa';
import * as uploadService from '../services/uploadService';

export const uploadImage = async (ctx: Context) => {
    if (!ctx.file) {
        ctx.status = 400;
        ctx.body = { error: 'No file uploaded' };
        return;
    }

    try {
        const result = await uploadService.uploadFile({
            buffer: ctx.file.buffer,
            originalname: ctx.file.originalname,
            mimetype: ctx.file.mimetype
        });

        ctx.body = { 
            success: true, 
            ...result
        };
    } catch (error: any) {
        if (error.message === 'STORAGE_NOT_CONFIGURED') {
            ctx.status = 500;
            ctx.body = { error: 'Server storage not configured' };
        } else {
            console.error("Upload error:", error);
            ctx.status = 500;
            ctx.body = { error: 'Upload failed' };
        }
    }
};
