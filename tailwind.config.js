/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}",

        './*.{html,js}'],
    theme: {
        extend: {

            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                'themebeige': '#fef6c9',
                'themegreen': '#93d576',
                'themelightgrey': '#93d576',
                'themegrey': '#878e88',
                'themebrown': '#725752'
            },
        },
    },
    plugins: [],

  }