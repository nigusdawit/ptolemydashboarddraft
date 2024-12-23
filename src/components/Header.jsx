import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import "./Header.css"

const Header = () => {
  return (
    <AppBar position="static" color="default" elevation={0}>
      <Toolbar style={{alignContent:"center"}}>
       User Managment
      </Toolbar>
    </AppBar>
  );
};

export default Header