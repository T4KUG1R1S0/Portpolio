/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          bg: "#080812",
          card: "#101027",
          border: "rgba(124, 92, 255, 0.15)",
          hover: "rgba(124, 92, 255, 0.25)",
        },
        cosmic: {
          purple: "#7C5CFF",
          blue: "#4D7CFF",
          cyan: "#4DEBFF",
          magenta: "#FF4FD8",
          text: "#F5F7FF",
          muted: "#9CA3AF",
        }
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-purple': '0 0 25px -5px rgba(124, 92, 255, 0.4)',
        'glow-cyan': '0 0 25px -5px rgba(77, 235, 255, 0.4)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      }
    },
  },
  plugins: [],
}