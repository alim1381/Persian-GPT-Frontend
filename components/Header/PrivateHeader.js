"use client";
import Link from "next/link";
import LOGO from "@/public/LOGOGREEN.svg";
import CoinLogo from "@/public/coin-icon.svg";
import Image from "next/image";
import { useSelector } from "react-redux";

export function PrivateHeader() {
  const authData = useSelector((state) => state.authState);
  return (
    <header>
      <nav className=" border-gray-200 px-4 lg:px-6 py-2.5 ">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link href="/" className="flex items-center">
            <Image
              src={LOGO}
              className="mr-3 w-8 h-8 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
              GPT پرشین
            </span>
          </Link>
          <div className="flex items-center lg:order-2 gap-2">
            <Image src={CoinLogo} width={30} />
            <p className=" text-white text-lg font-bold">
              {authData.credit !== null ? authData.credit : "اعتبار"}
            </p>
          </div>
        </div>
      </nav>
    </header>
  );
}
