import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { HashLink } from "react-router-hash-link";

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <List sx={{ width: 250 }}>
      <ListItem
        button
        component={HashLink}
        to="#home"
        onClick={handleDrawerToggle}
        sx={{ "&:hover": { color: "red" } }}
      >
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem
        button
        component={HashLink}
        to="#aboutme"
        onClick={handleDrawerToggle}
        sx={{ "&:hover": { color: "red" } }}
      >
        <ListItemText primary="About" />
      </ListItem>
      <ListItem
        button
        component={HashLink}
        to="#education"
        onClick={handleDrawerToggle}
        sx={{ "&:hover": { color: "red" } }}
      >
        <ListItemText primary="Education" />
      </ListItem>
      <ListItem
        button
        component={HashLink}
        to="#projects"
        onClick={handleDrawerToggle}
        sx={{ "&:hover": { color: "red" } }}
      >
        <ListItemText primary="Projects" />
      </ListItem>
      <ListItem
        button
        component={HashLink}
        to="#contactme"
        onClick={handleDrawerToggle}
        sx={{ "&:hover": { color: "red" } }}
      >
        <ListItemText primary="Contact" />
      </ListItem>
    </List>
  );

  return (
    <>
      <AppBar
        id="navbar"
        sx={{ backgroundColor: "transparent", boxShadow: "none" }}
      >
        <Toolbar sx={{ width: "100%" }}>
          <Typography
            component="div"
            sx={{
              flexGrow: 1,
              fontSize: "30px",
              fontWeight: "600",
              marginLeft: { xs: "16px", sm: "100px" },
            }}
          >
            Port<span style={{ color: "red" }}>folio.</span>
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          {!drawerOpen && (
            <List
              sx={{
                display: { xs: "none", sm: "flex" },
                flexDirection: "row",
                gap: "5px",
                listStyleType: "none",
                margin: 0,
                padding: 0,
              }}
            >
              <ListItem
                button
                component={HashLink}
                to="#home"
                sx={{ "&:hover": { bgcolor: "red", borderRadius: "10px" } }}
              >
                <ListItemText
                  primary="Home"
                  sx={{ textAlign: "center", color: "white" }}
                />
              </ListItem>
              <ListItem
                button
                component={HashLink}
                to="#aboutme"
                sx={{ "&:hover": { bgcolor: "red", borderRadius: "10px" } }}
              >
                <ListItemText
                  primary="About"
                  sx={{ textAlign: "center", color: "white" }}
                />
              </ListItem>
              <ListItem
                button
                component={HashLink}
                to="#education"
                sx={{ "&:hover": { bgcolor: "red", borderRadius: "10px" } }}
              >
                <ListItemText
                  primary="Education"
                  sx={{ textAlign: "center", color: "white" }}
                />
              </ListItem>
              <ListItem
                button
                component={HashLink}
                to="#projects"
                sx={{ "&:hover": { bgcolor: "red", borderRadius: "10px" } }}
              >
                <ListItemText
                  primary="Projects"
                  sx={{ textAlign: "center", color: "white" }}
                />
              </ListItem>
            </List>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { xs: "block", sm: "none" } }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

export default Navbar;
