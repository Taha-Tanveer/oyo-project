import Image from "next/image";

const Block = ({ title, para, icon }) => {
  return (
    <div className="w-60 h-full flex items-center px-3 border-r-2 border-gray-300">
      <span className="text-2xl mr-5">{icon}</span>

      <div>
        <h3 className="font-bold ">{title}</h3>
        <p className="text-gray-400 text-xs line-clamp-1">{para}</p>
      </div>
    </div>
  );
};

export default Block;
