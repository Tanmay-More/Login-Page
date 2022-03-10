import React from 'react'
import { Link, useParams } from "react-router-dom";

function CnfDel() {
    let emp = useParams()
    function DelData(id){
        let xml = new XMLHttpRequest()
        let data = `{"id": "${id}"}`
        xml.open('DELETE', 'http://127.0.0.1:5000/emp', true)
        xml.onload = () => {
            if(xml.status === 200)
              alert("Employee deleted successfully.")
            else
              alert("Unable to delete employee.")
        };
        xml.setRequestHeader('Content-type', 'application/json');
        xml.send(data);
      }
    return (
        <div className='mx-5 my-5 border-primary border-left p-4'>
            <h2>Confirm Delete</h2>
            <p>Are you sure you want to delete the employee with id <strong>{emp.empid}</strong> ?</p>
            <button className="btn btn-danger mr-3 my-4 btn-sm" onClick={()=>{DelData(emp.empid)}}>Confirm</button>
            <Link to="/" className='btn btn-secondary btn-sm'>Cancel</Link>
        </div>
    )
}

export default CnfDel
