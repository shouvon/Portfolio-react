import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import bgimage from "./assets/bg.jpg";
import TypingAnimation from "./TypingAnimation";
import { HashLink } from "react-router-hash-link";

const Home = () => {
  return (
    <Box
      id="home"
      sx={{
        height: "100vh",
        backgroundImage: `url(${bgimage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        color: "white",
        overflowX: "hidden",
      }}
    >
      <Box
        sx={{
          marginLeft: {
            xs: "0",
            sm: "50px",
            md: "100px",
            lg: "200px",
          },
          padding: {
            xs: "0 20px",
          },
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography variant="h2" component="div">
            Hi, I'm <br />
            <span style={{ color: "red" }}>Shouvon Singha</span>
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Typography variant="h5" component="p">
            and I'm a <TypingAnimation />
          </Typography>
        </motion.div>
        <Box sx={{mt:3}}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <HashLink to="#contactme">
            <Button
              variant="contained"
              type="submit"
              sx={{
                bgcolor: "#f0191a",
                ":hover": { bgcolor: "#e86c6c" },
                padding: {
                  xs: "8px 16px",
                  sm: "10px 20px",
                  md: "11px 22px",
                },
                fontSize: {
                  xs: "0.8rem",
                  sm: "0.9rem",
                  md: "1rem",
                },
              }}
            >
              Contact Me
            </Button>
          </HashLink>
        </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
