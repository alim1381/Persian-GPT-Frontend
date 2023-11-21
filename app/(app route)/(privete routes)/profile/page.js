"use client";

import { useSelector } from "react-redux";

function Profile() {
  const authState = useSelector((state) => state.authState);
  return (
    <section dir="rtl" className=" text-white text-center">
      <h1 className=" font-bold text-lg p-6">کاربر {authState.name}</h1>
      <div className=" w-full flex justify-center ">
        <hr className="  border border-neutral-600 w-4/5" />
      </div>
      <div className=" grid grid-cols-2 px-6 mt-6 max-sm:grid-cols-1 max-sm:gap-4">
        <p>شماره موبایل : {authState.phone}</p>
        <p className="">
          تایید شماره تلفن :{" "}
          <span
            className={`${
              authState.phoneVerify ? ` text-emerald-500` : ` text-red-500`
            }`}
          >
            {authState.phoneVerify ? "تایید شده" : "تایید نشده"}
          </span>
        </p>
      </div>
    </section>
  );
}

export default Profile;
