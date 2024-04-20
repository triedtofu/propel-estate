import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-slate-400 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-4">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span>Propel</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-32 sm:w-80"
          />
          <FaSearch />
        </form>
        <ul className="flex gap-3">
          <Link to="/">
            <li className="hidden sm:inline hover:underline cursor-pointer">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline hover:underline cursor-pointer">
              About
            </li>
          </Link>
          <Link to="/signin">
            <li className="sm:inline hover:underline cursor-pointer">
              Sign In
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
