
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  // purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'lora': ['Lora', 'sans-serif'],
      'kanit': ['Kanit', 'sans-serif'],
    },
    extend: {
      colors: {
        'purple': '#65369E;',
        'dark': '#382b47',
        'light-blue': '#818cf8'
      },
    },
  },
}

