/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      keyframes: {
        ping: {
          "0%, 70%, 100%": { opacity: 1 },
          "35%": { opacity: 0 },
        },
      },
      fontFamily: {
        ubuntu: ['"Ubuntu"'],
      },
      colors: {
        primary: "#645050",
        secondary: "#01DF74",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "PDCL-green": "#00A66C",
      },
      lighting: {
        neon: "text-white text-shadow-lg stroke-2 stroke-white",
      },

      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "300px",
      },
      width: {
        content: "fit-content",
      },
      backgroundImage: {},
    },
  },
  animation: {
    // This is required to use the custom keyframe
    // ... existing animations
    blink: "blink 1s linear infinite", // Define the blink animation
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".gradient-alt-flow": {
          backgroundImage:
            "linear-gradient(to right, #006642, #00d4ff 40%, #006642 80%)",
          backgroundSize: "200% 100%",
          animation: "flow 5s linear infinite",
          "@keyframes flow": {
            "0%": { backgroundPosition: "100% 0" },
            "100%": { backgroundPosition: "-100% 0" },
          },
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        },
      });
    },
  ],
};
