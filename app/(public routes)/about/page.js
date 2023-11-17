import React from "react";
import CSImage from "@/public/cs.png";
import Image from "next/image";

function About() {
  return (
    <main dir="rtl" className="">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-10 lg:px-12">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white flex flex-col">
          سرویس هوش مصنوعی متنی
          <span className=" text-emerald-500 font-bold">پرشین جی پی تی</span>
        </h1>
        <p className="mb-8 text-lg font-normal mt-10 lg:text-xl sm:px-16 xl:px-48 text-neutral-400">
          با توجه به تحریم هایی که از سوی توسعه دهندگان هوش مصنوعی Chat GPT
          همچون داشتن شماره تلفن خارجی و یا قبول نکردن ip ایرانی، ما سعی کردیم
          که با استفاده از api همان هوش مصنوعی بستری را فراهم کنیم تا هم وطنان
          عزیز بتوانند به راحتی از این سرویس بدون داشتن محدودیت استفاده کنند.
        </p>
        <p className="mb-8 text-lg font-normal mt-10 lg:text-xl sm:px-16 xl:px-48 text-neutral-400">
          توسعه دهندگان
        </p>
        <div className=" text-neutral-400 flex gap-9 justify-center max-sm:flex-col max-sm:gap-4">
          <p className=" hover:text-emerald-500 cursor-pointer transition">
            عرفان
          </p>
          <p className=" hover:text-emerald-500 cursor-pointer transition">
            اشکان مفیدی
          </p>
          <a
            href="http://github.com/alim1381"
            target="_blank"
            className=" hover:text-emerald-500 cursor-pointer transition"
          >
            علی مویدی
          </a>
        </div>
        <div className=" w-full flex justify-between relative">
          <Image
            className=" absolute left-10 mt-3  max-sm:static"
            src={CSImage}
            width={400}
          />
          <div
            aria-hidden="true"
            className=" max-sm:top-10 max-sm:right-0 absolute top-16 right-12 my-auto w-64 h-32 rotate-45 bg-gradient-to-r from-emerald-100 to-emerald-400 blur-3xl opacity-20"
          ></div>
        </div>
      </div>
    </main>
  );
}

export default About;
