const { MuseoModerno } = require('next/font/google');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        animatedgradient: {
          '0%': { 
            backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },

        
      },
      backgroundSize: {
        '300%': '300%',
      },
      animation: {
        gradient: 'animatedgradient 10s ease infinite alternate',
      },
      fontFamily: {
        poppins: [''],
        MuseoModerno: ['var(--font-Museo)'],
      },
      boxShadow: {
        'white-glow': '10px 10px 15px rgba(247, 248, 251, 0.4), 10px 10px 25px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [
    require('@iconify/tailwind'),
    require('tailwind-scrollbar-hide')
  ],
};
