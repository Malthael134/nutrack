import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
    content: ["./src/**/*.tsx"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-geist-sans)", ...fontFamily.sans],
            },
            colors: {
                primary: {
                    // Blending from  rgb(200, 180, 220) or #C8B4DC
                    //            to  rgb( 70,   0, 120) or #460078 using
                    // https://colorkit.io | https://colorkit.io/#b4a0c8-#1e0050-11
                    50: "#B4A0C8",
                    100: "#A590BC",
                    200: "#A590BC",
                    300: "#8770A4",
                    400: "#786098",
                    500: "#69508C",
                    600: "#5A4080",
                    700: "#4B3074",
                    800: "#3C2068",
                    900: "#2D105C",
                    950: "#1E0050",
                },
            },
        },
    },
    plugins: [],
} satisfies Config;
