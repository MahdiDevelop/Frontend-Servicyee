'use client'
import React from "react";
const ComingSoon = () => {
    return (
        <div className=" flex flex-col items-center justify-center px-4">
            {/* Content Card */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 md:p-8 text-center max-w-2xl w-full mx-4">
                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-bold text-[#023E8A] mb-6">
                    Coming Soon
                </h1>

                {/* Subtitle */}
                <p className="text-lg text-gray-700 mb-10 max-w-md mx-auto">
                    We are crafting something extraordinary. Stay tuned for updates!
                </p>

                {/* Animated Progress Circle */}
                <div className="flex justify-center mb-8">
                    <div className="relative w-24 h-24">
                        <div className="absolute inset-0 rounded-full border-4 border-white/30"></div>
                        <div
                            className="absolute inset-0 rounded-full border-4 border-transparent"
                            style={{
                                borderTopColor: '#0077B6',
                                animation: 'spin 2s linear infinite',
                            }}
                        ></div>
                    </div>
                </div>

                {/* Email Notification CTA */}
                <div className="mt-8">
                    <p className="text-gray-600 mb-4">Notify me when it is ready</p>
                    <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="flex-grow px-4 py-2 border border-gray-300 text-[13px] rounded-[4px] focus:outline-none focus:ring-1 focus:ring-[#0096C7]"
                        />
                        <button
                            className="px-6 py-2 bg-[#0077B6] text-white rounded-[4px] hover:bg-[#0096C7] transition-colors text-[13px]"
                            style={{
                                background: 'linear-gradient(to right, #0077B6, #0096C7)'
                            }}
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>



            {/* Custom animation */}
            <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
        </div>
    );
};

export default ComingSoon;