/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        landing: "url(../public/assets/landing/wave-haikei.svg)",
        "landing-about": "url(../public/assets/landing/wave-haikei2.svg)",
        "landing-facts": "url(../public/assets/landing/wave-haikei3.svg)",
        "landing-contact": "url(../public/assets/landing/wave-haikei4.svg)",
        "landing-footer": "url(../public/assets/landing/wave-haikei5.svg)",
        "landing-mobile-menu": "url(../public/assets/landing/wave-haikei6.svg)",
      },
      backgroundSize: {
        full: "100%",
      },
    },
  },
  plugins: [],
};
