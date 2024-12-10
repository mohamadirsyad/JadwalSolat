/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        jedag: "jedag 0.8s ease-in-out infinite", // Animasi berjalan otomatis
      },
      keyframes: {
        jedag: {
          "0%, 100%": { transform: "scale(1) " }, // Awal dan akhir normal
          "50%": { transform: "scale(1.2)", color: "pink" }, // Tengah lebih besar (jedag)
        },
      },
    },
  },
  plugins: [],
};
