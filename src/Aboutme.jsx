import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { motion } from "framer-motion";
import user from "./assets/user.jpg";
import cv from "./assets/Shouvon Singha.pdf";

function Aboutme() {
  const handleDownloadCV = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = cv;
    downloadLink.download = "Shouvon Singha.pdf";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <Card
      id="aboutme"
      sx={{
        p: 12,
        maxWidth: "4x1",
        mx: "auto",
        backgroundColor: "#020202",
        color: "#ababab",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <CardMedia
            component="img"
            src={user}
            alt="Profile Picture"
            sx={{
              borderRadius: 4,
              width: { xs: "25rem", md: "25rem" },
              height: { xs: "35rem", md: "35rem" },
              mb: { xs: 6, md: 0 },
              mr: { md: 8 },
            }}
          />
        </motion.div>
        <CardContent sx={{ flex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography variant="h3" component="h2" color="white" gutterBottom>
              About Me
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
              Hi, my name is Shouvon Shingha, and I'm from Berhampore,
              Murshidabad. I completed my MCA from Brainware University in 2022.
              Recently, I finished a React JS course from Webskiters Academy,
              where I gained hands-on experience with React JS, Redux, and
              Material-UI. I've built several projects, including an e-commerce
              website, a CRUD application, and a file uploader etc. Now I'm
              ready to apply my skills and knowledge in web development as a
              frontend developer. That's all.
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#f0191a",
                color: "white",
                "&:hover": { backgroundColor: "#e86c6c" },
              }}
              onClick={handleDownloadCV}
            >
              Download CV
            </Button>
          </motion.div>
        </CardContent>
      </Box>
    </Card>
  );
}

export default Aboutme;
