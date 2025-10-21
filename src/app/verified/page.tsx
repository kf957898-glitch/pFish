'use client';

import React from 'react';

const VerifiedPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center px-4">
      <img
        src="/Meta-Logo.png"
        alt="Meta Logo"
        style={{ width: '160px', height: 'auto' }}
      />
      <span className="text-gray-600 text-lg font-medium mt-2">Please wait while we verify your information</span>
    </div>
  );
};

export default VerifiedPage;