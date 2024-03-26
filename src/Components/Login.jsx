import React, {useState} from 'react'

export const Login = () => {

  const  [email,setEmail] = useState("")
  const  [password,setPassword] = useState("")
  const  [name,setName] = useState("")
  const [errors, setErrors] = useState({name:"",email:'',password:""})

  const emailPattern=/^[a-zA-Z0-9.]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
  const namePattern =/^[a-zA-Z]{3,}$/;

  function LogInHandler(){
    if(name.trim()===""){
      setErrors((errors)=>({...errors,name:"Enter your name here!"}))
    }
    else if(name.length>0){
      setErrors((errors)=>({...errors,name:""}))
        if(!namePattern.test(name)){
      setErrors((errors)=>({...errors,name:"Enter valid name!"}))

        }
    }
      if(email.trim()===""){
        setErrors((errors)=>({...errors,email:"Enter email address!"}))
      }
      else if(!emailPattern.test(email)){
        setErrors((errors)=>({...errors,email:"Enter a valid email address!"}))
      }
      else{
        setErrors((errors)=>({...errors,email:""}))
      }
      if(password.trim()===""){
        setErrors((errors)=>({...errors,password:"Enter password!"}))
      }
      else if(password.trim().length<8){
        setErrors((errors)=>({...errors,password:"Password Should be minimum 8 Charcters!"}))
      }
      else if(password.trim().length>10){
        setErrors((errors)=>({...errors,password:"Password cannot exceed more than 10 Charcters!"}))
      }
      else{
        setErrors((errors)=>({...errors,password:""}))
      }
  }

  return (
    <>
        <div className="border w-25 mt-5 m-auto p-4">
            <h2><b>Login Form</b></h2>
            <div className='mt-3'>
              <label htmlFor="">User Name</label>
              <input type="text" className='form-control' onChange={(e)=>{setName(e.target.value)}}/>
              <p className='text-danger'>{errors.name}</p>
            </div>
            <div className='mt-3'>
              <label htmlFor="">Email</label>
              <input type="text" className='form-control' onChange={(e)=>{setEmail(e.target.value)}} />
              <p className='text-danger'>{errors.email}</p>
            </div>
            <div className='mt-3'>
              <label htmlFor="">Password</label>
              <input type="password" className='form-control' onChange={(e)=>{setPassword(e.target.value)}} />
              <p className='text-danger'>{errors.password}</p>
            </div>
            <button className='btn outline-primary w-100 mt-3 h-40' onClick={LogInHandler}>Login</button>

        </div>
      </>
  )
}

export default Login



