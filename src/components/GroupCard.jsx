import React from "react";

const GroupCard = ({ name, id }) => {
   return (
      <div
         className="flex flex-row max-w-sm rounded-md m-3 hover:bg-opacity-60 hover:bg-slate-900  shadow-2xl transition duration-500 ease-in-out 
       transform 
      hover:-translate-y-1 hover:scale-105  "
      >
         <img className=" m-5 h-14 w-14 rounded-xl" src="/me.jpg" />
         <div className="flex flex-col justify-center ">
            <h4 className="text-slate-300">{name}</h4>
            <h5 className="text-opacity-50 text-white">Last msg</h5>
         </div>
      </div>
   );
};

export default GroupCard;
