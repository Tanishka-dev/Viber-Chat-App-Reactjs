import React, { useRef } from "react";
import { useUserData } from "../features/User/userSlice";
const Message = ({ message, user: userName, photoURL, timestamp }) => {
   const user = useUserData();
   const color = useRef(Math.floor(Math.random() * 16777215).toString(16));

   return (
      <>
         {user.user.displayName === userName ? (
            <div className="flex flex-row items-center justify-end text-sm my-3 gap-2">
               <div className="flex flex-col bg-slate-800 px-1  p-2 rounded-2xl ">
                  <p className="text-gray-400 mx-2 ">{message}</p>
                  <h6 className="text-gray-600 "></h6>
               </div>
               {photoURL ? (
                  <img className="h-8 w-8 rounded-full" src={photoURL} />
               ) : (
                  <p
                     style={{
                        backgroundColor: `#${color.current}`,
                     }}
                     className="text-white rounded-full h-8 w-8 items-center text-base font-bold flex justify-center"
                  >
                     {userName?.slice(0, 1)}
                  </p>
               )}
            </div>
         ) : (
            <div className="flex flex-row text-sm my-3  ">
               {photoURL ? (
                  <img className="h-8 w-8 rounded-full" src={photoURL} />
               ) : (
                  <p
                     style={{
                        backgroundColor: `#${color.current}`,
                     }}
                     className="text-white rounded-full h-8 w-8 items-center text-base font-bold flex justify-center"
                  >
                     {userName?.slice(0, 1)}
                  </p>
               )}
               <div className="flex flex-col bg-slate-800 ml-2  px-1  p-2 rounded-2xl ">
                  <p className="text-gray-400 mx-2 ">{message}</p>
               </div>
            </div>
         )}
      </>
   );
};

export default Message;
