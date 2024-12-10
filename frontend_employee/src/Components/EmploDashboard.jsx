import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../adminaxios'
import '../useraxios'
import adminAxios from '../adminaxios';

const EmpDashboard = () => {
    const [data,setData]= useState([]);
    const navigate=useNavigate()
useEffect(()=>{
    axios.get("http://localhost:3000/api/employeelist").then((res)=>{

         console.log(res.data);
        setData(res.data);
    }).catch((err)=>{
console.log(err);
    })

    
},[]);



const deleteEmp = (id) => {
  adminAxios
    .delete(`http://localhost:3000/api/employeelist/${id}`)
    .then((res) => {
      
   fetchData();
  
    })
    .catch((err) => {
      console.log(err);
    });
};

function update_data(val){
navigate('/form',{state:{val}})
}
const fetchData = () => {
  adminAxios
    .get("http://localhost:3000/api/employeelist")
    .then((res) => {
  
      if (Array.isArray(res.data)) {
        setData(res.data);
      } else {
        console.error("Received data is not an array:", res.data);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

useEffect(() => {
  fetchData();  
}, []);

  return (
    <div>
          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 , backgroundColor:'#f0f4f8'}} aria-label="simple table">
        <TableHead>
          <TableRow >

            <TableCell align="right" styles={{color:'white'}}>Name</TableCell>
            <TableCell align="right" styles={{color:'white'}}>Location</TableCell>
            <TableCell align="right" styles={{color:'white'}}>Position</TableCell>
            <TableCell align="right" styles={{color:'white'}}>Salary</TableCell>
  
  
          </TableRow>
        </TableHead>
        <TableBody>
          { data.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }, backgroundColor:'#f0f4f8'}}
            >
          
             
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.location}</TableCell>
              <TableCell align="right">{row.position}</TableCell>
              <TableCell align="right">{row.salary}</TableCell>
              <TableCell align="right">
              <Button onClick={() => deleteEmp(row._id)} color="error">
                    Delete
                  </Button>
                  <Button color="primary" onClick={() => update_data(row)}

              >Update</Button>
              </TableCell>
            </TableRow>

          ))}
        </TableBody>
      </Table>
    </TableContainer>
      
    </div>
  )
}

export default EmpDashboard