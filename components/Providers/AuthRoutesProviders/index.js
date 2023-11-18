"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";

function AuthRoutesProviders({ children }) {
  const router = useRouter();

  const authState = useSelector((state) => state.authState);
  const [localStorageToken] = useState(() => {
    if (typeof window !== "undefined") {
      const getlocalStorageToken = localStorage.getItem("token");
      return getlocalStorageToken;
    }
  });
  const isLogged = localStorageToken ? true : false;

  if (!authState.token && !isLogged) return children;

  if (authState.token || isLogged) router.push("/chat");
}

export default AuthRoutesProviders;
