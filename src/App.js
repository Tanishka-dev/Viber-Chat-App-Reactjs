import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from "./pages/Chat";

import { Header } from "./components/Header";
import LeftBar from "./components/LeftBar";
import React, { useEffect, useState } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "./index";

function App() {
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
      <BrowserRouter>
         <Header />
         <LeftBar groups={groups} />
         <Routes>
            <Route path="/room/:roomId" element={<Chat />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
