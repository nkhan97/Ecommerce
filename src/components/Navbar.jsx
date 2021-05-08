import React from "react";
import { IconButton, Badge } from "@material-ui/core";
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ totalItems }) => {
  const location = useLocation();
  

  return (
    <div class="navbar">
      <div class="logo">
        <a class="companyName" href="/">Monitors4Everyone</a>
      </div>
      <div class="navbarRight">
          {location.pathname === '/Cart' && (
            <a class="navLink" href="/">Home</a>
          )}
          {location.pathname === '/' && (
            <IconButton component= {Link} to="/Cart" aria-label=" Show cart items" color="inherit">
              <Badge badgeContent = {totalItems} color="secondary">
                <i class="basketIcon fas fa-shopping-cart"></i>
              </Badge>
            </IconButton>
          )}
      </div> 
    </div>
  );
};

export default Navbar;