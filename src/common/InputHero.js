import React, { useState } from 'react';

export default function InputHero({ placeholder, className, label, ...props }) {
  const [active, setActive] = useState(false);
  return (
    <div
      className={`
    text-gray-400 
    outline-none  
    block  
    h-full
    bg-white/0
    w-full

    hover:bg-white
    hover:shadow-lg
    
    placeholder:text-gray-400   
 


    disabled:text-gray-400 
    disabled:border-none
      
     px-4 py-4 
     rounded-full ${className}`}
    >
      {/* <p className="text-[14px] text-gray-600  text-left block">{label}</p> */}
      <input
        className="bg-white/0 w-full  focus:outline-none
        focus:outline-offset-0"
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
}
