"use client";

import React, { use, useEffect } from "react";
import Navbar from "../components/Navbar";
import FoodCard from "./kantin/_components/FoodCard";
import KantinCard from "./kantin/_components/KantinCard";
import SearchBar from "./kantin/_components/SearchBar";
import MapCard from "./kantin/_components/MapCard";
import LoginPopup from "../components/LoginPopup";
import { useSession } from "next-auth/react";

function Home() {
  // const { data: session } = useSession();

  // useEffect(() => {
  //   if (session) {
  //     console.log(session);
  //   }
  // }, [session]);

  const searchbar = [{ img: "", title: "Cari makanan yang kamu pengen" }];
  const viral = [
    {
      link: "/kantin/tens/karambol",
      title: "Ice Cream Karambol",
      price: "Rp15.000",
      star: "5.0",
      img: "/makanan/iceCreamKarambol.png",
    },
    {
      link: "#",
      title: "Ayam Lodho",
      price: "Rp20.000",
      star: "5.0",
      img: "/makanan/ayamLodho.png",
    },
    {
      link: "#",
      title: "Sate Pacil Lama",
      price: "Rp15.000",
      star: "5.0",
      img: "/makanan/satePacil.png",
    },
    {
      link: "#",
      title: "Ayam Mas Roni",
      price: "Rp15.000",
      star: "5.0",
      img: "/makanan/masRoni.png",
    },
  ];
  const kantin = [
    { link: "/kantin", title: "Kantin Vokasi", img: "/kantin/vokasi.png" },
    { link: "#", title: "Kantin Psikologi", img: "/kantin/psiko.png" },
    { link: "#", title: "Kantin Sastra", img: "/kantin/sastra.png" },
    { link: "#", title: "Kantin FMIPA", img: "/kantin/fmipa.png" },
    { link: "#", title: "Kantin Hukum", img: "/kantin/hukum.png" },
    { link: "#", title: "Kantin Teknik", img: "/kantin/teknik.png" },
    { link: "#", title: "Kantin FEB", img: "/kantin/feb.png" },
    { link: "#", title: "Kantin RIK", img: "/kantin/rik.png" },
    { link: "#", title: "Kantin FISIP", img: "/kantin/fisip.png" },
  ];

  const denah = [{ title: "Denah Universitas Indonesia", img: "/denah.png" }];

  return (
    <div className="mb-8">
      <header>
        <Navbar />
      </header>

      <div className="mt-36 px-5">
        {/* Title */}
        <div className="flex justify-center text-center text-2xl font-bold m-5 items-center">
          <h1>
            Hey-U!
            <br />
            mau makan apa hari ini?
          </h1>
        </div>

        {/* Search Bar */}
        <div>
          <SearchBar />
        </div>

        {/* Viral */}
        <div className="flex flex-col mt-10 gap-4">
          <p className="font-bold text-xl md:text-lg">Cek menu viral ini!</p>
          <div className="flex gap-5 pb-5 overflow-x-auto">
            {viral.map((item, index) => (
              <div key={index} className="flex-none">
                <FoodCard item={item} index={index} />
              </div>
            ))}
          </div>
        </div>

        {/* Kantin */}
        <div className="flex flex-col mt-10 gap-4">
          <p className="font-bold text-xl md:text-lg">
            Pilih kantin yang kamu mau!
          </p>
          <div className="grid grid-cols-3 gap-1 md:gap-4 md:flex md:overflow-x-auto">
            {kantin.map((item, index) => (
              <div key={index}>
                <KantinCard item={item} index={index} />
              </div>
            ))}
          </div>
        </div>

        {/* Denah */}
        <div className="flex  flex-col mt-10 gap-4">
          <div className="flex gap-4 ">
            {denah.map((item, index) => (
              <div key={index}>
                <MapCard item={item} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
