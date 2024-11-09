import React from "react";

function ReviewCard({ item }) {
  return (
    <div className="max-w-sm text-start">
      <div className="p-2 flex flex-col ">
        <div className="flex items-center gap-2">
          <img src="/userIcon.svg" alt="Review Icon" className="w-8 h-8" />
          <span className=" font-bold text-sm">{item.name}</span>
        </div>
        <img
          src="/triangle.svg"
          alt="item Icon"
          className="w-3 h-3 translate-x-2 translate-y-1"
        />
        <div className="flex flex-col gap-1 bg-white border border-gray-300 rounded-lg p-2">
          <p className="text-gray-800 text-sm">{item.review}</p>
          <div className="flex">
            {/* StarIcon */}
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                src={
                  i < Math.floor(item.star)
                    ? "/star2_icon.svg"
                    : i < item.star
                    ? "/starHalf1_icon.svg"
                    : "/star_half.png"
                }
                alt="star icon"
                className="w-3 hover:scale-110 transition-transform duration-300"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
