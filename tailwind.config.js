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
                50: 'rgba(255, 255, 255, 0.05)',
                100: 'rgba(255, 255, 255, 0.1)',
                200: 'rgba(255, 255, 255, 0.2)',
                300: 'rgba(255, 255, 255, 0.3)',
                400: 'rgba(255, 255, 255, 0.4)',
                500: 'rgba(255, 255, 255, 0.5)',
                600: 'rgba(255, 255, 255, 0.6)',
                700: 'rgba(255, 255, 255, 0.7)',
            },
            blue: {},
            red: {
                900: '#ff1e46',
            },
            orange: {},
            yellow: {
                200: '#A8920A',
                400: '#F5DD00',
                500: '#FFCD28',
            },
            white: '#fff',
            black: {
                700: '#131315',
                800: '#1f1f24',
                900: '#1a1a1f',
            },
        },
        extend: {
            boxShadow: {
                menu: '0 10px 37px rgba(0, 0, 0, 0.3)',
            },
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
            keyframes: {
                'accordion-down': {
                    from: { height: 0 },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: 0 },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
};
