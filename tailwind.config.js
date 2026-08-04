/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/context/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#421406',
        'primary-container': '#5d2918',
        'on-primary': '#ffffff',
        'on-primary-container': '#da8f78',
        'inverse-primary': '#ffb59e',
        secondary: '#855400',
        'secondary-container': '#feaa2d',
        'on-secondary': '#ffffff',
        'on-secondary-container': '#6b4200',
        tertiary: '#24231f',
        background: '#fff8f6',
        'on-background': '#201a18',
        surface: '#fff8f6',
        'surface-container': '#f9ebe7',
        'surface-container-low': '#fef1ed',
        'surface-container-high': '#f3e5e1',
        'surface-container-highest': '#ede0dc',
        'surface-variant': '#ede0dc',
        'on-surface': '#201a18',
        'on-surface-variant': '#53433f',
        outline: '#85736e',
        'outline-variant': '#d8c2bc',
        error: '#ba1a1a',
        'on-error': '#ffffff',
      },
      spacing: {
        xs: '4px', gutter: '16px', xl: '80px',
        'margin-desktop': '64px', lg: '48px',
        'margin-mobile': '20px', base: '8px', md: '24px', sm: '12px',
      },
      fontFamily: {
        display: ['Anybody', 'sans-serif'],
        body: ['Be Vietnam Pro', 'sans-serif'],
        price: ['Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        hard: '4px 4px 0px 0px rgba(66,20,6,1)',
        'hard-lg': '8px 8px 0px 0px rgba(66,20,6,1)',
      },
    },
  },
  plugins: [],
};