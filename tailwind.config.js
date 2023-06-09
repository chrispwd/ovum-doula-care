/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.js',
        './src/**/*.tsx',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                black: "#2F2117",
                white: "#EEE",
                brown: "#2F2211",
                "off-white": "#FAF7F4",
                olive: "#908B6C",
                "olive-dark": "#555A3F",
                yellow: "#BA8C47",
                "yellow-dark": "#7D432F",
                cream: "#C8B8A9",
                "cream-dark": "#2F2117",
            },
        },
        fontFamily: {
            sans: [
                "Josefin Slab",
                "Roboto",
                "ui-sans-serif",
                "system-ui",
                "-apple-system",
                "BlinkMacSystemFont",
                '"Segoe UI"',
                '"Helvetica Neue"',
                "Arial",
                '"Noto Sans"',
                "sans-serif",
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
                '"Noto Color Emoji"',
            ],
            serif: [
                "ui-serif",
                "Georgia",
                "Cambria",
                '"Times New Roman"',
                "Times",
                "serif",
            ],
            mono: [
                "Amatic SC",
                "ui-monospace",
                "SFMono-Regular",
                "Menlo",
                "Monaco",
                "Consolas",
                '"Liberation Mono"',
                '"Courier New"',
                "monospace",
            ],
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
