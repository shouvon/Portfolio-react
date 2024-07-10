import { Box, Button, Link, Typography, Grid } from "@mui/material";
import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Education() {
  const [value, setValue] = useState("technicalSkills");

  const technicalSkills = [
    "HTML5",
    "CSS3",
    "Javascript",
    "React",
    "Redux",
    "Material UI",
  ];

  const education = [
    {
      degree: "MCA",
      institution: "Brainware University",
      duration: "2020 to 2022",
      marks: "89%",
    },
    {
      degree: "BCA",
      institution: "MAKAUT",
      duration: "2017 to 2020",
      marks: "63%",
    },
    {
      degree: "Higher Secondary",
      institution: "WBCHSE",
      duration: "2015 to 2017",
      marks: "67%",
    },
    {
      degree: "Secondary",
      institution: "WBBSE",
      duration: "2015",
      marks: "70%",
    },
  ];

  const courses = [
    {
      course: "DevOps Methodologies & Implementation Technique",
      institution: "EDP Software Limited",
      duration: "September 2021",
      link: "https://drive.google.com/file/d/1ud7U52E6RjyIGqSA4g-ASwyM4zAj7bJP/view",
    },
    {
      course: "React JS",
      institution: "Webskitters Academy",
      duration: "May 2024",
      link: "https://certificate.webskittersacademy.in/crtdls/shouvonsingha-reactjs-full-react-js-course-training/408-0/",
    },
  ];

  const logos = [
    "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=YjeKwnSQIBUq&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=wPohyHO_qO1a&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=3VGtaw5gCc8T&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=gFw7X5Tbl3ss&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=9OGIyU8hrxW5&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=AZOZNnY73haj&format=png&color=000000",
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const handleContentChange = (text) => {
    setValue(text);
  };

  return (
    <Box
      id="education-and-tools"
      sx={{ backgroundColor: "#020202", color: "#ababab", textAlign: "center", maxHeight:"100vh" }}
    >
      <Typography variant="h3" component="h2" color="white" gutterBottom>
        Skills & Education
      </Typography>
      <Box>
        <Button
          color="inherit"
          onClick={() => handleContentChange("technicalSkills")}
          sx={{
            mx: 1,
            color: value === "technicalSkills" ? "#f0191a" : "inherit",
            "&:hover": {
              color: "#f0191a",
            },
          }}
        >
          Technical Skills
        </Button>
        <Button
          color="inherit"
          onClick={() => handleContentChange("education")}
          sx={{
            mx: 1,
            color: value === "education" ? "#f0191a" : "inherit",
            "&:hover": {
              color: "#f0191a",
            },
          }}
        >
          Education
        </Button>
        <Button
          color="inherit"
          onClick={() => handleContentChange("courses")}
          sx={{
            mx: 1,
            color: value === "courses" ? "#f0191a" : "inherit",
            "&:hover": {
              color: "#f0191a",
            },
          }}
        >
          Industrial Training
        </Button>
      </Box>
      <Box>
        {value === "technicalSkills" && (
          <Box sx={{ mt: 5 }}>
            <ul>
              {technicalSkills.map((skill, index) => (
                <li key={index}>
                  <Typography variant="h6" sx={{ color: "white", padding: 1 }}>
                    {skill}
                  </Typography>
                </li>
              ))}
            </ul>
          </Box>
        )}
        {value === "education" && (
          <Box sx={{ mt: 5 }}>
            {education.map((edu, index) => (
              <Box key={index} sx={{ padding: 1 }}>
                <Typography variant="h6" sx={{ color: "white" }}>
                  {edu.degree}
                </Typography>
                <Typography sx={{ color: "#ababab" }}>
                  {edu.duration} - {edu.institution} - Marks {edu.marks}
                </Typography>
              </Box>
            ))}
          </Box>
        )}
        {value === "courses" && (
          <Box sx={{ mt: 5 }}>
            {courses.map((course, index) => (
              <Box key={index} sx={{ padding: 2 }}>
                <Typography variant="h6" sx={{ color: "white" }}>
                  {course.course}
                </Typography>
                <Typography sx={{ color: "#ababab" }}>
                  {course.institution} ({course.duration})
                  <br />
                  <Link
                    href={course.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: "", textDecoration: "none" }}
                  >
                    Certificate
                  </Link>
                </Typography>
              </Box>
            ))}
          </Box>
        )}
      </Box>
      <Grid container spacing={2} alignItems="center" justifyContent="center" sx={{ bgcolor: "black", mt: 5 }}>
        <Grid item xs={10}>
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            // centerMode={true}
            containerClass="carousel-container"
            itemClass="carousel-item-padding-40-px"
          >
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Tool ${index}`}
                style={{ width: "100%", height: "auto", maxHeight: "100px", maxWidth: "100px" }}
              />
            ))}
          </Carousel>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Education;
