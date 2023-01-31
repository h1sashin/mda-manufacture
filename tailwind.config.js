/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/components/**/*.tsx', './src/pages/**/*.tsx', './src/layouts/**/*.tsx'],
    theme: {
        container: {
            center: true,
            padding: '2rem'
        },
        extend: {}
    },
    plugins: [require('@tailwindcss/typography')]
}
