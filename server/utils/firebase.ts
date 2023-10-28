import { cert, initializeApp, getApps, ServiceAccount } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';

const app = getApps().length
    ? getApps()[0]
    : initializeApp({
        credential: cert(JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS)),
    });

export const authAdmin = getAuth(app);
