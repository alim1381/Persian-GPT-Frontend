"use client";
import Link from "next/link";
import { useState } from "react";

function HambergerMenu() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <button
        type="button"
        className=" items-center p-2 text-sm rounded-lg lg:hidden focus:outline-none focus:ring-2 text-neutral-400 hover:bg-neutral-700 focus:ring-neutral-600"
        aria-controls="mobile-menu-2"
        aria-expanded="false"
        onClick={() => setShowMenu(true)}
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <svg
          className="hidden w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>

      <div
        className={` fixed top-0 lg:hidden left-0 z-40 w-1/3 max-sm:w-full transition ${
          showMenu ? `translate-x-0` : ` -translate-x-full`
        } bg-neutral-900 h-screen`}
      >
        <div className=" flex justify-between items-center ">
          <h1 className=" font-bold text-center p-5 text-xl text-white">
            Persian GPT
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#fff"
            className="w-8 h-8 m-5"
            onClick={() => setShowMenu(false)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <ul className=" text-white flex flex-col items-center gap-3 px-2 mt-4 font-bold text-center">
          <li className="transition hover:bg-emerald-500 hover:text-white cursor-pointer p-2 px-5 w-full rounded-3xl">
            <Link href={"/chat"}>صفحه اصلی</Link>
          </li>
          <li className="transition hover:bg-emerald-500 hover:text-white cursor-pointer p-2 px-5 w-full rounded-3xl">
            <Link href={"/profile"}>اطلاعات کاربری</Link>
          </li>
          <li className="transition hover:bg-emerald-500 hover:text-white cursor-pointer p-2 px-5 w-full rounded-3xl">
            <Link href={"/credit"}>افزایش اعتبار</Link>
          </li>
          <li className="transition hover:bg-emerald-500 hover:text-white cursor-pointer p-2 px-5 w-full rounded-3xl">
            <Link href={"/logout"}>خروج</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default HambergerMenu;
