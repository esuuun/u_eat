import React from "react";

function MapCard({ item, index }) {
    return (
        <div
            key={index}
            className="flex w-full flex-col rounded-2xl shadow-lg gap-1 border"
        >
            <div className="p-2 flex flex-col w-full">
                <span className="font-bold text-center">{item.title}</span>
            </div>
            <img src={item.img} alt={item.title} className="w-full" />
        </div>
    );
}

export default MapCard;