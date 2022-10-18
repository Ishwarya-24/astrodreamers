import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Navigator from "./ContentNavigator";
import Content from "./ContentMUI";
import Header from "./ContentHeader";
import { width } from "@mui/system";
import RightNavbar from "./RightNavbar";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
}

let theme = createTheme({
  palette: {
    primary: {
      light: "#63ccff",
      main: "#009be5",
      dark: "#006db3",
    },
  },
  typography: {
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiTab: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
  mixins: {
    toolbar: {
      minHeight: 48,
    },
  },
});

const drawerWidth = 300;

export default function DocsMaterialUI() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const isSmUp = useMediaQuery(theme.breakpoints.up(" md "));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex", minHeight: "100vh", flexDirection: "row" }}>
        <CssBaseline />
        <Box
          component="nav"
          sx={{
            width: { sm: drawerWidth },
            flexShrink: { md: 0 },
            display: { md: "block", xl: "block", sm: "none", xs: "none" },
          }}
        >
          {isSmUp ? null : (
            <Navigator
              PaperProps={{
                style: { width: drawerWidth },
                position: "fixed",
                zIndex: -1,
              }}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
            />
          )}

          <Navigator
            PaperProps={{ style: { width: drawerWidth } }}
            sx={{ display: { sm: "block", xs: "none" }, position: "fixed" }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            width: "100%",
          }}
        >
          <Header onDrawerToggle={handleDrawerToggle} />

          <Box
            component="main"
            sx={{
              display: "flex",
              flexDirection: "row",
              flex: 1,
              alignItems: "stretch",
              width: "100%",
              height: "61px",
              borderColor: "#e0e0e0",
              borderStyle: "solid",
              borderLeft: "0",
              borderRight: 0,
              borderTop: 0,
            }}
          >
            {/* Right Navbar  */}
            <Box
              component="nav"
              sx={{
                bgcolor: "#fff",
                width: 240,
                height: "100%",
                flexShrink: { md: 0 },
                display: { md: "block", xl: "block", sm: "none", xs: "none" },
                order: 3,
                borderLeft: "1px solid",
                borderColor: "#e0e0e0",
              }}
            >
             <RightNavbar></RightNavbar>
            </Box>

            <Content />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
