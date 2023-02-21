/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/components/**/*.tsx', './src/pages/**/*.tsx', './src/layouts/**/*.tsx'],
    theme: {
        container: {
            center: true,
            padding: '2rem'
        },
        extend: {
            typography: {
                DEFAULT: {
                    css: {
                        maxWidth: '200ch'
                    }
                }
            }
        }
    },
    plugins: [require('@tailwindcss/typography')]
}
