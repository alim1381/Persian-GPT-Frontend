"use client";

import { login } from "@/redux/futures/authSlice";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function PrivateRoutesProviders({ children }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [localStorageToken] = useState(() => {
    if (typeof window !== "undefined") {
      const getlocalStorageToken = localStorage.getItem("token");
      return getlocalStorageToken;
    }
  });

  const authState = useSelector((state) => state.authState);

  // const localStorageToken =  ? localStorage.getItem("token") : false;
  const isLogged = localStorageToken ? true : false;

  if (authState.token) return children;

  if (!authState.token && isLogged) {
    fetch("http://localhost:4000/api/auth/verifytoken", {
      method: "GET",
      headers: {
        authorization: `bearer ${JSON.parse(localStorageToken)}`,
      },
    })
      .then(async (res) => {
        const response = await res.json();

        switch (res.status) {
          case 200:
            dispatch(login(response));
            return children;
          default:
            localStorage.removeItem("token");
            router.push("/auth/login");
        }
      })
      .catch((err) => {
        localStorage.removeItem("token");
        router.push("/auth/login");
      });
    return children;
  }

  if (!authState.token && !isLogged) router.push("/auth/login");
}

export default PrivateRoutesProviders;
