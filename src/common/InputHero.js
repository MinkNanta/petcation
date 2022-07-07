export default function InputHero({
  placeholder,
  className,
  label,
  active,
  ...props
}) {
  return (
    <div
      className={`
    text-gray-400 
    outline-none  
    block  
    h-full
     ${active ? 'bg-white' : 'bg-white/0'}
    w-full
    bg-white

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
        focus:outline-offset-0 focus:bg-white/0"
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
}
