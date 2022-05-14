import { addDoc, collection } from "firebase/firestore";
import React from "react";
import { db } from "../index";
import GroupCard from "./GroupCard";
import { useUserData } from "../features/User/userSlice";

const LeftBar = ({ users }) => {
   const user = useUserData();
   return (
      <div className=" w-1/3 ml-28  border-r-2 p-2 border-l-2 border-gray-900 items-center ">
         <div className="flex flex-row justify-between gap-4  items-center  ">
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
            </div>
         </div>

         <div className="mt-20">
            {users
               ?.filter((item) => item.name !== user.user.displayName)
               .map((user) => (
                  <GroupCard
                     name={user.name}
                     id={user.id}
                     key={user.id}
                     photoURL={user.photoURL}
                  />
               ))}
         </div>
      </div>
   );
};

export default LeftBar;
