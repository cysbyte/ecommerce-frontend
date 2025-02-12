import React from "react";

const Item = ({ name }: { name: string }) => {
  return (
    <div className="text-white font-semibold cursor-pointer relative group h-full pt-3">
      {name}
      <span className="absolute left-0 bottom-0 block w-full h-[3px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
    </div>
  );
};

export default Item;
