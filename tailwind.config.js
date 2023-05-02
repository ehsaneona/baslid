/** @type {import("tailwindcss").Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        container: {
            center: true,
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            purple: {},
            green: {},
            gray: {
                100: 'rgba(255, 255, 255, 0.1)',
                200: 'rgba(255, 255, 255, 0.2)',
                300: 'rgba(255, 255, 255, 0.3)',
                400: 'rgba(255, 255, 255, 0.4)',
                500: 'rgba(255, 255, 255, 0.5)',
            },
            blue: {},
            red: {},
            orange: {},
            white: '#fff',
            black: {
                700: '#131315',
                800: '#1f1f24',
                900: '#1a1a1f',
            },
        },
        extend: {
            spacing: {
                15: '3.75rem',
            },
            maxWidth: {
                '1/4': '25%',
                '1/3': '33.3%',
                '1/2': '50%',
                '2/4': '50%',
                '3/4': '75%',
                '8/10': '80%',
                '9/10': '90%',
            },
            minWidth: {
                '1/4': '25%',
                '1/3': '33.3%',
                '1/2': '50%',
                '2/4': '50%',
                '3/4': '75%',
                '8/10': '80%',
                '9/10': '90%',
            },
        },
    },
};
