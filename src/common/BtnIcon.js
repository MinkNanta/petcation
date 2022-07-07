export default function BtnIcon({ icon, onClick, className }) {
  return (
    <div
      className={
        className
          ? className
          : 'w-7 h-7 bg-gray-100 rounded-full text-gray-500 p-1'
      }
      onClick={onClick}
    >
      {icon}
    </div>
  );
}
