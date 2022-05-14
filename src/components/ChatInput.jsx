import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../index";
import { useUserData } from "../features/User/userSlice";
const ChatInput = ({ groupName, groupId }) => {
   const [input, setInput] = useState("");
   const user = useUserData();

   const sendMessage = (e) => {
      e.preventDefault();

      if (groupId) {
         addDoc(collection(db, "users", groupId, "messages"), {
            message: input,
            user: user.user.displayName,
            timestamp: serverTimestamp(),
         });

         setInput("");
      }
   };
   return (
      <>
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
               placeholder="Message"
               value={input}
               onChange={(e) => setInput(e.target.value)}
               className="bg-transparent outline-none text-white w-full "
            />
         </div>

         <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-9 w-9 fill-indigo-700 text-slate-900 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            onClick={(e) => sendMessage(e)}
         >
            <path
               strokeLinecap="round"
               strokeLinejoin="round"
               d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
         </svg>
      </>
   );
};

export default ChatInput;
