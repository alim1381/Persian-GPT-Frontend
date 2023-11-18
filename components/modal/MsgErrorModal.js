"use client";

import Image from "next/image";
import XSvg from "@/public/assets/x.svg";

function MsgErrorModal({ content, close }) {
  return (
    <div className=" absolute w-full h-full top-0 flex justify-center items-center bg-[rgba(23,23,23,0.7)] bg-opacity-5">
      <div className="relative p-4 w-full max-w-md">
        <div className="relative p-4 text-center rounded-lg shadow bg-neutral-800 sm:p-5">
          <button
            type="button"
            onClick={() => close(null)}
            className="text-neutral-400 absolute top-2.5 right-2.5 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-neutral-600 hover:text-white"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
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
          <div className="w-12 h-12 rounded-full bg-red-900 p-2 flex items-center justify-center mx-auto mb-3.5">
            <Image src={XSvg} alt="x" priority={true} />
          </div>
          <p className="mb-4 text-lg font-semibold text-white">
            خطا در انجام عملیات
          </p>
          <p className="mb-4 text-neutral-400 ">{content}</p>
        </div>
      </div>
    </div>
  );
}

export default MsgErrorModal;
