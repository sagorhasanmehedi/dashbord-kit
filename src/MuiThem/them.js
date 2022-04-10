import { createTheme } from "@mui/material";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1000,
      lg: 1200,
      xl: 1920,
    },
  },
  background: {
    primary: "#1A202E",
  },
  palette: {
    text: {
      primary: "#A4A6B3",
    },
  },
  shadows: [
    "none",
    "0px 0px 1px rgba(117, 131, 142, 0.04), 0px 2px 4px rgba(52, 60, 68, 0.16)",
  ],
});
