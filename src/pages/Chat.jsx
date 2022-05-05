import React from "react";
import { useParams } from "react-router-dom";

const Chat = () => {
   const { roomId } = useParams();
   return (
      <div className="flex flex-col justify-end fixed top-16  left-1/4 w-2/4   border-r-2 p-2 border-gray-900 text-white">
         <div>
            <h1 className=" m-5 text-3xl ">Room name</h1>
            <div className=" m-5 text-xl">messaging</div>
         </div>
         <div className="flex flex-row gap-4 m-5 items-center py-80  ">
            <svg
               xmlns="http://www.w3.org/2000/svg"
               className="h-5 w-5 text-slate-500"
               viewBox="0 0 20 20"
               fill="currentColor"
            >
               <path
                  fillRule="evenodd"
                  d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                  clipRule="evenodd"
               />
            </svg>
            <div className="w-full flex  bg-slate-900 text-center py-2 px-4 items-center rounded-md ">
               <input
                  type="text"
                  placeholder="Write a message..."
                  className="bg-transparent outline-none text-white"
               />
            </div>

            <svg
               xmlns="http://www.w3.org/2000/svg"
               class="h-9 w-9 fill-indigo-700 text-slate-900 "
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor"
               stroke-width="2"
            >
               <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
               />
            </svg>
         </div>
      </div>
   );
};

export default Chat;
