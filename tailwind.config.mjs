/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        orange: {
          50: "#fff4ec",
          100: "#ffe7d3",
          200: "#ffcaa5",
          300: "#ffa56d",
          400: "#ff7332",
          500: "#ff4d0a",
          600: "#ff3200",
          700: "#cc1f02",
          800: "#a11a0b",
          900: "#82190c",
          950: "#460804",
        },
      },
    },
  },
  plugins: [],
};
