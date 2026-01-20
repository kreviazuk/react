import { S3Client } from "@aws-sdk/client-s3";

const isR2Enabled = !!(process.env.R2_ACCOUNT_ID && process.env.R2_ACCESS_KEY_ID);

if (!isR2Enabled) {
    console.warn("⚠️ Cloudflare R2 is NOT configured. Uploads will fail.");
}

export const s3Client = new S3Client({
    region: "auto",
    endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: {
        accessKeyId: process.env.R2_ACCESS_KEY_ID || '',
        secretAccessKey: process.env.R2_SECRET_ACCESS_KEY || '',
    },
});

export const R2_BUCKET_NAME = process.env.R2_BUCKET_NAME;
export const R2_PUBLIC_DOMAIN = process.env.R2_PUBLIC_DOMAIN || '';
export { isR2Enabled };
