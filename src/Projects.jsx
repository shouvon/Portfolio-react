import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Button,
  Link,
} from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const projects = [
  {
    image:
      "https://img.freepik.com/free-vector/creative-abstract-quantum-illustration_23-2149236239.jpg?t=st=1720607999~exp=1720611599~hmac=366ba909a9efacaffe9ef6e1a7a2e371f7be02556bd19550e9d04065c3289847&w=740",
    name: "Advance CRUD Application",
    projectLink: "https://leafy-mermaid-399462.netlify.app/",
    details:
      "Developed an advanced CRUD (Create, Read, Update, Delete) application using React.js, Material-UI (MUI). Implemented local storage to provide a seamless data-saving feature. along with capabilities to create, read, update, and remove data.",
  },
  {
    image:
      "https://img.freepik.com/free-vector/creative-abstract-quantum-illustration_23-2149236239.jpg?t=st=1720607999~exp=1720611599~hmac=366ba909a9efacaffe9ef6e1a7a2e371f7be02556bd19550e9d04065c3289847&w=740",

    name: "Eproducts",
    projectLink: "https://polite-sunshine-021a4e.netlify.app/#/login",
    details:
      "Developed an e-commerce website using React js, Redux-toolkit Material-UI (MUI), POST and GET Apis. Implemented local storage to provide a seamless data-saving feature. Features include retrieve data from api, user authentication with login and sign-up functionality, Filter Products, AddToCart, Remove Item, Total price update, logout etc.",
  },
  {
    image:
      "https://img.freepik.com/free-vector/creative-abstract-quantum-illustration_23-2149236239.jpg?t=st=1720607999~exp=1720611599~hmac=366ba909a9efacaffe9ef6e1a7a2e371f7be02556bd19550e9d04065c3289847&w=740",
    name: "File Uploader",
    projectLink: "https://classy-kheer-1ce062.netlify.app/",
    details:
      "Developed a file upload application using React JS, Material-UI (MUI), Working with POST and GET Apis, local storage, token etc. Implement Registration, Login & authentication, Create post and manage post features.",
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Projects() {
  return (
    <Box
      id="projects"
      sx={{
        minHeight: "60vh",
        bgcolor: "#020202",
        color: "white",
        textAlign: "center",
        pt: 8,
      }}
    >
      <Typography variant="h3" component="h2" color="white" gutterBottom>
        Personal Projects
      </Typography>
      <Carousel
        color="white"
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
      >
        {projects.map((project, index) => (
          <Card
            key={index}
            sx={{
              textAlign: "center",
              bgcolor: "#333",
              color: "white",
              m: 5,
              position: "relative",
              "&:hover .details": {
                opacity: 1,
                visibility: "visible",
              },
            }}
          >
            <CardActionArea
              onClick={() => window.open(project.projectLink, "_blank")}
            >
              <CardMedia
                component="img"
                height="225"
                image={project.image}
                alt={project.name}
              />
              <CardContent sx={{ position: "relative" }}>
                <Typography
                  className="default"
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  {project.name}
                </Typography>
              </CardContent>
              <Box
                className="details"
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  bgcolor: "rgba(0, 0, 0, 0.7)",
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: 0,
                  visibility: "hidden",
                  transition:
                    "opacity 0.3s ease-in-out, visibility 0.3s ease-in-out",
                  p: 2,
                }}
              >
                <Typography variant="body1">{project.details}</Typography>
              </Box>
            </CardActionArea>
          </Card>
        ))}
      </Carousel>

      <Link
        href="https://github.com/shouvon"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ textDecoration: "none" }}
      >
        <Button
          variant="contained"
          sx={{ bgcolor: "#f0191a", ":hover": { bgcolor: "#e86c6c" } }}
        >
          Explore Github
        </Button>
      </Link>
    </Box>
  );
}

export default Projects;
