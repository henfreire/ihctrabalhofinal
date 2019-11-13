import lightBlue from "@material-ui/core/colors/lightBlue";
import lightGreen from "@material-ui/core/colors/lightBlue";
export const primary = "#ff6e0d";
export default {
    palette: {
        primary: {
            light: lightBlue[300],
            main: lightBlue[700],
            dark: lightBlue[700],
            contrastText: "#fff"
        },
        secondary: {
            light: "#64dd17",
            main: "#64dd17",
            dark: "#64dd17",
            contrastText: "#fff"
        }
    },
    typography: {
        useNextVariants: true,
        color: "#707070",
        button: {
            fontWeight: 400,
            textAlign: "capitalize"
        },
        title: {
            color: "#707070"
        }
    },
    overrides: {
        MuiCard: {
            root: {
                border: "1px solid #dadce0"
            }
        },
        MuiPaper: {
            root: {
                border: "1px solid #e5e5e5",
                boxShadow: "0px 2px 7px 0px rgba(0,0,0,0.05)"
            },
            rounded: {
                borderRadius: "10px"
            }
        },
        MuiAppBar: {
            root: {
                border: "none"
            }
        },
        MuiDrawer: {
            paper: {
                border: "none"
            }
        },
        MuiToolBar: {
            root: {
                border: "none"
            }
        },
        MuiTypography: {
            root: {
                color: "#3e3e3e"
            }
        },
        MuiDialog: {
            paper: {
                border: "none"
            }
        }
    }
};
