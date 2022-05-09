import React, { useEffect, useState } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../index";
import Chat from "./Chat";
import LeftBar from "../components/LeftBar";
import Header from "../components/Header";

const Home = () => {
   const [groups, setGroups] = useState([]);
   useEffect(() => {
      const q = query(collection(db, "groups"));
      const unsub = onSnapshot(q, (doc) => {
         setGroups(
            doc.docs.map((doc) => ({ id: doc.id, name: doc.data().name }))
         );
      });
      return () => unsub;
   }, []);
   return (
      <>
         <Header />
         <div className="flex flex-row">
            <LeftBar groups={groups} />
            <Chat />
         </div>
      </>
   );
};

export default Home;
