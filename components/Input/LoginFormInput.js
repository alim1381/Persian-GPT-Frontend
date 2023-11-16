"use client";
import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

function LoginFormInput({
  register,
  validation,
  error,
  label,
  name,
  type,
  placeholder,
}) {
  const [showPass, setShowPass] = useState(false);
  const [focus, setFocus] = useState(false);

  if (type !== "password")
    return (
      <div className="relative text-right">
        <label
          htmlFor={name}
          className={`ml-3 transition text-sm font-bold ${
            focus ? "text-emerald-500" : "text-white"
          } tracking-wide`}
        >
          {label}{" "}
          <span className="text-red-500 font-extralight text-xs">
            {error?.message ? `* ${error?.message}` : ""}
          </span>
        </label>
        <input
          className={
            error
              ? ` w-full transition mt-2 ${
                  focus ? "text-emerald-500" : "text-white"
                } text-base px-4 py-2 border border-red-500 bg-neutral-800 focus:outline-none rounded-2xl`
              : ` w-full transition mt-2 ${
                  focus ? "text-emerald-500" : "text-white"
                } text-base px-4 py-2 border border-white bg-neutral-800 focus:outline-none rounded-2xl focus:border-emerald-500`
          }
          {...register(name, validation)}
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
      </div>
    );
  if (type === "password") {
    return (
      <div className="relative text-right">
        <label
          htmlFor={name}
          className={`ml-3 transition text-sm font-bold ${
            focus ? "text-emerald-500" : "text-white"
          } tracking-wide`}
        >
          {label}{" "}
          <span className="text-red-500 font-extralight text-xs">
            {error?.message ? `* ${error?.message}` : ""}
          </span>
        </label>
        <div className="mt-2 relative flex items-center">
          <input
            className={
              error
                ? ` w-full transition ${
                    focus ? "text-emerald-500" : "text-white"
                  } text-base px-4 py-2 border border-red-500 bg-neutral-800 focus:outline-none rounded-2xl`
                : ` w-full transition ${
                    focus ? "text-emerald-500" : "text-white"
                  } text-base px-4 py-2 border border-white bg-neutral-800 focus:outline-none rounded-2xl focus:border-emerald-500`
            }
            {...register(name, validation)}
            type={showPass ? "text" : "password"}
            id={name}
            name={name}
            placeholder={placeholder}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
          />
          <div
            className=" absolute right-0 pr-3 cursor-pointer"
            onClick={() => setShowPass(!showPass)}
          >
            {showPass ? (
              <AiOutlineEyeInvisible
                color="emerald-500"
                className=" fill-neutral-500 w-6 h-6"
              />
            ) : (
              <AiOutlineEye
                color="emerald-500"
                className=" fill-neutral-500 w-6 h-6"
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default LoginFormInput;
