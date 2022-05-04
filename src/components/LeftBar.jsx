import React from "react";

const LeftBar = () => {
   return (
      <div className="flex flex-row justify-between m-5 max-w-xs items-center px-3 border-r-2 border-gray-900 ">
         <h4 className="text-opacity-50 text-white ">Chat</h4>

         <div className="flex flex-row gap-1 items-center">
            <div className=" flex flex-row bg-slate-900 text-center px-1 items-center  p-2 rounded-md ">
               <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent outline-none text-white "
               />

               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-slate-500 "
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
            <svg
               xmlns="http://www.w3.org/2000/svg"
               class="h-6 w-6 text-indigo-700 hover:animate-bounce"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor"
               stroke-width="2"
            >
               <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4v16m8-8H4"
               />
            </svg>
         </div>
      </div>
   );
};

export default LeftBar;
