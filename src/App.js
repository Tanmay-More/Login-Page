import React, {useState} from 'react'
import LoginForm from './components/LoginForm'
import LoggedIn from './components/LoggedIn'
import validator from 'validator'

function App() {
  var loginFlag=0;
  const [user, setUser] = useState({email: ""})
  const [error, setError] = useState("")
  var sha1 = require('sha1')
  const Login = details => {
    if(details.email==="")
    {
      setError("Please enter login credentials");
    }
    else
    {
      if (validator.isEmail(details.email))
      {
        if (validator.isStrongPassword(details.password,{minLength: 8, minLowercase: 1,minUppercase: 1, minNumbers: 1, minSymbols: 1}))
        {
            let url = `http://127.0.0.1:5000/login?email=${details.email}&password=${sha1(details.password)}`;
            let xml = new XMLHttpRequest();
            xml.open("GET",url,false)
            xml.onload = function(){
               loginFlag = this.responseText;
              };
            xml.send();
            if(loginFlag === 'matched')
            {
              setUser({email: details.email})
            }
            else
            {
              setError("incorrect details.")
            }
        }
        else
        {
          setError('Password must contain minimum 8 characters, 1 lowercase and 1 uppercase, 1 number and one symbol')
        }
      }
      else
      {
        setError('Enter valid Email!')
      }
    }   
  }
  const Logout = () => {
    console.log("Logout");
    setUser({email: ""})
    setError("")
  }

  return (
    <div className="App py-3">
    {(user.email !== "")? (<>
    <LoggedIn user={user} Logout={Logout} />
   </>) : (
        <LoginForm Login={Login} error={error} />
   )}
  </div>
   );

}

export default App