'use client'

import React from 'react'
import { motion } from 'framer-motion'
import ModeToggle from '@/components/context/ToggleMode'

const Home = () => {

  return (
    <div className="relative flex min-h-screen items-center justify-center px-4 py-12 bg-gradient-to-br from-sky-50 to-white dark:from-gray-900 dark:to-black overflow-hidden transition-colors duration-500">


      {/* Background animated blobs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 z-0"
      >
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: -50, y: -50 }}
            animate={{
              x: [0, 40, 0, -40, 0],
              y: [0, 30, -30, 30, 0],
            }}
            transition={{
              duration: 18 + i * 5,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bg-sky-100 dark:bg-blue-900 rounded-full blur-2xl opacity-60"
            style={{
              width: `${60 + i * 40}px`,
              height: `${60 + i * 40}px`,
              left: `${15 + i * 25}%`,
              top: `${15 + i * 20}%`
            }}
          />
        ))}
      </motion.div>

      {/* Auth card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 w-full max-w-sm bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-xl p-8 transition-colors"
      >
        {/* Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-6 mx-auto w-16 h-16"
        >
          <svg viewBox="0 0 100 100">
            <motion.path
              d="M50 15 L85 50 L50 85 L15 50 Z"
              fill="none"
              stroke="#023E8A"
              strokeWidth="6"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
            <motion.circle
              cx="50"
              cy="50"
              r="15"
              fill="#90e0ef"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8, duration: 0.3 }}
            />
          </svg>
        </motion.div>

        <motion.h1
          className="text-center text-2xl font-semibold text-[#023E8A] dark:text-white mb-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Welcome Back
        </motion.h1>

        <motion.p
          className="text-center text-sm text-gray-600 dark:text-gray-300 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Sign in to access your dashboard and manage services.
          <span className="py-2">
            <ModeToggle />
          </span>
        </motion.p>

        <motion.div
          className="space-y-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="w-full bg-[#023E8A] text-white py-2 px-4 rounded-lg text-sm font-medium shadow hover:bg-[#012a5f] transition"
          >
            Sign In
          </motion.button>

          <div className="flex items-center text-xs text-gray-400 gap-2">
            <div className="flex-1 h-px bg-gray-300 dark:bg-gray-700" />
            <span>or</span>
            <div className="flex-1 h-px bg-gray-300 dark:bg-gray-700" />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="w-full border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-100 py-2 px-4 rounded-lg text-sm font-medium flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373...z" />
            </svg>
            Continue with GitHub
          </motion.button>
        </motion.div>

        <motion.div
          className="mt-4 text-xs text-center text-gray-500 dark:text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Don’t have an account?{' '}
          <motion.a
            href="#"
            className="text-[#023E8A] dark:text-sky-400 font-semibold hover:underline"
            whileHover={{ scale: 1.05 }}
          >
            Sign up
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Home
