import {FaSearch} from "react-icons/fa"
import React from 'react'
import {Link} from "react-router-dom"
import { useSelector } from 'react-redux'


function Header() {
    const currentUser = useSelector((state) => state.user.currentUser);
    
  return (
    <header className="bg-slate-300 shadow-md" >
        <div className="flex justify-between p-3 items-center max-w-6xl mx-auto">
           <Link
                to="/"
           >
                <h1 className="font-bold text-sm sm:text-xl flex flex-wrap" > 
                        <span className="text-slate-500" >Ashwani</span>
                        <span className="text-slate-700 ml-2 ">Pandey</span>
                </h1>
           </Link>
           <form className="bg-slate-200 p-3 rounded-lg flex items-center" >
                <input 
                    type="text"
                    placeholder="Search"
                    className="bg-transparent focus:outline-none w-24 sm:w-64"
                />
                <button>
                    <FaSearch className="text-slate-600 hover:bg-slate-300" />
                </button>

           </form>
           <ul className="flex gap-4">
                <Link 
                    to="/"
                    className="text-slate-700 font-bold hover:underline
                    hidden sm:inline"
                >
                    <li>Home</li>
                </Link>
                <Link 
                    to="/about"
                    className="text-slate-700 font-bold hover:underline hidden sm:inline"    
                >
                    <li>About</li>
                </Link>
                <Link to="/profile">
                    {
                        currentUser ? (
                            <img className="rounded-full w-7 h-7 object-cover" src={currentUser.avatar} alt="avatar" />
                            
                        ) : (
                            <li className="text-slate-700 font-bold hover:underline" >Sign In</li>
                        )
                    }
                    
                </Link>
           </ul>
        </div>
    </header>
  )
}

export default Header