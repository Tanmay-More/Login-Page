import React from 'react'
import { Link } from "react-router-dom";

function EmpList({result}) {
  let path = 'editEmp/'+result[0]+'/'+result[1]+'/'+result[2]+'/'+result[3]
  let pathdel = 'cnfDel/'+result[0]
  return (
  <tr><td>{result[0]}</td><td>{result[1]}</td><td>{result[2]}</td><td>{result[3]}</td><td><Link className='btn btn-warning mx-3 btn-sm' to={path} state={{id: result[0]}}>Edit</Link><Link to={pathdel} className='btn btn-sm btn-danger'>Delete</Link></td></tr>
  )
}

export default EmpList
