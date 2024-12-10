import { Button, TextField } from '@mui/material';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid2';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import adminAxios from '../adminaxios';

const EmForm = () => {
  const location = useLocation();
  const navigate = useNavigate(); 
const [val,setval] = useState({
    name:"",
    position:"",
    location:"",
    salary:""
})
useEffect(() => {
  if (location.state != null) {
    setval({
     name: location.state.val.name,
      position: location.state.val.position,
      location: location.state.val.location,
      salary:location.state.val.salary
    });
  }
}, [location.state]);

const inputHandler = (e)=>{
setval({...val,[e.target.name] : e.target.value})
console.log(val);

}

const handleSubmit = (e) =>{
  e.preventDefault();
  if (location.state != null) {
    adminAxios.put(`http://localhost:3000/api/employeelist/${location.state.val._id}`, val)
      .then((res) => {
        alert(res.data);
        navigate('/dash'); 
      })
      .catch((err) => {
        console.log(err);
        alert("Error updating employee.");
      });
  } else {
    adminAxios.post('http://localhost:3000/api/employeelist', val)
      .then((res) => {
        console.log(res)
        alert("Employee added successfully");
        alert(res.data);
        navigate('/dash');
      })
      .catch((err) => {
        console.log(err.response || err);  
                alert("Error adding employee.");
      });
  }

};



  return (
    <div>
        <form onSubmit={handleSubmit}>
       <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} style={{marginTop:'2%'}}>
        <Grid size={12}>
        <TextField id="outlined-basic" name='name' label="Name"  variant="outlined"  value={val.name} onChange={inputHandler} />
        </Grid>
        <Grid size={12}>
        <TextField id="outlined-basic" name='position' label="Position" variant="outlined"    value={val.position} onChange={inputHandler} />
        </Grid>
        <Grid size={12}>
        <TextField id="outlined-basic" name='location' label="Location" variant="outlined"  value={val.location}  onChange={inputHandler} />
        </Grid>
        <Grid size={12}>
        <TextField id="outlined-basic" name='salary'  label="Salary" variant="outlined"  value={val.salary} onChange={inputHandler} />
        </Grid>
        <Grid size={12}>
      <Button type='submit'  variant="contained" color="primary" >Submit</Button>
        </Grid>
      </Grid>
    </Box>
    </form>

    
      
    </div>
  )
}

export default EmForm