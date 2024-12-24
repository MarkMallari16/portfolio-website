
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ['emerald','night'],
  },
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui')
  ],
}