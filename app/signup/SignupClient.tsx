"use client";
console.log("CLIENT FIREBASE KEY:", process.env.NEXT_PUBLIC_FIREBASE_API_KEY);
import { initializeFirebase } from "@/src/firebase/clientApp";
initializeFirebase();
