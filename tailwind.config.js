/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          DEFAULT: '#062949',
          muted: '#3B546A',
          light: '#7A8DA3',
        },
        green: {
          DEFAULT: '#0E7118',
          light: '#24A331',
          dark: '#095012',
        },
        creek: {
          DEFAULT: '#0F65C8',
          light: '#3288E5',
          dark: '#094989',
        },
        gold: {
          DEFAULT: '#F1A417',
          light: '#FFC042',
          dark: '#CA8A13',
        },
        orange: {
          DEFAULT: '#E08000',
          light: '#FF9B1F',
          dark: '#B36600',
        },
        cream: {
          50: '#FFFEF8',
          100: '#FFFDF0',
          200: '#FFF8D6',
          300: '#FFF3BD',
          400: '#FFE98A',
          500: '#FFDF57',
          600: '#E6C94E',
          700: '#998634',
          800: '#736427',
          900: '#4D431A',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out forwards',
        'slide-up': 'slideUp 0.7s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

