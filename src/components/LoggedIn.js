import React from 'react'
import EditDetails from './EditDetails';
import { Routes, Route, Link } from "react-router-dom";
import NewEmp from './NewEmp';
import EmpList from './EmpList';
import CnfDel from './CnfDel'

var result = ''

function GetData(){
  let url = `http://127.0.0.1:5000/emp`;
  let xml = new XMLHttpRequest();
  xml.open("GET",url,false)
  xml.onload = function(){
    result = JSON.parse(this.responseText);
  };
  xml.send();
  return result;
}

function LoggedIn({user, Logout}) {
  return (
      <Routes>
        <Route path="/" element={<Home GetData={GetData} user={user} Logout={Logout}/>} />
        <Route path="addEmp" element={<AddEmp />} />
        <Route path="editEmp/:empid/:empname/:empdesig/:empcity" element={<EditDetails />} />
        <Route path="cnfDel/:empid" element={<CnfDel />} />
      </Routes>
    
  )
}
function Home({GetData, user, Logout}) {
  let result= GetData();
  return (
    <>
    <Link to="addEmp"><button className='btn btn-success btn-sm m-3 float-left'>Add Employee</button></Link>
    <button className="btn btn-danger btn-sm m-3 float-right" onClick={Logout}>Logout</button>
      <div className='loginDetails'>
      <p className='h3 font-weight-bold mt-3 text-center'>Welcome {user.email}</p>
        <table className='table my-4 text-center'>
           <thead className='thead-dark'>
              <tr>
                <th>Emp_id</th><th>Emp_name</th><th>Emp_designation</th><th>Emp_city</th><th>Action</th>
              </tr>
           </thead>
           <tbody>
             {result.map(result => { return <EmpList key={result[0]} result={result} />})}            
            </tbody>
        </table>
    </div>
    </>
  );
}

function AddEmp() {
  return (
    <>
      <NewEmp />
      <Link to="/"><button className='btn btn-danger btn-sm float-right m-4 d-block'>Cancel</button></Link>
    </>
  );
}
export default LoggedIn
