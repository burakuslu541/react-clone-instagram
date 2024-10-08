/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "logo-pattern": "url('https://instagram.com/static/images/homepage/phones/home-phones-2x.png/cbc7174b4f05.png')",
      }
    },
  },
  plugins: [],
}

