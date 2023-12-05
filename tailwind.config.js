/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    screens: {
      sm: '480px',
      md: '640px',
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
    fontSize: {
      sm: ['14px', '24px'],
      base: ['15px', '26px'],
      lg: ['18px', '24px'],
      xl: ['20px', '24px'],
      '2xl': ['32px', '32px'],
      '3xl': ['40px', '40px'],
      '4xl': ['56px', '56px'],
    },
    extend: {
      colors: {
        'soft-orange': 'hsl(35, 77%, 62%)',
        'soft-red': 'hsl(5, 85%, 63%)',
        'off-white': 'hsl(36, 100%, 99%)',
        'grayish-blue': 'hsl(233, 8%, 79%)',
        'dark-grayish-blue': 'hsl(236, 13%, 42%)',
        'dark-blue': 'hsl(240, 100%, 5%)',
      },
    },
  },
}
