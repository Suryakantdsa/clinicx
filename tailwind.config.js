// tailwind.config.js
export default {
  theme: {
    extend: {
      animation: {
        float: "float 6s ease-in-out infinite",
        "gradient-x": "gradient-x 3s ease infinite",
        "bounce-slow": "bounce 3s infinite",
        "spin-slow": "spin 8s linear infinite",
      },
    },
  },
  keyframes: {
    float: {
      "0%, 100%": { transform: "translateY(0)" },
      "50%": { transform: "translateY(-20px)" },
    },
    "gradient-x": {
      "0%, 100%": {
        "background-position": "0% 50%",
      },
      "50%": {
        "background-position": "100% 50%",
      },
    },
  },
};
