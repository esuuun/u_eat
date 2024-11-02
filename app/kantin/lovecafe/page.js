"use client";

import React from "react";
import Navbar from "./_components/Navbar";
import FoodCard from "./_components/FoodCard";
import ProductCard from "./_components/ProductCard";

function lovecafe() {
  const menuFavorit = [
    {
      title: "Wings Sambal Matah",
      price: "Rp20.000",
      star: "5.0",
      img: "/makanan/wingsmenufav.png",
    },
    {
      title: "Caramel Manilla Salad",
      price: "Rp18.000",
      star: "5.0",
      img: "/makanan/caramelmenufav.png",
    },
  ];

  const products = [
    { title: "Wings Sambal Matah", price: "Rp25.000", img: "/makanan/wingsmenu.png", description : "Nasi + Wings Panggang Dengan Sambal Matah Spesial + Salad Mayonaise", star : "5.0" },
    { title: "Real Madrid", price: "Rp25.000", img: "/makanan/realmenu.png", description : "Ayam File Balur Tepung Roti Dan Cheese Stick Dengan Saus Barbeque + Nasi / Kentang Goreng + Salad + Mayonaise", star : "0.0" },
    { title: "Chelsea", price: "Rp25.000", img: "/makanan/chelseamenu.png", description : "Omelette Isi Sosi Sapi Dengan Saus Bangkok/Barbeque + Nasi/Kentang Goreng + Salad Dan Mayonaise", star : "0.0" },
    { title: "Caramel Manilla Salad", price: "Rp18.000", img: "/makanan/caramelmenu.png", description : "Salad Buah Dengan Saus Caramel + Keju", star : "5.0" },
  ];

  return (
    <div className="mb-8">
      <header>
        <Navbar />
        <img src="/tenants/lovefull.png" alt="love" className="mt-20 md:-mt-24" />
      </header>

      <div className="mt-10 px-5">
        <div className="flex  justify-around">
          <a href="">
            <img src="/arrow_icon.svg" alt="arrow icon" className="w-5" />
          </a>

          <h1 className="font-bold text-2xl md:text-3xl">Love Cafe</h1>

          <a href="">
            {/* <img src="/map_icon.svg" alt="map icon" className="w-6" /> */}
          </a>
        </div>

        {/* rekomendasi */}
        <div className="flex flex-col mt-10 gap-4">
          <p className="font-bold md:text-lg">Menu favorit</p>

          <div className="flex gap-4 md:text-sm">
            {menuFavorit.map((item, index) => (
              <div key={index}>
                <FoodCard item={item} index={index} />
              </div>
            ))}
          </div>
        </div>

        {/* Tenants */}
        <div className="flex flex-col mt-10 gap-6">
          <p className="font-bold md:text-lg">Menu</p>

          <div className="grid grid-rows-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {products.map((item, index) => (
              <div key={index} className="flex-grow">
                <ProductCard item={item} index={index} />
              </div>
            ))}
          </div>
          <div>

          </div>
        </div>
      </div>

    </div>
  );
}


export default lovecafe;
