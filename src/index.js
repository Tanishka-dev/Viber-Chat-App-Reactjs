import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./app/store";
const firebaseConfig = {
   apiKey: "AIzaSyCrPKc3GJEoIBfBUlOailgbMmq9Of86618",
   authDomain: "msg-app-beb38.firebaseapp.com",
   projectId: "msg-app-beb38",
   storageBucket: "msg-app-beb38.appspot.com",
   messagingSenderId: "942759436128",
   appId: "1:942759436128:web:4de68caedecdb465920805",
   measurementId: "G-RCX02YNDKX",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const auth = getAuth();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <Provider store={store}>
         <BrowserRouter>
            <App />
         </BrowserRouter>
      </Provider>
   </React.StrictMode>
);
