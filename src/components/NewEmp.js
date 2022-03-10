import React, { useState } from 'react'

function NewEmp() {
    const [emp, setEmp] = useState({name:"", designation:"", city:""})
    const submitHandler = e =>{
        e.preventDefault();
        if(!emp.name || !emp.designation || !emp.city)
        {
            alert("Please provide all details.")
        }
        else
        {
            let data = `{"name": "${emp.name}", "designation": "${emp.designation}", "address": "${emp.city}"}`
            let xml = new XMLHttpRequest();
            xml.open("POST", 'http://127.0.0.1:5000/emp', true);
            //imp part --
            xml.setRequestHeader('Content-Type', 'application/json');
            xml.setRequestHeader('Access-Control-Allow-Origin', '*');
            xml.setRequestHeader('Access-Control-Allow-Credentials', 'true');
            xml.setRequestHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
            xml.withCredentials = false;
            //--imp part
            xml.onload = () => {
                alert("Employee Added Successfully.")
            }
            xml.send(data)
            }
    }
  return (
    <>
        <form onSubmit={submitHandler} className='mt-4 mx-5 p-5 border-left border-primary'>
            <h3 className='my-3 mb-4'>Add New Employee</h3>
            <label htmlFor='name'>Name </label>
            <input className='rounded m-1 mb-2 border border-primary d-block' type='text' name='name' id='name' onChange={e => setEmp({...emp, name: e.target.value})} value={emp.name}/>
            <label htmlFor='designation'>Designation </label>
            <input className='rounded m-1 mb-2 border border-primary d-block' type='text' name='designation' id='designation' onChange={e => setEmp({...emp, designation: e.target.value})} value={emp.designation}/>
            <label htmlFor='city'>City </label>
            <input className='rounded m-1 mb-2 border border-primary d-block' type='text' name='city' id='city' onChange={e => setEmp({...emp, city: e.target.value})} value={emp.city}/>
            <input className='btn btn-primary rounded my-3 mx-0' type='submit' value='submit' />
        </form>
    </>
  )
}

export default NewEmp
