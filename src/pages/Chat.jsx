import { collection, doc, onSnapshot, orderBy } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ChatInput from "../components/ChatInput";
import Message from "../components/Message";
import { db } from "../index";

const Chat = () => {
   const { roomId } = useParams();
   const [groupDetails, setGroupDetails] = useState([]);
   const [roomMessages, setRoomMessages] = useState([]);

   useEffect(() => {
      if (roomId) {
         onSnapshot(doc(db, "users", roomId), (doc) => {
            setGroupDetails(doc.data());
         });
      }
      onSnapshot(
         collection(db, "users", roomId, "messages"),
         orderBy("timestamp", "asc"),
         (doc) => {
            setRoomMessages(doc.docs.map((doc) => doc.data()));
         }
      );
   }, [roomId]);

   return (
      <div className="flex flex-col mr-28  justify-between w-2/3 border-r-2 p-2 border-gray-900 text-white">
         <div>
            <h1 className=" m-5 flex text-3xl ">{groupDetails?.name}</h1>
            <h6 className="text-gray-600 flex justify-center align-middle items-center"></h6>
            <div className=" m-5 ">
               {roomMessages.map((msg) => (
                  <Message
                     photoURL={msg.userImage}
                     key={msg.message}
                     timestamp={msg.timestamp}
                     message={msg.message}
                     userImage={msg.userImage}
                     client={msg.user}
                  />
               ))}
            </div>
         </div>
         <div className="flex flex-row gap-4 items-center">
            <ChatInput groupName={groupDetails?.name} groupId={roomId} />
         </div>
      </div>
   );
};

export default Chat;
