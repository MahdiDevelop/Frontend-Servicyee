import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  /* config options here */
};
module.exports = {
  images: {},
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 5s linear infinite",
      },
    },
  },
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
  },
};
export default nextConfig;
