import LOGO from "@/public/LOGOGREEN.svg";
import Image from "next/image";
import HambergerMenu from "../HambergerMenu";
import Link from "next/link";
export function Header() {
  return (
    <header>
      <nav className=" border-gray-200 px-4 lg:px-6 py-2.5 bg-neutral-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link href="/" className="flex items-center">
            <Image src={LOGO} className="mr-3 w-8 h-8 sm:h-9" alt="Logo" priority={true} />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
              GPT پرشین
            </span>
          </Link>
          <div className="flex items-center lg:order-2 gap-2">
            <Link
              href="/auth/login"
              className=" max-lg:hidden bg-neutral-800 text-white hover:bg-neutral-700 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              ورود
            </Link>
            <Link
              href="/auth/register"
              className=" text-white bg-emerald-500 hover:bg-emerald-600 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5  focus:outline-none"
            >
              شروع رایگان
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
