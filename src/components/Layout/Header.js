import React, { useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import Logo1 from "../../images/tallentex-logo.png";

import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import "../../styles/HeaderStyles.css";
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  // hndle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  //menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 }}
      >
        <img src={Logo1} alt="logo" height={"50"} width="200" />
      </Typography>
      <Divider />
      <ul className="mobile-navigation">
        <li>
          <NavLink activeClassName="active" to={"/"}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink>Gallery</NavLink>
        </li>
        <li>
          <NavLink>Download</NavLink>
        </li>
        <li>
          <NavLink>Test Center</NavLink>
        </li>
        <li>
          <NavLink>TALLENTEX Overseas</NavLink>
        </li>
      </ul>
    </Box>
  );
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "#fff" }}>
          <Toolbar>
            <IconButton
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: "none" },
              }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={"goldenrod"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <img src={Logo1} alt="logo" height={"50"} width="200" />
            </Typography>
            <Box
              sx={{ display: { xs: "none", sm: "block" } }}
              className="nav_bar"
            >
              <ul className="navigation-menu">
                <li>
                  <NavLink activeClassName="active" to={"/"}>
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink>Gallery</NavLink>
                </li>
                <li>
                  <NavLink>Download</NavLink>
                </li>
                <li>
                  <NavLink>Test Center</NavLink>
                </li>
                <li>
                  <NavLink>TALLENTEX Overseas</NavLink>
                </li>
              </ul>
              <div className="nav_buttom">
                <button><i class="fa-solid fa-user"></i><span>Login</span></button>
                <button><i class="fa-solid fa-user"></i> <span>Register</span></button>
                <button><i class="fa-solid fa-phone"></i> <span>Enquiry</span></button>
              </div>
              <div className="whatsapp-btn">
                <i class="fa-brands fa-whatsapp"></i>
              </div>
              <div class="container">
                <input type="checkbox" id="popup-toggle" />
                <label for="popup-toggle" id="openBtn">
                  <i class="fa-solid fa-envelope"></i>
                  <span>Leave a Message !</span>
                </label>
                <div class="popup">
                  <label for="popup-toggle" class="close-btn">
                    <i class="fa-solid fa-xmark"></i>
                  </label>
                  <div class="popup-content">
                    <h2>Leave a Message !</h2>
                    <p>Leave your query and we will write you back !</p>
                    <label for="username">Name:</label>
                    <input type="text" id="username" name="username" placeholder="Enter Your Name.."required />
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Enter Your email.."required />
                    <label for="number">Email:</label>
                    <input type="number" id="number" name="number" placeholder="Enter Your Phone Number.."required />
                    <button type="submit">Next</button>
                  </div>
                </div>
              </div>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;
