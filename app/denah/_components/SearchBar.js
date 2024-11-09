import React from "react";

function SearchBar() {
    return (
        <div className="flex items-center p-2 border rounded-full shadow-lg">
            <img src="/search_icon.png" className="w-5 h-5 ml-3" />
            <input
                type="text"
                placeholder="Cari makanan yang kamu pengen"
                className="w-full p-2 ml-2 outline-none text-base"
            />
        </div>
    );
}

export default SearchBar;
