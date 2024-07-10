import React from "react";
import { Box, Container, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      id="footer"
      component="footer"
      sx={{
        backgroundColor: "#333",
        color: "white",
        py: 3,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body1" align="center">
          Copyright received by © Shouvon Singha.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
