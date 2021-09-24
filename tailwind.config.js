module.exports = {
  purge: ["./src/components/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      textColor: [
        "responsive",
        "hover",
        "focus",
        "before",
        "after",
        "hover::before",
        "hover::after",
        "focus::before",
      ],
    },
  },
  plugins: [
    require("tailwindcss-pseudo-elements")({
      customPseudoClasses: ["foo"],
      customPseudoElements: ["bar"],
      contentUtilities: false,
      emptyContent: false,
      classNameReplacer: {
        "hover:before:text-black": "hbt",
      },
    }),
  ],
};
