// lib/firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ?? "",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ?? "",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ?? "",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ?? "",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ?? "",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID ?? "",
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID ?? ""
};

// initialize only on client and avoid double init during HMR
let app;
if (typeof window !== "undefined") {
  app = getApps().length ? getApp() : initializeApp(firebaseConfig);
} else {
  // server: don't initialize firebase app for server-side rendering
  app = getApps().length ? getApp() : undefined;
}

export const auth = app ? getAuth(app) : (null as unknown as ReturnType<typeof getAuth>);
export default app;
if (typeof window !== "undefined") {
  console.log("FIREBASE CONFIG (client):", {
    apiKey: firebaseConfig.apiKey,
    authDomain: firebaseConfig.authDomain,
  });
}
console.log("CLIENT KEY:", process.env.NEXT_PUBLIC_FIREBASE_API_KEY);


