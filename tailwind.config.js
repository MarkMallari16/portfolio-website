
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ['emerald', 'night', 'corporate'],
  },
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui')
  ],
}