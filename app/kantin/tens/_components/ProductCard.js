import React from "react";

function ProductCard({ item, index }) {
  const [isFavorite, setIsFavorite] = React.useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <a
      href={item.link}
      key={index}
      className="flex max-w-sm rounded-2xl shadow-md overflow-hidden border border-gray-300 cursor-pointer"
      onClick={() => window.location.href = `/product/${item.id}`}
    >
      <img src={item.img} alt={item.title} className="w-1/3 h-auto object-contain" />
      <div className="px-4 py-1 flex flex-col w-2/3">
        <span className="text-lg font-bold">{item.title}</span>
        <span className="text-black text-xs mt-0.5">{item.description}</span>
        <span className="mb-2.5 mt-3 text-xs font-bold text-black">
          {item.price}
        </span>
        {/* div for star and heart and review */}
        <div className="flex mt-2 items-center">
          {/* StarIcon */}
          {[...Array(5)].map((_, i) => (
            <img
              key={i}
              src={i < Math.floor(item.star) ? "/star2_icon.svg" : (i < item.star ? "/starHalf1_icon.svg" : "/star_half.png")}
              alt="star icon"
              className="w-3 hover:scale-110 transition-transform duration-300"
            />
          ))}
          {/* div for heart and review */}
          <div className="flex items-center gap-2 ml-auto pb-2">
            {/* HeartIcon */}
            <button alt = "Heart Icon" className="text-gray-500 hover:text-gray-700" onClick={(e) => { e.stopPropagation(); handleFavoriteClick(); }}>
              <img
                src={isFavorite ? '/iconHeartRed.svg' : '/iconHeart.svg'}
                className="w-5 hover:scale-110 transition-transform duration-300"
                style={{ filter: isFavorite ? 'invert(22%) sepia(100%) saturate(7453%) hue-rotate(357deg) brightness(102%) contrast(107%)' : 'none' }}
              />
            </button>
            {/* ReviewIcon */}
            <button alt = "ReviewIcon" className="text-gray-500 hover:text-gray-700" onClick={(e) => e.stopPropagation()}>
              <img src="/iconSearch.svg" className="w-5 hover:scale-110 transition-transform duration-300"></img>
            </button>
          </div>
        </div>
      </div>
    </a>
  );
}

export default ProductCard;
