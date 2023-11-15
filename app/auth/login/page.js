"use client";
import LoginFormInput from "@/components/input/LoginFormInput";
import { login } from "@/redux/futures/authSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

function Login() {
  const [resError , setResError] = useState(null)

  const router = useRouter()
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const formOnSubmit = async (data) => {
    // console.log(process.env.APIS_BASE_URL);
    try {
      setResError(null)
      const res = await fetch(`http://localhost:4000/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone: data.phone,
          password: data.password,
        }),
      });
      const response = await res.json()

      // operation
      switch (res.status) {
        case 200 : 
          dispatch(login(response.user))
          localStorage.setItem("token" , JSON.stringify(response.user.token))
          router.push('/chat')

        case 400 : 
          setResError(response.message || "خطا در برقراری ارتباط!")

        case 404 : 
          setResError(response.message || "خطا در برقراری ارتباط!")

        default : 
          setResError("خطا در برقراری ارتباط!")
      }
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="py-12 px-12 bg-neutral-800 rounded-2xl shadow-xl z-20 max-sm:rounded-none max-sm:w-screen max-sm:h-screen">
      <div className=" flex flex-col items-center">
        <h1 className="text-3xl text-white font-bold text-center mb-4">
          ورود به حساب
        </h1>
        <p className={` text-center text-sm mb-8 font-semibold ${resError ? `text-red-500` : `text-neutral-500`} tracking-wide`}>
          {
            resError ? resError : "از طریق فرم زیر به حساب خود وارد شوید"
          }
        </p>
      </div>
      <form onSubmit={handleSubmit(formOnSubmit)}>
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
            type={"password"}
            register={register}
            validation={{
              required: "این فیلد الزامیست!",
            }}
            error={errors.password}
            name={"password"}
            label={"رمز عبور"}
          />
        </div>
        <div className="text-center mt-6">
          <button className="py-3 w-full text-xl text-white bg-emerald-500 transition hover:bg-emerald-600 rounded-2xl">
            ورود
          </button>
          <p className="mt-4 text-sm text-white">
            حساب کاربری ندارید؟
            <Link
              href={"/auth/register"}
              className="cursor-pointer text-emerald-400 mr-2"
            >
              ثبت نام
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
