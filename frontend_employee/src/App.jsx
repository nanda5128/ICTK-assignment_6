import { useState } from 'react'

import './App.css'
import EmForm from './Components/EmForm'
import EmpDashboard from './Components/EmpDashboard'
import { Route, Routes } from 'react-router-dom'
import Main from './Components/Main'
import Login from './Components/Login'
import Signup from './Components/Signup'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
       <Route path='/dash' element={<Main child={<EmpDashboard/>}/>}></Route>
       <Route path='/form' element={<Main child={<EmForm/>}/>}></Route>
       <Route path='/' element={<Login/>} ></Route>
       <Route path='/s' element={<Signup/>}></Route>
      
      
      </Routes>
    </>
  )
}

export default App