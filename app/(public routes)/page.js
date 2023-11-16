import Image from "next/image";
import CSImage from "@/public/cs.png";
import GptLogo from "@/public/ChatGPT_logo.svg";
import { NewNews } from "@/components/NewNews/NewNews";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main dir="rtl" className="">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-10 lg:px-12">
          <NewNews text="این وبسایت به صورت رایگان دردسترس است" />
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white">
            PERSIAN GPT
          </h1>
          <p className="mb-8 text-lg font-normal  lg:text-xl sm:px-16 xl:px-48 text-neutral-400">
            سرویس هوش مصنوعی پرشین جی پی تی ، ارائه دهنده سرویس های متنی هوش
            مصنوعی با استفاده از هوش مصنوعی ChatGPT
          </p>
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:gap-4">
            <Link
              href={"/auth/register"}
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-emerald-500 hover:bg-emerald-600 focus:ring-4 focus:ring-emerald-500"
            >
              شروع رایگان
            </Link>
            <Link
              href={"/about"}
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg border focus:ring-4 text-white border-neutral-700 hover:bg-neutral-700 focus:ring-neutral-800"
            >
              درباره ما
            </Link>
          </div>
          <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
            <span className="font-semibold text-neutral-400 uppercase">
              قدرتمند شده با
            </span>
            <div className="flex justify-center items-center mt-8 text-neutral-500 gap-2">
              <p className=" text-neutral-200 font-extrabold">Chat GPT</p>
              <Image src={GptLogo} width={50} />
            </div>
          </div>
          <div className=" w-full flex justify-between relative">
            <Image className=" mt-3" src={CSImage} width={400} />
            <div
              aria-hidden="true"
              className=" max-sm:top-10 max-sm:right-0 absolute top-16 right-12 my-auto w-64 h-32 rotate-45 bg-gradient-to-r from-emerald-100 to-emerald-400 blur-3xl opacity-20"
            ></div>
          </div>
        </div>
      </main>
    </>
  );
}
