/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    darkMode: [
        'variant',
        [
            // IF config == 'light':
            //     USE(theme.light)
            // ELIF config == 'dark':
            //     USE(theme.dark)
            '&:is(.dark *)',
            // ELIF prefers == 'dark' && config != 'light':
            //     USE(theme.dark)
            '@media (prefers-color-scheme: dark) { &:not(.light *) }',
            // If the config is not specified and the user does not prefer 'dark' -> user prefers light
            // ELSE:
            //     USE(theme.light)
        ],
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    // Blending from  rgb(180, 160, 200) or #B4A0C8
                    //            to  rgb( 30,   0,  80) or #1E0050 using
                    // https://colorkit.io | https://colorkit.io/#b4a0c8-#1e0050-11
                    50: '#B4A0C8',
                    100: '#A590BC',
                    200: '#A590BC',
                    300: '#8770A4',
                    400: '#786098',
                    500: '#69508C',
                    600: '#5A4080',
                    700: '#4B3074',
                    800: '#3C2068',
                    900: '#2D105C',
                    950: '#1E0050',
                },
            },
        },
    },
    plugins: ['prettier-plugin-tailwindcss', require('@tailwindcss/container-queries')],
};
