"use client";
import LoginFormInput from "@/components/Input/LoginFormInput";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="py-12 px-12 bg-neutral-800 rounded-2xl shadow-xl z-20 max-sm:rounded-none max-sm:w-screen max-sm:h-screen">
      <div className=" flex flex-col items-center">
        <h1 className="text-3xl text-white font-bold text-center mb-4 cursor-pointer">
          ایجاد حساب
        </h1>
        <p className="w-80 text-center text-sm mb-8 font-semibold text-neutral-500 tracking-wide cursor-pointer">
          از طریق فرم زیر حساب جدیدی ایجاد کنید
        </p>
      </div>
      <div className="space-y-4">
        <LoginFormInput
          type={"text"}
          register={register}
          validation={{
            required: "این فیلد الزامیست!",
          }}
          error={errors.phone}
          name={"phone"}
          label={"شماره موبایل"}
        />
        <LoginFormInput
          type={"text"}
          register={register}
          validation={{
            required: "این فیلد الزامیست!",
          }}
          error={errors.name}
          name={"name"}
          label={"نام کاربری"}
        />
        <LoginFormInput
          type={"password"}
          register={register}
          validation={{
            required: "این فیلد الزامیست!",
          }}
          error={errors.password}
          name={"password"}
          label={"رمز عبور"}
        />
        <LoginFormInput
          type={"password"}
          register={register}
          validation={{
            required: "این فیلد الزامیست!",
            validate: (value) => {
              if (value !== watch("password")) {
                return "رمز عبور وارد شده مطابقت ندارد";
              }
            },
          }}
          error={errors.confirmPassword}
          name={"confirmPassword"}
          label={"تایید رمز عبور"}
        />
      </div>
      <div className="text-center mt-6">
        <button className="py-3 w-full text-xl text-white bg-emerald-500 transition hover:bg-emerald-600 rounded-2xl">
          ثبت نام
        </button>
        <p className="mt-4 text-sm text-white">
          حساب کاربری دارید؟
          <Link
            href={"/auth/login"}
            className="cursor-pointer text-emerald-400 mr-2"
          >
            ورود
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
