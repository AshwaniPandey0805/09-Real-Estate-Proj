import React, { useState } from 'react'
import { useNavigate,Link } from "react-router-dom"

function SingUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) =>{
    setFormData({
      ...formData,
      [e.target.id] : e.target.value, 
    });
}
  const handleSubmit = async (e) =>{
    e.preventDefault();

      try {
        setLoading(true);
        const res  = await fetch('/api/auth/signup', {
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
          setError(data.message);
          setLoading(false);
          return;
        }
        setLoading(false); // loading is complete
        setError(null);
        navigate("/signin");
      
    } catch (error) {
      setLoading(false);
      setError(error.message);
      
      
    }
    
    
  }
  return (
    <div className="p-3 max-w-lg mx-auto" >
      <h1 className="text-3xl text-center my-4 font-semibold" >Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-y-4 ">
        <input 
              type="text" 
              placeholder="Enter User name" 
              className="p-3 rounded-lg border" 
              onChange={handleChange}
              id='username'
            ></input>
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
            {loading ? 'Loading...' : 'Sign Up'}
            
          </button>
      </form>
      <div className="flex gap-x-4 mt-5">
        <p>Have a account</p>
        <Link to={'/signin'}>
          <span className="text-blue-600" >Sign In</span>
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

export default SingUp