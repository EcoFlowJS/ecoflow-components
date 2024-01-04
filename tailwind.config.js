/** @type {import('tailwindcss').Config} */
export default {
  jit: true,
  mode: "jit",
  content: ["src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#61c6d3",
          100: "#4abdcd",
          200: "#34b5c6",
          300: "#1dadc0",
          400: "#1a9cad",
          500: "#178a9a",
          600: "#147986",
          700: "#116873",
          800: "#0f5760",
          900: "#0c454d",
        },
        secondary: "#FBFBF9",
        "bg-color": "#0E295E",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  prefix: "ecolib-",
};
