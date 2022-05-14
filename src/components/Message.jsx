import React from "react";
import { useUserData } from "../features/User/userSlice";
const Message = ({ message, client, userImage, timestamp }) => {
   const user = useUserData();

   return (
      <>
         {user.user.displayName === client ? (
            <div className="flex flex-row justify-end text-sm my-3 ">
               <img
                  className="h-10 w-10 rounded-2xl"
                  src={userImage}
                  alt="user"
               />
               <div className="flex flex-col bg-slate-800 ml-2   px-1  p-2 rounded-2xl ">
                  <h4
                     style={{
                        color: `#${Math.floor(
                           Math.random() * 16777215
                        ).toString(16)}`,
                     }}
                     className="mx-2 "
                  >
                     {client}
                  </h4>

                  <p className="text-gray-400 mx-2 ">{message}</p>
                  <h6 className="text-gray-600 "></h6>
               </div>
            </div>
         ) : (
            <div className="flex flex-row text-sm my-3  ">
               <img
                  className="h-10 w-10 rounded-2xl"
                  src={userImage}
                  alt="user"
               />
               <div className="flex flex-col bg-slate-800 ml-2  px-1  p-2 rounded-2xl ">
                  <h4
                     style={{
                        color: `#${Math.floor(
                           Math.random() * 16777215
                        ).toString(16)}`,
                     }}
                     className="mx-2 "
                  >
                     {client}
                  </h4>

                  <p className="text-gray-400 mx-2 ">{message}</p>
               </div>
            </div>
         )}
      </>
   );
};

export default Message;
