import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from "./pages/Chat";

import { Header } from "./components/Header";
import LeftBar from "./components/LeftBar";
import React, { useEffect, useState } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "./index";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Home from "./pages/Home";
import PrivateRoute from "./components/PrivateRoute";

function App() {
   return (
      <Routes>
         <Route
            path="/room/:roomId"
            element={<PrivateRoute Component={<Home />} />}
         />
         <Route path="/register" element={<RegisterPage />} />
         <Route path="/" element={<LoginPage />} />
      </Routes>
   );
}

export default App;
