import React,{useState} from "react";
import "./style.css"
import facebook from "./facebook1.jpg"
import google from "./search1.jpg"
import main from "./main.png";
const App = ()=>{

  let [user, setUser] = useState({name: "", email: "", password: "", confirmPassword: ""})
  let [error, setError] = useState("")
  let [success, setSuccess] = useState("")

  console.log("user", user)

  function validateForm(event){
      event.preventDefault()
      if(user.name.length < 3 || user.name.length > 30){
          setSuccess("")
         return  setError("Name should be min 3 char and max 30 char")
          
      }
      else if(!user.email.includes("@") || !user.email.includes(".")){
          setSuccess("")
          return setError("Email should contain @ and .")
      }
      else if(user.password.length < 8 || user.password.length > 15){
          setSuccess("")
          return setError("Password should be min 8 char and max 15 char")
      }
      else if(user.password !== user.confirmPassword){
          setSuccess("")
          return setError("Password and Confirm Password should match")
      }

      setSuccess("Successfully Created")
      setError("")

  }

  return(         
    <div className="container">
        <img src={main}/>
      <div className="signup-container">
        <h1>Create Account</h1>
        <div className="utils">
                <div className="inner-util">
                    <img src={google} alt="img"/>
                    <span>Sign up with Google</span>
                </div>
                <div className="inner-util">
                    <img src={facebook} alt="img"/>
                    <span>Sign up with Facebook</span>
                </div> 
         </div>
         <div className="or">--OR--</div>
          <form onSubmit={validateForm}>
                <input type="text" placeholder="Full Name" 
                    onChange={(event)=>setUser({...user, name: event.target.value})}
                />
                <input type="email" placeholder="Email Address" 
                    onChange={(event)=>setUser({...user, email: event.target.value})}
                />
                <input type="password" placeholder="Password" 
                    onChange={(event)=>setUser({...user, password: event.target.value})}
                />
                <input type="password" placeholder="Confirm Password" 
                    onChange={(event)=>setUser({...user, confirmPassword: event.target.value})}
                />
                <button type="Submit" >Create Account</button>
            </form>
            <div>
              {
                  error && <h3 className="error">{error}</h3>
              }
              {
                  success && <h3 className="success">{success}</h3>
              }
            </div>
      </div>
      </div>
  )
}

export default App;