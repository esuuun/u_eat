"use client";

import React, { useEffect, useRef } from "react";
import Navbar from "../_components/Navbar";
import ReviewCard from "./_components/ReviewCard";

function karambol() {
  const [isFavorite, setIsFavorite] = React.useState(false);
  const [isReview, setIsReview] = React.useState(false);
  const popupRef = useRef(null);

  const reviewData = [
    {
      id: 1,
      name: "Ikhsan",
      review: "enak bgtttt",
      star: "5.0",
    },
    {
      id: 2,
      name: "Rivi",
      review: "Pertama kali coba, super worth it!",
      star: "5.0",
    },
    {
      id: 3,
      name: "Ditya",
      review: "porsinya lumayan sedikittt",
      star: "4.5",
    },
  ];

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  const handleReviewClick = () => {
    setIsReview(!isReview);
  };

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setIsReview(false);
    }
  };

  useEffect(() => {
    if (isReview) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isReview]);

  return (
    <div className="mb-8">
      <header>
        <Navbar />
      </header>
      <div className="w-full mt-20 flex flex-col justify-center items-center">
        <div className="w-full flex justify-start px-6 absolute top-0 left-0 mt-28">
          <a href="" className="bg-white rounded-full p-2 shadow-md">
            <img src="/arrow_icon.svg" alt="arrow icon" className="w-5" />
          </a>
        </div>
        <img src="/makanan/karambolRectangle.png" className="" />
        <div className="flex flex-col w-full h-full m-5 items-center">
          <div className="flex items-start w-full justify-between px-6">
            <div className="flex flex-col gap-2">
              <p className="text-2xl font-bold">Ice Cream Karambol</p>
              <p className="text-lg font-bold">Rp15.000</p>
            </div>
            <div className="flex gap-2 pt-1">
              {/* Favorite */}
              <button
                alt="Heart Icon"
                className="text-gray-500 hover:text-gray-700"
                onClick={handleFavoriteClick}
              >
                <img
                  src={isFavorite ? "/iconHeartRed.svg" : "/iconHeart.svg"}
                  className="w-7 hover:scale-110 transition-transform duration-300"
                  style={{
                    filter: isFavorite
                      ? "invert(22%) sepia(100%) saturate(7453%) hue-rotate(357deg) brightness(102%) contrast(107%)"
                      : "none",
                  }}
                />
              </button>
              {/* Review */}
              <button
                alt="ReviewIcon"
                className="text-gray-500 hover:text-gray-700"
                onClick={handleReviewClick}
              >
                <img
                  src="/iconSearch.svg"
                  className="w-7 hover:scale-110 transition-transform duration-300"
                ></img>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* review popup */}

      {isReview && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div ref={popupRef} className="rounded-lg fixed bottom-0 bg-white w-full h-[50%] p-2 overflow-y-auto">
            <div className="text-center w-full">
              <span className="font-bold text-lg">Ulasan dan rating</span>
              {reviewData.map((review) => (
                <ReviewCard
                  key={review.id}
                  item={review}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default karambol;
