/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                'primary': {
                    // Blending from  rgb(200, 180, 220) to rgb(70, 0, 120) using
                    // https://colorkit.io | https://colorkit.io/#c8b4dc-#460078-11
                    50: '#C8B4DC',
                    100: '#BBA2D2',
                    200: '#AE90C8',
                    300: '#A17EBE',
                    400: '#946CB4',
                    500: '#875AAA',
                    600: '#7A48A0',
                    700: '#6D3696',
                    800: '#60248C',
                    900: '#531282',
                    950: '#460078',
                }
            }
        },
    },
    plugins: [],
}
