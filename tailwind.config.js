module.exports = {
  content: ["./app/**/*.{html,ejs}"],
  theme: {
    extend: {
      colors:{
        blue: "#09ACF5",
        green: "#62DB54",
      },
    },
    container:{
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '12px',
        lg: '24px',
        // xl: '24px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}