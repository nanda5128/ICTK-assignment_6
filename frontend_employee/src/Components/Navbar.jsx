import React from 'react'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { AppBar } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }} >
    <AppBar position="static" style={{marginTop:'0%',backgroundColor:'black'}}>
      <Toolbar>
   
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} align="left">
     Employe Dashboard
        </Typography>
       <Link to={'/dash'}  style={{color:'white'}} > <Button color="inherit">Home</Button> </Link>
       <Link to={'/form'}  style={{color:'white'}}> <Button color="inherit">Add Form</Button> </Link>
       <Link to={'/'}  style={{color:'white'}}> <Button color="inherit">Login</Button> </Link>
       <Link to={'/s'}  style={{color:'white'}}> <Button color="inherit">Signup</Button> </Link>

      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Navbar