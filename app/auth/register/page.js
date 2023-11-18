"use client";
import LoginFormInput from "@/components/Input/LoginFormInput";
import Loader from "@/components/Loader";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

function Register() {
  const [resError, setResError] = useState(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const formOnSubmit = async (data) => {
    // console.log(process.env.APIS_BASE_URL);
    try {
      setResError(null);
      setLoading(true);
      const res = await fetch(`http://localhost:4000/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
          password: data.password,
        }),
      });
      const response = await res.json();

      // operation
      switch (res.status) {
        case 201:
          dispatch(login(response.user));
          localStorage.setItem("token", JSON.stringify(response.user.token));
          router.push("/chat");
          setLoading(false);

        default:
          setResError(response.message || "خطا در برقراری ارتباط");
          setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className=" relative py-12 px-12 bg-neutral-800 rounded-2xl shadow-xl z-20 max-sm:rounded-none max-sm:w-screen max-sm:h-screen">
      <div className=" flex flex-col items-center">
        {loading && <Loader />}
        <h1 className="text-3xl text-white font-bold text-center mb-4 cursor-pointer">
          ایجاد حساب
        </h1>
        <p
          className={` text-center text-sm mb-8 font-semibold ${
            resError ? `text-red-500` : `text-neutral-500`
          } tracking-wide`}
        >
          {resError ? resError : "از طریق فرم زیر حساب جدیدی ایجاد کنید"}
        </p>
      </div>
      <form onSubmit={handleSubmit(formOnSubmit)}>
        <div className="space-y-4">
          <LoginFormInput
            type={"text"}
            register={register}
            validation={{
              required: "این فیلد الزامیست",
            }}
            error={errors.phone}
            name={"phone"}
            label={"شماره موبایل"}
          />
          <LoginFormInput
            type={"text"}
            register={register}
            validation={{
              required: "این فیلد الزامیست",
            }}
            error={errors.name}
            name={"name"}
            label={"نام و نام خانوادگی"}
          />
          <LoginFormInput
            type={"password"}
            register={register}
            validation={{
              required: "این فیلد الزامیست",
            }}
            error={errors.password}
            name={"password"}
            label={"رمز عبور"}
          />
          <LoginFormInput
            type={"password"}
            register={register}
            validation={{
              required: "این فیلد الزامیست",
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
          <button
            disabled={loading}
            className={
              loading
                ? "py-3 w-full text-xl text-white bg-neutral-600 transition hover:bg-emerald-600 rounded-2xl"
                : "py-3 w-full text-xl text-white bg-emerald-500 transition hover:bg-emerald-600 rounded-2xl"
            }
          >
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
      </form>
    </div>
  );
}

export default Register;
