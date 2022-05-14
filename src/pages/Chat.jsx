import { collection, doc, onSnapshot, orderBy } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ChatInput from "../components/ChatInput";
import Message from "../components/Message";
import { useUserData } from "../features/User/userSlice";
import { db } from "../index";

const Chat = () => {
   const { roomId } = useParams();
   const [groupDetails, setGroupDetails] = useState([]);
   const [roomMessages, setRoomMessages] = useState([]);
   const [myMessages, setMyMessages] = useState([]);
   const [messages, setMessages] = useState([]);

   const user = useUserData();

   useEffect(() => {
      if (roomId) {
         onSnapshot(doc(db, "users", roomId), (doc) => {
            setGroupDetails(doc.data());
         });
      }
      onSnapshot(collection(db, "users", roomId, "messages"), (doc) => {
         setRoomMessages(
            doc.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
         );
      });
      onSnapshot(collection(db, "users", user.user.uid, "messages"), (doc) => {
         setMyMessages(
            doc.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
         );
      });
   }, [roomId]);

   useEffect(() => {
      const msgs1 = [...roomMessages];
      const msgs2 = [...myMessages];
      const _msgs = [
         ...msgs1.filter(
            (item) =>
               item.data.user === user.user.displayName ||
               item.data.user === groupDetails?.name
         ),
         ...msgs2.filter((item) => item.data.user === groupDetails.name),
      ];
      setMessages([
         ..._msgs.sort(
            (a, b) =>
               new Date(a.data.timestamp?.toDate()).getTime() -
               new Date(b.data.timestamp?.toDate()).getTime()
         ),
      ]);
   }, [roomMessages, myMessages]);

   console.log(messages);

   return (
      <div className="flex flex-col mr-28  justify-between w-2/3 border-r-2 p-2 border-gray-900 text-white">
         <div>
            <h1 className=" m-5 flex text-3xl ">{groupDetails?.name}</h1>
            <h6 className="text-gray-600 flex justify-center align-middle items-center"></h6>
            <div className=" m-5 ">
               {messages.map(({ data: msg, id }) => (
                  <Message
                     photoURL={msg.photoURL}
                     key={new Date(msg.timestamp?.toDate()).getTime()}
                     timestamp={msg.timestamp}
                     message={msg.message}
                     user={msg.user}
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
