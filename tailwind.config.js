/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "radial-gradient-primary":
          "radial-gradient(circle, rgba(16,185,129,0.35898109243697474) 0%, rgba(9,121,110,0) 47%)",
        "radial-gradient-yellow":
          "radial-gradient(circle, rgba(255,250,130,1) 0%, rgba(9,121,110,0) 70%)",
        "radial-gradient-blue":
          "linear-gradient(160deg, rgba(126,132,235,1) 0%, rgba(253,255,255,1) 60%, rgba(126,132,235,1) 100%)",
      },
      colors: {
        primary: "#10B981",
        redd: "#EF4444",
        bluee: "#1D4ED8",
      },
      textColor: {
        primary: "#10B981",
        redd: "#EF4444",
        bluee: "#1D4ED8",
      },
    },
    fontFamily: {
      primary: ["poppins", "sans-serif", "Georgia", "system-ui"],
    },
  },
  plugins: [],
};
