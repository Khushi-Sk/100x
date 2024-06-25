import React, { useState } from "react"
import { useEffect } from "react";

const Toast = ({text}) => {
    
    const [showToast, setShowToast] = useState(false)
    useEffect(() => {
        const timer = setTimeout(() => {
          console.log('This will run after 1 second!')
          setShowToast(true)
        }, 2000);
        return () => clearTimeout(timer);
      }, []);
      if(showToast) {
        return null;
      }
  
    return (
    <div className="bg-[#b4b7ab] rounded-full px-5 py-4 w-96 ">
      <p className=" text-lg font-medium text-slate-900 text-center ">{text}</p>
    </div>
  )
};

export default Toast