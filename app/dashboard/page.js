"use client"

import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

function Page() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push('/');
    }
  }, [session, router]);

  if (!session) {
    return (
      <>
        Not signed in <br />
        <button onClick={() => signIn()}>Sign in</button>
      </>
    );
  }

  console.log(session.user.image)

  return (
    <div className="m-10">
      <header className="flex items-center">
        <a href="./" className="p-2">
          <img src="/arrow_icon.svg" alt="arrow icon" className="w-5" />
        </a>
        <div className="pl-5">
          <h1 className="font-bold text-2xl">Profil Saya</h1>
        </div>
      </header>

      <div className="flex items-center w-full rounded-2xl shadow-lg gap-1 border p-5 mt-5">
          {/* <img src={session.user.image} alt="" className="w-14 h-14" /> */}
          <img src="/avatar.png" alt="User profile image" className="w-14 h-14" />
        <div className="flex flex-col w-full ml-3">
          <h1 className="font-bold text-2xl">{session.user.name}</h1>
          <p className="font-medium">{session.user.email}</p>
        </div>
      </div>

      <div className="flex flex-col mt-5">
        <p className="font-bold text-2xl">Akun</p>
        <a className="flex items-center mt-5">
          <img src="/iconHeart.svg" alt="Favorite icon" className="w-8" />
          <p className="font-semibold text-xl ml-8">Menu Favorit</p>
        </a>
        <a className="flex items-center mt-7">
          <img src="/review_icon.svg" alt="Review icon" className="w-8" />
          <p className="font-semibold text-xl ml-8">Riwayat Ulasan</p>
        </a>
        <a className="flex items-center mt-7">
          <img src="/globe_icon.svg" alt="Language" className="w-8" />
          <p className="font-semibold text-xl ml-8">Pilihan Bahasa</p>
        </a>
        <a className="flex items-center mt-7">
          <img src="/setting_icon.svg" alt="Settings icon" className="w-8" />
          <p className="font-semibold text-xl ml-8">Pengaturan Akun</p>
        </a>
        <a className="flex items-center mt-7">
          <img src="/store_icon.svg" alt="Store Icon" className="w-8" />
          <p className="font-semibold text-xl ml-8">Toko Saya</p>
        </a>
        <a className="flex items-center mt-7 cursor-pointer" onClick={() => signOut()}>
          <p className="font-semibold text-red-600 text-xl">Sign Out</p>
        </a>
      </div>
    </div>
  );
}

export default Page;
