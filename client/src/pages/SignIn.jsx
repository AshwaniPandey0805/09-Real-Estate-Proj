import React, { useState } from 'react'
import { useNavigate, Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { signInStart, signInFailure, signInSuccess } from '../redux/user/userSlice.js'

function SignIn() {
  const [formData, setFormData] = useState({});
  const { error, loading } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) =>{
    setFormData({
      ...formData,
      [e.target.id] : e.target.value, 
    });
}
  const handleSubmit = async (e) =>{
    e.preventDefault();

      try {
        dispatch(signInStart());
        const res  = await fetch('/api/auth/signin', {
          method : 'POST',
          headers : {
            'Content-Type' : 'application/json',
          },
          body : JSON.stringify(formData),
        });
        // console.log(res);
        const data = await res.json();
         console.log(data);
         
        // if there is any error in data then we will set error
        if(data.success === false){
          dispatch(signInFailure(data.message));
          return;
        }
        dispatch(signInSuccess(data));
        navigate("/");
      
    } catch (error) {
      dispatch(signInFailure(error.message));
      
      
    }
    
    
  }
  return (
    <div className="p-3 max-w-lg mx-auto" >
      <h1 className="text-3xl text-center my-4 font-semibold" >Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-y-4 ">
        
        <input 
            type="text"
            placeholder="Enter Email" 
            className="p-3 rounded-lg border " 
            onChange={handleChange}
            id='email'
          ></input>
        <input 
            type="text"
            placeholder="Enter Password" 
            className="p-3 rounded-lg border" 
            onChange={handleChange}
            id='password'
          ></input>
        <button
          disabled={loading}  
          className="bg-slate-700 p-3 rounded-lg text-white uppercase hover:opacity-95 disabled:opacity-80" >
            {loading ? 'Loading...' : 'Sign In'}
            
          </button>
      </form>
      <div className="flex gap-x-4 mt-5">
        <p>Dont a account</p>
        <Link to={'/signup'}>
          <span className="text-blue-600" >Sign Up</span>
        </Link>
      </div>
      {
        error && (
          <p className="text-red-500" >{error}</p>
        )
      }



    </div>
    
  )
}

export default SignIn