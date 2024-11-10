import React from "react";

function KantinCard({ item, index }) {
  return (
    <a
      href={item.link}
      key={index}
      className="relative w-32 h-24 rounded-2xl shadow-md gap-1"
    >
      <div
        className="absolute inset-0 flex items-center justify-center text-center
                  text-white p-0 md:p-2 rounded-2xl font-normal lg:text-sm  text-[10px]"
      >
        <span className="font-bold whitespace-nowrap">{item.title}</span>
      </div>
      <img src={item.img} className="w-full h-full object-cover rounded-2xl" />
    </a>
  );
}

export default KantinCard;
