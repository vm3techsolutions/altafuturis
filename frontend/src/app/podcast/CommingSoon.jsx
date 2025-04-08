import React from "react";

export default function ComingSoon() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br px-4">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-purple-700 mb-4">
          🎙️ Podcast Coming Soon...
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-6">
          We’re brewing something exciting. Stay tuned!
        </p>
        <div className="flex justify-center">
          <span className="inline-block w-3 h-3 m-1 bg-purple-500 rounded-full animate-bounce"></span>
          <span className="inline-block w-3 h-3 m-1 bg-purple-500 rounded-full animate-bounce delay-150"></span>
          <span className="inline-block w-3 h-3 m-1 bg-purple-500 rounded-full animate-bounce delay-300"></span>
        </div>
      </div>
    </div>
  );
}
