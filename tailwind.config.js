/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx,md}",
    "./components/*.{js,jsx,ts,tsx,md}",
    "./node_modules/@usekeyp/ui-kit/lib/components/**/*.{js,jsx,ts,tsx,md}",
  ],
  plugins: [require("@usekeyp/ui-kit/plugin")],
};
