// app/login/page.tsx
'use client';

import React, { useState } from 'react'; // <-- यहाँ से अतिरिक्त '>' हटा दिया गया है
import { auth } from '../../lib/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      // Firebase फंक्शन का उपयोग करके लॉगिन करें
      await signInWithEmailAndPassword(auth, email, password);
      // यदि सफल होता है, तो आप यूज़र को किसी डैशबोर्ड पेज पर रीडायरेक्ट कर सकते हैं
      alert('लॉगिन सफल! (रीडायरेक्ट जल्द ही जोड़ा जाएगा)');
    } catch (err: any) {
      console.error(err);
      if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password' || err.code === 'auth/invalid-credential') {
        setError('अमान्य ईमेल या पासवर्ड।');
      } else {
        setError('लॉगिन विफल रहा। कृपया पुनः प्रयास करें।');
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white shadow-md rounded-lg w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-4 text-center">यूज़र लॉगिन (Sarkari Jeet)</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">ईमेल पता:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">पासवर्ड:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          >
            लॉगिन करें
          </button>
        </form>
        {error && <p className="mt-4 text-center text-red-600">{error}</p>}
      </div>
    </div>
  );
};

export default LoginPage;
