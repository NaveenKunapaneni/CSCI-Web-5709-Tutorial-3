import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';


function Navbar(props) {
  

  const handleRegisterButton = () => {
    window.location.reload();
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{justifyContent: 'flex-end'}}>
          {props.isLoggedIn ? (
            <Button  color="inherit" onClick={handleRegisterButton} >Logout</Button>
          ) : (
            <Button  color="inherit" onClick={handleRegisterButton} >Register</Button>
          ) }
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;