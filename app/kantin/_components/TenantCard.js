import React from "react";

function TenantCard({ item, index }) {
  return (
    <div
      key={index}
      className="flex  max-w-52 flex-col rounded-2xl shadow-md gap-1"
    >
      <img src={item.img} alt={item.title} className="w-full" />
      <div className="p-2 flex flex-col w-full">
        <span className="font-semibold text-center">{item.title}</span>
      </div>
    </div>
  );
}

export default TenantCard;
