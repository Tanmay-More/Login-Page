import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function EditDetails() {
  let empid = useParams();
  const [newname, setNewname] = useState(empid.empname)
  const [newdesig, setNewdesig] = useState(empid.empdesig)
  const [newcity, setNewcity] = useState(empid.empcity)
  const submitHandler = e => {
    e.preventDefault()
    let xml = new XMLHttpRequest()
    xml.open('PUT', 'http://127.0.0.1:5000/emp', true)
    xml.onload = () => {
      if(xml.status === 200)
        alert('Details updated successfully.')
      else
        alert('Unable to update details.')
    }
    let data = `{ "id": "${empid.empid}", "name": "${newname}", "designation": "${newdesig}", "address": "${newcity}"}`
    xml.setRequestHeader('Content-type', 'application/json');
    xml.send(data)
  }  
  return (
    <div>
      <form onSubmit={submitHandler} className='mt-4 mx-5 p-5 border-left border-primary'>
            <h3 className='my-3 mb-4'>Edit Employee Details: Id - {empid.empid}</h3>
            <label htmlFor='name'>Name </label>
            <input className='rounded m-1 mb-2 border border-primary d-block' type='text' name='name' id='name' onChange={e => setNewname(e.target.value)} value={newname} />
            <label htmlFor='designation'>Designation </label>
            <input className='rounded m-1 mb-2 border border-primary d-block' type='text' name='designation' id='designation' onChange={e => setNewdesig(e.target.value)} value={newdesig} />
            <label htmlFor='city'>City </label>
            <input className='rounded m-1 mb-2 border border-primary d-block' type='text' name='city' id='city' onChange={e => setNewcity(e.target.value)} value={newcity} />
            <input className='btn btn-primary rounded my-3 mx-0' type='submit' value='submit'/>
        </form>
      <Link to="/"><button className='btn btn-danger btn-sm float-right m-4'>cancel</button></Link>
    </div>
  )
}

export default EditDetails
