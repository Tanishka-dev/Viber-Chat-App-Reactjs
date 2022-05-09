import { Avatar } from "@mui/material";
import React from "react";

const Header = () => {
   return (
      <div className="flex flex-row justify-between p-2 m-2  shadow-md sticky px-10 py-2 border-b-2 border-gray-900">
         <div className="flex flex-row items-center ml-5 gap-6 ">
            <svg
               xmlns="http://www.w3.org/2000/svg"
               className="h-10 w-10 fill-indigo-700 text-gray-400 "
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor"
               strokeWidth="1"
            >
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
               />
            </svg>
            <h2 className="text-white">Messaging</h2>
         </div>

         <div className="flex flex-row gap-8 ">
            <div className=" flex flex-row bg-slate-900 text-center px-4 items-center w-fit rounded-md ">
               <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent outline-none text-white"
               />
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
               >
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
               </svg>
            </div>

            <Avatar alt="" src="" />
            <button className="bg-slate-900 text-white px-3 rounded-md hover:bg-gray-400 hover:animate-bounce">
               Logout
            </button>
         </div>
      </div>
   );
};

export default Header;
