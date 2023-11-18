import Image from "next/image";
import BlackLogo from "@/public/ChatGPT.svg";
import Link from "next/link";

export function SideBar() {
  return (
    <section className=" w-2/12 bg-gradient-to-b rounded-3xl from-emerald-500 flex flex-col items-center max-lg:hidden">
      <Image src={BlackLogo} alt="logo gpt" priority={true}/>
      <div className=" w-4/5 ">
        <hr className="  border-dashed border-neutral-800 border-[2px]" />
      </div>
      <ul className=" text-neutral-800 flex flex-col items-center gap-3 mt-4 font-bold text-center">
        <li className="transition hover:bg-neutral-800 hover:text-white cursor-pointer p-2 px-5 w-full rounded-3xl">
          <Link href={"/chat"}>صفحه اصلی</Link>
        </li>
        <li className="transition hover:bg-neutral-800 hover:text-white cursor-pointer p-2 px-5 w-full rounded-3xl">
          <Link href={"/profile"}>اطلاعات کاربری</Link>
        </li>
        <li className="transition hover:bg-neutral-800 hover:text-white cursor-pointer p-2 px-5 w-full rounded-3xl">
          <Link href={"/credit"}>افزایش اعتبار</Link>
        </li>
        <li className="transition hover:bg-neutral-800 hover:text-white cursor-pointer p-2 px-5 w-full rounded-3xl">
          خروج
        </li>
      </ul>
    </section>
  );
}
