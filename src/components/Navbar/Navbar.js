// src/components/Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Portfolio
        </Typography>
        <Button color="inherit" component={Link} to="hero" smooth={true}>
          Home
        </Button>
        <Button color="inherit" component={Link} to="projects" smooth={true}>
          Projects
        </Button>
        <Button color="inherit" component={Link} to="contact" smooth={true}>
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;