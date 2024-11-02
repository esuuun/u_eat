"use client";

import React from "react";
import Navbar from "./_components/Navbar";
import FoodCard from "./_components/FoodCard";
import ProductCard from "./_components/ProductCard";

function tenant() {
  const menuFavorit = [
    {
      title: "Ice Cream Karambol",
      price: "Rp15.000",
      star: "5.0",
      img: "/makanan/iceCreamKarambol.png",
    },
    {
      title: "Aren Latte",
      price: "Rp18.000",
      star: "5.0",
      img: "/minuman/TENS_arenLatte 1.png",
    },
  ];

  const tenants = [
    { title: "Tens Coffee", img: "/tenants/tens.png" },
    { title: "Love Cafe", img: "/tenants/love_cafe.png" },
    { title: "Dimsum Bu Lala", img: "/tenants/dimsum.png" },
  ];

  const products = [
    { title: "Ice Cream Karambol", price: "Rp15.000", img: "/makanan/KARAMBOLFULL.png", description : "Ice cream vanilla + Roti + Caramel + Crumble", star : "5.0" },
    { title: "Aren Latte", price: "Rp18.000", img: "/minuman/arenLatteFull.png", description : "Kopi + Gula Aren + Susu + Es", star : "3.7" },
    { title: "Cromboloni Lotus", price: "Rp15.000", img: "/makanan/cromboloniLotusFull.png", description : "Roti + Lotus + Coklat", star : "5.0" },
  ];

  return (
    <div className="mb-8">
      <header>
        <Navbar />
        <img src="/tenants/tens1.png" alt="tens" className="mt-20 md:-mt-24" />
      </header>

      <div className="mt-10 px-5">
        <div className="flex  justify-around">
          <a href="">
            <img src="/arrow_icon.svg" alt="arrow icon" className="w-5" />
          </a>

          <h1 className="font-bold text-2xl md:text-3xl">Tens Coffee</h1>

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
            <img src="/tenants/tens1.png" alt="tens222" className="mt-20 md:-mt-24" />
          </div>
        </div>
      </div>

    </div>
  );
}


export default tenant;
