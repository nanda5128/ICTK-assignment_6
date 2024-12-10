import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { TextField, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState({});
  const [userType, setUserType] = useState('');
  const [secretKey, setSecretKey] = useState('');
  const [error, setError] = useState('');

  const inputHandler = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const userHandler = (e) => {
    setUserType(e.target.value);
  };

  const secretKeyHandler = (e) => {
    setSecretKey(e.target.value);
  };

  const addHandler = () => {
    
    if (userType === 'Admin' && secretKey !== 'Aadarsh') {
      setError('Incorrect Secret Key. Only "Aadarsh" is allowed for Admin registration.');
      return;
    } else {
      setError(''); 
    }

    
    const userPayload = {
      ...users,
      userType,
    };

    console.log(userPayload);

    
    axios
      .post('http://localhost:3000/user/s', userPayload)
      .then((res) => {
        console.log(res);
        navigate('/dash');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box
      sx={{ flexGrow: 1 }}
      style={{ marginTop: '10%', marginLeft: '20%', width: '50%' }}
      noValidate
      autoComplete="off"
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>Register As
          <input type="radio" name="UserType" value="User" onChange={userHandler} /> User
          <input type="radio" name="UserType" value="Admin" onChange={userHandler} /> Admin
          <br />
          {userType === 'Admin' ? (
            <TextField
              fullWidth
              id="outlined-basic"
              label="SecretKey"
              variant="outlined"
              name="secretkey"
              value={secretKey}
              onChange={secretKeyHandler}
            />
          ) : null}
        </Grid>

        <Grid item xs={6}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Name"
            variant="outlined"
            name="name"
            onChange={inputHandler}
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Mail"
            variant="outlined"
            name="email"
            onChange={inputHandler}
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="PhoneNo"
            variant="outlined"
            name="phone"
            onChange={inputHandler}
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Password"
            variant="outlined"
            name="password"
            onChange={inputHandler}
          />
        </Grid>

        <Grid item xs={12}>
          {error && <Typography color="error">{error}</Typography>} {/* Display error if exists */}
        </Grid>

        <Grid item xs={2}>
          <button onClick={addHandler}>Signup</button>
        </Grid>

        <Grid item xs={12}>
          <Typography style={{ color: 'darkblue' }}>
            <Link to={'/'}>Already Registered? Click here</Link>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Signup;