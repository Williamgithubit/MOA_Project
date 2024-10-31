import React from "react";
import logo from "../Asserts/MOA Logo.png";
import seal from "../Asserts/LR Seal.png";
import icon from '../Icons/arrow_drop_down_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg'

const Header = () => {
  return (
    <header className="">
      {/* This is the first header code */}
      <div className="flex gap-2 w-full px-6 py-1 bg-gray-200">
        <img src={seal} alt="LR Seal" width="20px" />
        <a href="#" className="underline">
          {" "}
          Official Website of the Government of Liberia
        </a>
      </div>
      {/* This is the second header code */}
      <div className=" w-full px-6 py-4 border h-36">
        <div className="parent w-full flex">
          <div className="w-2/3 flex gap-2">
            <img src={logo} alt="MOA Logo" width="10%" />
            <div className="w-2/3">
              <h3 className="text-2xl font-bold text-green-900">
                Ministry of Agriculture
              </h3>
              <p>Republic of Liberia</p>
            </div>
          </div>
          <div className="search-bar w-1/2">
            <input className="border-none mr-5 outline-none p-3 w-2/3 ring-1 ring-gray-500 rounded" type="search" name="" id="" autoComplete="off" placeholder="Search for tenders, contracts, or vendors"/>
            <button type="submit" className="backdrop-blur-sm hover:backdrop-blur-lg ring-1 rounded font-medium hover:bg-green-900 hover:text-white ring-gray-500 py-3 px-8 hover:bg-green-600 transition-all">Register</button>
          </div>
        </div>
        <nav className="flex w-[100%] gap-5 p-5 align-baseline justify-end">
          <a href="#" className="text-[18px] cursor-pointer hover:underline hover:text-green-900">Home</a>
          <a href="#" className="text-[18px] cursor-pointer hover:underline hover:text-green-900">Bids & Tenders<img className="inline" src={icon} alt="logo" /></a>          
          <a href="#" className="text-[18px] cursor-pointer hover:underline hover:text-green-900">Contracts & Awards<img className="inline" src={icon} alt="logo" /></a>          
          <a href="#" className="text-[18px] cursor-pointer hover:underline hover:text-green-900">Registration<img className="inline" src={icon} alt="logo" /></a>      
          <a href="#" className="text-[18px] cursor-pointer hover:underline hover:text-green-900">Resources</a>    
          <a href="#" className="text-[18px] cursor-pointer hover:underline hover:text-green-900">Reports</a>    
          <a href="#" className="text-[18px] cursor-pointer hover:underline hover:text-green-900">Contact</a>    
        </nav>
      </div>
    </header>
  );
};

export default Header;
