import React, { useEffect } from "react";
import { AppBar, Box, Button, Link, Toolbar, Typography } from "@mui/material";

import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate();

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        backgroundColor: 'white',
        // height: "13vh",
      }}
    >
      <Toolbar sx={{ flexWrap: "wrap", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex" }}>
          <img src="logo.png" alt="Logo image" width="100px" height="100px" />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ display: { xs: "flex", md: "flex" } }}>
            <Link
              variant="button"
              href="#"
              sx={{
                my: 1,
                mx: 1.5,
                fontWeight: "600",
                fontSize: "18px",
              }}
              underline="none"
            >
              Home(PT)
            </Link>
            <Link
              variant="button"
              href="#"
              sx={{
                my: 1,
                mx: 1.5,
                color: "var(--secondary, #111)",
                fontWeight: "600",
                fontSize: "18px",
              }}
              underline="none"
            >
              Blog(PT)
            </Link>
            <Link
              variant="button"
              href="#"
              sx={{
                my: 1,
                mx: 1.5,
                color: "var(--secondary, #111)",
                fontWeight: "600",
                fontSize: "18px",
              }}
              underline="none"
            >
              Assistant Nai
            </Link>
            <Link
              variant="button"
              href="#"
              sx={{
                my: 1,
                mx: 1.5,
                color: "var(--secondary, #111)",
                fontWeight: "600",
                fontSize: "18px",
              }}
              underline="none"
            >
              PT
            </Link>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header
