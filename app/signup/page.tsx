"use client";

import React, { useState } from 'react';
import { auth } from '../../lib/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    // client-side validation
    if (!emailRegex.test(email.trim())) {
      setError('कृपया वैध ईमेल दर्ज करें।');
      return;
    }
    if (password.length < 6) {
      setError('पासवर्ड कम से कम 6 वर्ण होना चाहिए।');
      return;
    }

    try {
      setLoading(true);
      await createUserWithEmailAndPassword(auth, email.trim(), password);
      setSuccess('साइनअप सफल! आप अब लॉग इन कर सकते हैं।');
      setEmail('');
      setPassword('');
    } catch (err: any) {
      console.error('Signup error:', err);
      // common firebase error codes
      if (err?.code === 'auth/email-already-in-use') {
        setError('यह ईमेल पहले से उपयोग में है।');
      } else if (err?.code === 'auth/weak-password') {
        setError('पासवर्ड बहुत कमज़ोर है (कम से कम 6 अक्षर)।');
      } else if (err?.code === 'auth/invalid-email') {
        setError('ईमेल फॉर्मेट ठीक नहीं है।');
      } else {
        setError(err?.message ?? 'साइनअप विफल रहा। कृपया पुनः प्रयास करें।');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white shadow-md rounded-lg w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-4 text-center">यूज़र साइनअप (Sarkari Jeet)</h1>

        <form onSubmit={handleSignup} className="space-y-4" noValidate>
          <div>
            <label className="block text-sm font-medium text-gray-700">ईमेल पता:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">पासवर्ड:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              autoComplete="new-password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
              loading ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'
            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
          >
            {loading ? 'प्रोसेस हो रहा है...' : 'साइनअप करें'}
          </button>
        </form>

        {success && <p className="mt-4 text-center text-green-600" role="status">{success}</p>}
        {error && <p className="mt-4 text-center text-red-600" role="alert">{error}</p>}
      </div>
    </div>
  );
}
