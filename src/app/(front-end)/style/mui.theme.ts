import { getInitialColorMode } from "@/app/lib/util";
import { PaletteMode, createTheme } from "@mui/material";
import { useEffect } from "react";

export const dark_theme = createTheme({
  palette: {
    mode: "dark",
  },
});

export const light_theme = createTheme({
  palette: {
    mode: "light",
  },
});

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    // ...(mode === 'light'
    //   ? {
    //       // palette values for light mode
    //       primary: amber,
    //       divider: amber[200],
    //       text: {
    //         primary: grey[900],
    //         secondary: grey[800],
    //       },
    //     }
    //   : {
    //       // palette values for dark mode
    //       primary: deepOrange,
    //       divider: deepOrange[700],
    //       background: {
    //         default: deepOrange[900],
    //         paper: deepOrange[900],
    //       },
    //       text: {
    //         primary: '#fff',
    //         secondary: grey[500],
    //       },
    //     }),
  },
});
