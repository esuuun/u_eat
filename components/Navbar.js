"use client";
import React, { useEffect, useState } from "react";
import LoginPopup from "./LoginPopup";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);

  const router = useRouter();

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest("nav") && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { title: "Akun", href: "/dashboard", img: "/personIcon.svg" },
    { title: "Menu Favorit", href: "#", img: "/favoriteIcon.svg" },
    { title: "Riwayat Ulasan", href: "#", img: "/historyIcon.svg" },
    { title: "Pilihan Bahasa", href: "#", img: "/languageIcon.svg" },
    { title: "Pengaturan Akun", href: "#", img: "/settingIcon.svg" },
  ];

  const handleAccountClick = () => {
    if (!session) {
      setIsMobileMenuOpen(false);
      setIsLoginPopupOpen(true);
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <nav className="bg-white border-gray-200 text-black shadow-md rounded-b-2xl pt-5 fixed top-0 left-0 w-full z-40">
      {isLoginPopupOpen && <LoginPopup setIsLoginPopupOpen={setIsLoginPopupOpen} />}
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="/ueat_icon.svg"
            alt="U Eat Icon"
            className="w-32 md:w-44"
          ></img>
        </a>
        {/* mobile button */}
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center bg-[#FECC3B] p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-gray-200 "
          aria-controls="navbar-default"
          aria-expanded={isMobileMenuOpen}
          onClick={toggleMobileMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } fixed top-0  h-full w-screen bg-black bg-opacity-50 -translate-x-4 md:hidden`}
        ></div>
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } fixed inset-0 h-full w-full bg-transparent md:hidden`}
          onClick={toggleMobileMenu}
        />

        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } fixed top-0 right-0 h-full w-[70%] bg-[#FECC3B] md:block md:w-auto md:static md:bg-white rounded-l-2xl z-50`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:mt-0 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:border-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                {index === 0 ? (
                  <div>
                    <button
                      className="flex gap-2 text-white md:text-black font-semibold py-2 px-3 rounded md:bg-transparent md:p-0"
                      aria-current="page"
                      onClick={handleAccountClick}
                    >
                      <img src={link.img} className="h-6 md:hidden" />
                      {link.title}
                    </button>
                    <img src="/navLine.svg" className="mb-2 md:hidden" />
                  </div>
                ) : (
                  <a
                    href={link.href}
                    className="flex gap-2 text-white md:text-black font-semibold py-2 px-3 rounded md:bg-transparent md:p-0"
                    aria-current="page"
                  >
                    <img src={link.img} className="h-6 md:hidden" />
                    {link.title}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
