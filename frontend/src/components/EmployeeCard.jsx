import React from 'react'
import '../App.css'

function EmployeeCard({data}) {
    const filtered = data.filter(item => item.age >18)
  return (
 <div className = "container">
    {
        filtered.map((item,i) =>(

            <div className="card" key = {i}>
            <img src={item.img}>
            </img>
            <p>{item.name}</p>
            <p>{item.college}</p>


            <p>{item.age}</p>
            </div>
        ))
    }







 </div>
  )
}

export default EmployeeCard
