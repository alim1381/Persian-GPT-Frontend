"use client";

import { isJson } from "@/helper/isJson";
import { login } from "@/redux/futures/authSlice";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function PrivateRoutesProviders({ children }) {
  const router = useRouter();
  const dispatch = useDispatch();

  const authState = useSelector((state) => state.authState);
  const [checkToken, setCheckToken] = useState(true);
  const [mounting, setMounting] = useState(true);

  useEffect(() => {
    if (mounting && !authState.token) {
      setMounting(false);
      const getlocalStorageToken = localStorage.getItem("token");

      // redirect if getlocalStorageToken null
      if (!getlocalStorageToken) {
        return router.push("/auth/login");
      }

      // check for valid token
      fetch("https://persian-gpt-backend.vercel.app/api/auth/verifytoken", {
        method: "GET",
        headers: {
          authorization: `bearer ${
            isJson(getlocalStorageToken)
              ? JSON.parse(getlocalStorageToken)
              : getlocalStorageToken
          }`,
        },
      })
        .then(async (res) => {
          const response = await res.json();

          switch (res.status) {
            case 200:
              dispatch(login(response));
              setCheckToken(false);
              return children;
            default:
              localStorage.removeItem("token");
              setCheckToken(false);
              return router.push("/auth/login");
          }
        })
        .catch((err) => {
          console.log(err);
          localStorage.removeItem("token");
          return router.push("/auth/login");
        });
    }
  }, []);

  if (authState.token) return children;

  if (!authState.token && !checkToken) return router.push("/auth/login");
}

export default PrivateRoutesProviders;
