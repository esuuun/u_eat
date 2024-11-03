"use client";

import React from 'react';
import Navbar from '../_components/Navbar';

function karambol() {
    const [isFavorite, setIsFavorite] = React.useState(false);

    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <div className='mb-8'>
            <header>
                <Navbar />
            </header>
            <div className='w-full mt-20 flex flex-col justify-center items-center'>
                <div className="w-full flex justify-start px-6 absolute top-0 left-0 mt-28">
                    <a href="" className="bg-white rounded-full p-2 shadow-md">
                        <img src="/arrow_icon.svg" alt="arrow icon" className="w-5" />
                    </a>
                </div>
                <img src='/makanan/wingsRectangle.png' className=''/>
                <div className='flex flex-col w-full h-full m-5 items-center'>
                    <div className='flex items-start w-full justify-between px-6'>
                        <div className='flex flex-col gap-2'>
                            <p className='text-2xl font-bold'>Wings Sambal Matah</p>
                            <p className='text-lg font-bold'>Rp25.000</p>
                        </div>
                        <div className='flex gap-2 pt-1'>
                            {/* Favorite */}
                            <button alt="Heart Icon" className="text-gray-500 hover:text-gray-700" onClick={handleFavoriteClick}>
                                <img
                                    src={isFavorite ? '/iconHeartRed.svg' : '/iconHeart.svg'}
                                    className="w-7 hover:scale-110 transition-transform duration-300"
                                    style={{ filter: isFavorite ? 'invert(22%) sepia(100%) saturate(7453%) hue-rotate(357deg) brightness(102%) contrast(107%)' : 'none' }}
                                />
                            </button>
                            {/* Review */}
                            <button alt="ReviewIcon" className="text-gray-500 hover:text-gray-700">
                                <img src="/iconSearch.svg" className="w-7 hover:scale-110 transition-transform duration-300"></img>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default karambol;
