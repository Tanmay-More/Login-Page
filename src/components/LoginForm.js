import React, {useState} from 'react'

function LoginForm({Login, error}) {
    const [details, setDetails] = useState({email:"", password: ""})
    const submitHandler = e => {
        e.preventDefault();
        Login(details);
    }
  return (
   <div className='container border-left border-primary my-5 p-5 r-height'>
       <form onSubmit={submitHandler}>
       <div className='form-inner'>
           <h2 className='mb-5'>Login</h2>
           <div className='form-group text-capitalize'>
               <label htmlFor='email'>email</label>
               <input className='rounded m-1 border border-primary d-block' type="email" name="name" id="name" onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
               <br />
               <label htmlFor='password'>password</label>
               <input className='rounded m-1 border border-primary d-block' type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
           </div>
       </div>
       <p>Sample text here...</p>
       <input className='btn btn-primary rounded my-3 mx-0' type="submit" value="LogIn" />
       {(error !== "") ? <p className='error text-danger m-0'>{error}</p>: ""}
   </form>
   </div>
  )
}

export default LoginForm
