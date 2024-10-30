import React from "react";

function FoodCard({ item, index }) {
    return (
        <div
            key={index}
            className="flex max-w-52 flex-col rounded-2xl shadow-md gap-1"
        >
            <img src={item.img} alt={item.title} className="w-full" />
            <div className="p-2 flex flex-col w-full">
                <span className="font-semibold">{item.title}</span>
                <span className="text-gray-500 text-sm">{item.price}</span>

                <div className="flex gap-2 items-center">
                    <img src="/star_icon.svg" alt="star icon" className="w-3" />
                    <span className="font-bold text-sm">{item.star}</span>
                </div>
            </div>
        </div>
    );
}

export default FoodCard;
