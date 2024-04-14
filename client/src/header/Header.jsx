import React from "react";
import {FaSearch} from "react-icons/fa"
import {Link} from 'react-router-dom'

function Header() {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to={'/'}>
        <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
          <span className="text-slate-500">Sahand</span>
          <span className="text-slate-700">Estate</span>
        </h1>
        </Link>
        
        <form className="bg-slate-100 rounded-lg p-3 sm:w-500 flex items-center">
          <input type="text" placeholder="Search..." className="bg-transparent focus:outline-none w-24 sm:w-64" />
          <FaSearch className="text-slate-600"/>
        </form>
        <ul className=" flex gap-4 items-center">
          <li className="hidden sm:inline text-slate-700 hover:bg-slate-300 hover:rounded-lg hover:py-1 hover px-3"><Link to={'/'}>Home</Link></li>
          <li className="hidden sm:inline text-slate-700 hover:bg-slate-300 hover:rounded-lg hover:py-1 hover px-3"><Link to={'/about'}>About</Link></li>
          <li className=" sm:inline text-slate-700 hover:bg-slate-300 hover:rounded-lg hover:py-1 hover px-3"><Link to={'/sign-in'}>Sign in</Link></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
