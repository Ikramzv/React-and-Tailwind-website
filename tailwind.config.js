/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        bgColor: '#040C18',
        footerColor: '#031B34',
        blogColor: '#042c54',
        textColor: '#81AFDD',
        subtextColor: '#FF8A71',
      },
      backgroundImage: {
        textGradient: 'linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%)',
        barGradient: 'linear-gradient(103.22deg, #AE67FA 13.86%, #F49867 99.55%)',
      },
    },
    animation: {
      scaleUpCenter: 'scaleUp 500ms ease'
    },
    keyframes: {
      scaleUp: {
        '0%' : {
          transform: 'scale(0.3)',
        },
        '100%' : {
          transform: 'scale(1)',
        },
      },
    },
  },
  plugins: [],
}
