module.exports = {
  content: ["./app/**/*.{html,ejs}"],
  theme: {
    fontFamily: {
      'sans': ['"Noto Sans TC"', 'cursive', 'system-ui', 'sans-serif'],
      'mono': ['"Azeret Mono"', 'monospace'],
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
    extend: {
      colors:{
        blue: "#09ACF5",
        green: "#62DB54",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}