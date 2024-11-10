import React from "react";

function KantinCard({ item, index }) {
  return (
    <a
      href={item.link}
      key={index}
      className="relative w-32 h-24 rounded-2xl shadow-md overflow-hidden"
    >
      {/* Image */}
      <img
        src={item.img}
        alt={item.title}
        className="w-full h-full object-cover rounded-2xl"
      />

      {/* Text Overlay */}
      <div
        className="absolute inset-0 flex items-center justify-center rounded-2xl 
                   text-white font-bold text-xs md:text-sm lg:text-base bg-black bg-opacity-20"
      >
        <span className="whitespace-nowrap text-center">{item.title}</span>
      </div>
    </a>
  );
}

export default KantinCard;
