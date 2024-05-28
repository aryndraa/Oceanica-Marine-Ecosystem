/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "tentang.html",
    "pilar-kehidupan-bumi.html",
    "dekonstruksi-kerusakan-laut.html",
    "melindungi-ekosistem-bawah-laut.html",
    "pelangi-bawah-laut.html",
    "kontak.html",
    "profil.html",
    "ocea-plastic-tracker.html",
    "rincian.html",
    "eco-marine-quiz.html",
    "quiz.html",
    "ocean-marine-simulation.html",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#FBF9FF",
        primary: "#BAD8FF",
        font: "#044D90",
        dark: "#000022",
        normal: "#00D1FF",
        rendah: "#4682B4",
        sedang: "#5F9EA0",
        signifikan: "#4ED79A",
        moderat: "#006400",
        serius: "#6B8E23",
        kritis: "#8B4513",
        total: "#654321",
      },
    },
  },
  plugins: [require("daisyui")],
};
