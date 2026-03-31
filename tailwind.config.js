/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        accent: {
          purple: "#915EFF",
          cyan: "#00cea8",
          pink: "#bf61ff",
          gold: "#f5af19",
        },
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
        "card-hover": "0px 45px 150px -15px rgba(145, 94, 255, 0.25)",
        glow: "0 0 20px rgba(145, 94, 255, 0.3)",
        "glow-lg": "0 0 40px rgba(145, 94, 255, 0.4)",
        "glow-cyan": "0 0 20px rgba(0, 206, 168, 0.3)",
        premium: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-premium": "linear-gradient(135deg, #915EFF 0%, #00cea8 100%)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        "gradient-x": "gradient-x 3s ease infinite",
        shimmer: "shimmer 2s linear infinite",
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(145, 94, 255, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(145, 94, 255, 0.6)" },
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
