import React, { useEffect, useState } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../index";
import Chat from "./Chat";
import LeftBar from "../components/LeftBar";
import Header from "../components/Header";
import { useUserData } from "../features/User/userSlice";

const Home = () => {
   const [users, setUsers] = useState([]);
   const user = useUserData();
   useEffect(() => {
      const q = query(collection(db, "users"));

      const unsub = onSnapshot(q, (doc) => {
         setUsers(
            doc.docs.map((doc) => ({
               id: doc.id,
               name: doc.data().name,
               photoURL: doc.data().photoURL,
            }))
         );
      });

      return () => unsub;
   }, []);
   return (
      <>
         <Header />
         <div className="flex flex-row ">
            <LeftBar users={users} />
            <Chat />
         </div>
      </>
   );
};

export default Home;
