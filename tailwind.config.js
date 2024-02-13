/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        container: {
            padding: {
                DEFAULT: '1.5rem',
                sm: '2.5rem',
                md: '2.5rem',
                lg: '3.75rem',
                xl: '5rem',
            },
        },

        fontFamily: {
            display: ['Raleway', 'sans-serif'],
        },
        screens: {
            xs: '390px',
            sm: '744px',
            md: '1024px',
            lg: '1440px',
            xl: '1920px',
        },
        borderRadius: {
            100: '6.25rem',
        },
        extend: {},
    },
    plugins: [],
}
