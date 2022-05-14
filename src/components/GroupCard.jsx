import React from "react";
import { useNavigate } from "react-router-dom";
import { useUserData } from "../features/User/userSlice";
const GroupCard = ({ name, id, photoURL }) => {
   console.log(name);
   const navigate = useNavigate();
   const user = useUserData();
   const selectGroup = () => {
      if (id) {
         navigate(`/room/${id}`);
      } else {
         navigate(`/${name}`);
      }
   };
   return (
      <div
         onClick={() => selectGroup()}
         className="flex flex-row max-w-sm rounded-md m-3 hover:bg-opacity-60 hover:bg-slate-900  shadow-2xl transition duration-500 ease-in-out 
       transform 
      hover:-translate-y-1 hover:scale-105  "
      >
         {photoURL ? (
            <img className="h-12 w-12 rounded-lg m-3" src={photoURL}></img>
         ) : (
            <p
               style={{
                  backgroundColor: `#${Math.floor(
                     Math.random() * 16777215
                  ).toString(16)}`,
               }}
               className="text-white m-3 rounded-lg h-12 w-12  items-center text-xl font-bold flex justify-center"
            >
               {name}
            </p>
         )}
         <div className="flex flex-col justify-center ">
            <h4 className="text-slate-300">{name}</h4>
            <h5 className="text-opacity-50 text-white">Last msg</h5>
         </div>
      </div>
   );
};

export default GroupCard;
