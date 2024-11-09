"use client";

import React from "react";
import Navbar from "../../components/Navbar";
import FoodCard from "./_components/FoodCard";
import TenantCard from "./_components/TenantCard";

function Kantin() {
  const recommended = [
    {
      link: "/kantin/tenant/karambol",
      title: "Ice Cream Karambol",
      price: "Rp15.000",
      star: "5.0",
      img: "/makanan/iceCreamKarambol.png",
    },
    {
      link: "#",
      title: "Sate Taichan",
      price: "Rp20.000",
      star: "5.0",
      img: "/makanan/sateTaichan.png",
    },
  ];

  const tenants = [
    { link:"/kantin/tens", title: "Tens Coffee", img: "/tenants/tens.png" },
    { link:"/kantin/lovecafe", title: "Love Cafe", img: "/tenants/love_cafe.png" },
    { link:"", title: "Dimsum Bu Lala", img: "/tenants/dimsum.png" },
    { link:"", title: "Mie Ayam Jago", img: "/tenants/mie_ayam.png" },
  ];

  return (
    <div className="mb-8">
      <header>
        <Navbar />
        <img src="/kanvok.png" alt="kanvok" className="mt-20 md:-mt-24" />
      </header>

      <div className="mt-10 px-5">
        <div className="flex  justify-around">
          <a href="./">
            <img src="/arrow_icon.svg" alt="arrow icon" className="w-5" />
          </a>

          <h1 className="font-bold text-2xl md:text-3xl">Kantin Vokasi</h1>

          <a href="">
            <img src="/map_icon.svg" alt="map icon" className="w-6" />
          </a>
        </div>

        {/* rekomendasi */}
        <div className="flex flex-col mt-10 gap-4">
          <p className="font-bold md:text-lg">Rekomendasi Buat Kamu</p>

          <div className="flex gap-4">
            {recommended.map((item, index) => (
              <div key={index}>
                <FoodCard item={item} index={index} />
              </div>
            ))}
          </div>
        </div>

        {/* Tenants */}
        <div className="flex flex-col mt-10 gap-4">
          <p className="font-bold md:text-lg">Tenants</p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {tenants.map((item, index) => (
              <div key={index} className="flex-grow">
                <TenantCard item={item} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kantin;
