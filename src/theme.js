import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#0e0e0e",
            content: "#18191a !important",
            menu: "#242526 !important",
            post: "#242526 !important",
            iconBg: "#3a3b3c !important",
            select: "#2a69bb !important",
            text: "#b3b5b9 !important"
        }
    },
    typography:{
        body1:{
            color: "#b3b5b9 !important",
            fontSize: "0.8rem",
            display: "inline",
            fontWeight: 600
        },
        body2:{
            color: "#fff !important",
            fontSize: "0.8rem",
            display: "inline",
            fontWeight: 600
        }
    }
})

export default theme;