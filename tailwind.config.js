/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "radial-gradient":
          "radial-gradient(circle, rgba(88,220,238,0.5074404761904762) 0%, rgba(9,121,110,0) 47%)",
      },
    },
  },
  plugins: [],
};
