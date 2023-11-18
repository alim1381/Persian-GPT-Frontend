"use client";
import Image from "next/image";
import CSImage from "@/public/cs.png";
import AuthRoutesProviders from "@/components/Providers/AuthRoutesProviders";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function AuthLayout({ children }) {
  const authState = useSelector((state) => state.authState);
  const [mounting, setMounting] = useState(true);
  const [isLogged, setIsLogged] = useState(null);

  useEffect(() => {
    if (mounting) {
      setMounting(false);
      const getlocalStorageToken = localStorage.getItem("token");
      setIsLogged(getlocalStorageToken ? true : false);
    }
  }, []);

  return (
    <AuthRoutesProviders authState={authState} isLogged={isLogged}>
      <div className=" relative overflow-x-hidden min-h-screen flex justify-center items-center">
        <div className="absolute blur-3xl rotate-item w-60 h-60 rounded-xl bg-emerald-500 -top-5 -left-16 z-0 transform rotate-45 hidden md:block"></div>
        <div className="absolute blur-3xl rotate-item w-48 h-48 rounded-xl bg-emerald-500 bottom-10 -right-10 transform rotate-12 hidden md:block"></div>
        {children}
        {/* <div className="w-40 h-20 blur-3xl rotate-item absolute bg-emerald-500 rounded-full top-16 right-12 hidden md:block"></div> */}
        <Image
          className=" absolute rounded-full blur -top-40 right-16 rotate-180 transform hidden md:block"
          src={CSImage}
          width={400}
          alt="Roboot"
          priority={true}
        />
        <div className="w-20 h-40 blur-3xl rotate-item absolute bg-emerald-500 rounded-full bottom-16 left-72 transform rotate-45 hidden md:block"></div>
      </div>
    </AuthRoutesProviders>
  );
}

export default AuthLayout;
