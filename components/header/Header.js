import LOGO from "@/public/LOGOGREEN.svg";
import Image from "next/image";
import HambergerMenu from "../hambergerMenu/HambergerMenu";
import Link from "next/link";
export function Header() {
  return (
    <header>
      <nav class=" border-gray-200 px-4 lg:px-6 py-2.5 bg-neutral-800">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link href="/" class="flex items-center">
            <Image src={LOGO} class="mr-3 w-8 h-8 sm:h-9" alt="Flowbite Logo" />
            <span class="self-center text-xl font-semibold whitespace-nowrap text-white">
              GPT پرشین
            </span>
          </Link>
          <div class="flex items-center lg:order-2 gap-2">
            <Link
              href="/auth/login"
              class=" max-lg:hidden bg-neutral-800 text-white hover:bg-neutral-700 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              ورود
            </Link>
            <Link
              href="/auth/register"
              class=" text-white bg-emerald-500 hover:bg-emerald-600 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5  focus:outline-none"
            >
              شروع رایگان
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
