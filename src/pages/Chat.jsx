import { collection, doc, onSnapshot, orderBy } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Message from "../components/Message";
import { db } from "../index";

const Chat = () => {
   const { roomId } = useParams();
   const [groupDetails, setGroupDetails] = useState([]);
   const [roomMessages, setRoomMessages] = useState([]);

   useEffect(() => {
      if (roomId) {
         onSnapshot(doc(db, "groups", roomId), (doc) => {
            setGroupDetails(doc.data());
         });
      }
      onSnapshot(
         collection(db, "groups", roomId, "messages"),
         orderBy("timestamp", "asc"),
         (doc) => {
            setRoomMessages(doc.docs.map((doc) => doc.data()));
         }
      );
   }, [roomId]);

   return (
      <div className="flex flex-col  justify-end w-2/4 border-r-2 p-2 border-gray-900 text-white">
         <div>
            <h1 className=" m-5 flex text-3xl ">{groupDetails?.name}</h1>
            <div className=" m-5 ">
               {roomMessages.map((msg) => (
                  <Message
                     key={msg.message}
                     timestamp={msg.timestamp}
                     message={msg.message}
                     userImage={msg.userImage}
                     user={msg.user}
                  />
               ))}
            </div>
         </div>
         <div className="flex flex-row gap-4 items-center ">
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
               className="h-9 w-9 fill-indigo-700 text-slate-900 "
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor"
               strokeWidth="2"
            >
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
               />
            </svg>
         </div>
      </div>
   );
};

export default Chat;
