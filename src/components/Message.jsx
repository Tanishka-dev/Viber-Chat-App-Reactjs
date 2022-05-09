import React from "react";

const Message = ({ message, user, userImage, timestamp }) => {
   return (
      <>
         <h4 className="flex justify-center my-2 align-center items-center text-gray-600 text-sm">
            {new Date(timestamp?.toDate()).toUTCString()}
         </h4>
         <div className="flex flex-row text-sm ">
            <img className="h-10 w-10 rounded-2xl" src={userImage} alt="user" />
            <div className="flex flex-col bg-slate-800 ml-2   px-1  p-2 rounded-2xl ">
               <h4
                  style={{
                     color: `#${Math.floor(Math.random() * 16777215).toString(
                        16
                     )}`,
                  }}
                  className="mx-2 "
               >
                  {user}
               </h4>

               <p className="text-gray-400 mx-2 ">{message}</p>
            </div>
         </div>
      </>
   );
};

export default Message;
