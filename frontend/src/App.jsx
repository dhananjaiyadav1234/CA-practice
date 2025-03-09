import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import employess from './data'
import EmployeeCard from './components/EmployeeCard'



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<EmployeeCard data = {employess}/>} />

    </Routes>
    
    </BrowserRouter>
  
  )
}

export default App
