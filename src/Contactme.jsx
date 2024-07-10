import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Link,
  IconButton,
} from "@mui/material";
import {
  Email,
  Phone,
  LinkedIn,
  Instagram,
  Facebook,
  GitHub,
} from "@mui/icons-material";
import emailjs from "emailjs-com";

function Contactme() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_tw1yth5",
        "template_l2nc63i",
        e.target,
        "Eg2mr3oCqIvtd9HRq"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log(error.text);
          alert("There was an error sending the message!");
        }
      );
  };

  return (
    <Box
      id="contactme"
      sx={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#020202",
        color: "white",
        padding: "0 20px", 
      }}
    >
      <Grid container spacing={4} maxWidth="lg">
        <Grid item xs={12} md={6}>
          <Box sx={{ mb: { xs: 4, md: 0 } }}> 
            <Typography variant="h3" component="h2" gutterBottom>
              Contact Me
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Email sx={{ mr: 1 }} />
              <Typography>shouvonsingha@gmail.com</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Phone sx={{ mr: 1 }} />
              <Typography>+91 8250981661</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Link
                href="https://www.linkedin.com/in/shouvon-singha/"
                target="_blank"
                color="inherit"
              >
                <IconButton sx={{ color: "#0e76a8" }}>
                  <LinkedIn />
                </IconButton>
              </Link>
              <Link
                href="https://www.instagram.com/shouvonsingha/"
                target="_blank"
                color="inherit"
              >
                <IconButton sx={{ color: "#e1306c" }}>
                  <Instagram />
                </IconButton>
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=100005138416508"
                target="_blank"
                color="inherit"
              >
                <IconButton sx={{ color: "#1877f2" }}>
                  <Facebook />
                </IconButton>
              </Link>
              <Link
                href="https://github.com/shouvon"
                target="_blank"
                color="inherit"
              >
                <IconButton sx={{ color: "#333" }}>
                  <GitHub />
                </IconButton>
              </Link>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              alignItems: "center", 
            }}
            onSubmit={handleSubmit}
          >
            <TextField
              label="Your Name"
              variant="outlined"
              fullWidth
              name="name"
              value={formData.name}
              onChange={handleChange}
              sx={{ bgcolor: "#333", borderRadius: "5px" }}
            />
            <TextField
              label="Your Email"
              variant="outlined"
              fullWidth
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              sx={{ bgcolor: "#333", borderRadius: "5px" }}
            />
            <TextField
              label="Your Message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              name="message"
              value={formData.message}
              onChange={handleChange}
              sx={{ bgcolor: "#333", borderRadius: "5px" }}
            />
            <Button
              variant="contained"
              type="submit"
              fullWidth
              sx={{ bgcolor: "#f0191a", ":hover": { bgcolor: "#e86c6c" } }}
            >
              Submit
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Contactme;
