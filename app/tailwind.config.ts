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
                    // https://colorkit.io | https://colorkit.io/#c8b4dc-#14003c-11
                    50: "#C8B4DC",
                    100: "#BBA2D2",
                    200: "#AE90C8",
                    300: "#A17EBE",
                    400: "#946CB4",
                    500: "#875AAA",
                    600: "#7A48A0",
                    700: "#6D3696",
                    800: "#60248C",
                    900: "#531282",
                    950: "#460078",
                },
            },
        },
    },
    plugins: [],
} satisfies Config;
