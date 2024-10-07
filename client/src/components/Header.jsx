import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { current } from '@reduxjs/toolkit';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <header className="bg-[#e6e0ae] shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-4">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span>Propel</span>
          </h1>
        </Link>
        {/* <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-32 sm:w-80"
          />
          <FaSearch />
        </form> */}
        <ul className="flex items-center gap-6">
          <Link to={currentUser ? '/learningcentre' : '/signin'}>
            <li className="hidden sm:inline hover:underline cursor-pointer">
              My Learning Centre
            </li>
          </Link>
          <Link to="/">
            <li className="hidden sm:inline hover:underline cursor-pointer">
              Home
            </li>
          </Link>
          <li className="relative group">
            <span className="hidden sm:flex items-center hover:underline cursor-pointer py-2">
              <span className="mr-1">Support</span>
              <IoIosArrowDown />
            </span>
            <ul className="absolute left-0 -mt-1 z-2 bg-white shadow-lg rounded-lg w-52 opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300 invisible">
              <li className="p-4 hover:bg-gray-100 cursor-pointer rounded-lg">
                <Link to="/faq" className="block w-full h-full">
                  FAQ
                </Link>
              </li>
              <li className="p-4 hover:bg-gray-100 cursor-pointer rounded-lg">
                <Link to="/contact" className="block w-full h-full">
                  Contact Us
                </Link>
              </li>
            </ul>
          </li>
          <Link to="/profile">
            {currentUser ? (
              <img
                className="rounded-full h-12 w-12 object-cover"
                src={currentUser.avatar}
                alt="profile"
              />
            ) : (
              <li className="sm:inline hover:underline cursor-pointer">
                Sign In
              </li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}
