/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,ttf}",
        './*.{html,js,ttf}'],
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

        extend: {
            fontFamily: {
                'montserrat': ['Montserrat', 'sans-serif']
            }
        },

        extend: {
            screens: {
                'tablet': '640px',
                // => @media (min-width: 640px) { ... }
          
                'laptop': '1024px',
                // => @media (min-width: 1024px) { ... }
          
                'desktop': '1280px',
                // => @media (min-width: 1280px) { ... }
            }
        }
        
    },
    plugins: [],

  }