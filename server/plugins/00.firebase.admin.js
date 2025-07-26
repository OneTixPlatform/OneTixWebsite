import { getApps, initializeApp, cert } from "firebase-admin/app";
import { defineNitroPlugin } from "nitropack/runtime";

export default defineNitroPlugin(() => {
  if (!getApps().length) {
    console.log("[Firebase Admin] Initializing Firebase Admin SDK...");
    initializeApp({
      credential: cert({
        projectId: process.env.projectId,
        clientEmail: process.env.clientEmail,
        privateKey: process.env.privateKey?.replace(/\\n/g, "\n"),
      }),
    });
  }
});
