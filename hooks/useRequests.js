"use client";

import { isJson } from "@/helper/isJson";
import { useState } from "react";
import { useSelector } from "react-redux";

function useRequests({ path, method, header }) {
  const authState = useSelector((state) => state.authState);
  const [localStorageToken] = useState(() => {
    if (typeof window !== "undefined") {
      const getlocalStorageToken = localStorage.getItem("token");
      return getlocalStorageToken;
    }
  });

  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getRequests = () => {
    setLoading(true);
    fetch(`http://localhost:4000/api${path}`, {
      method: method,
      headers: {
        ...header,
        authorization: `bearer ${
          isJson(localStorageToken)
            ? JSON.parse(localStorageToken)
            : localStorageToken
        }`,
      },
    })
      .then(async (res) => {
        const responseData = await res.json();
        if (res.status === 200 || res.status === 201) {
          setResponse(responseData);
          setLoading(false);
        } else {
          setError(responseData);
          setLoading(false);
        }
      })
      .catch((err) => {
        setError({ message: "درخواست با خطا مواجه شد", success: false });
        setLoading(false);
      });
  };

  const postRequests = (data) => {
    setLoading(true);
    fetch(`http://localhost:4000/api${path}`, {
      method: method,
      headers: {
        ...header,
        authorization: `bearer ${
          isJson(localStorageToken)
            ? JSON.parse(localStorageToken)
            : localStorageToken
        }`,
      },
      body: JSON.stringify({
        ...data,
      }),
    })
      .then(async (res) => {
        const responseData = await res.json();
        if (res.status === 200 || res.status === 201) {
          setResponse(responseData);
          setLoading(false);
        } else {
          setError(responseData);
          setLoading(false);
        }
      })
      .catch((err) => {
        setError({ message: "درخواست با خطا مواجه شد", success: false });
        setLoading(false);
      });
  };

  return [response, error, loading, getRequests, postRequests];
}

export default useRequests;
