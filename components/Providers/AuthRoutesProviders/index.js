"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function AuthRoutesProviders({ children }) {
  const router = useRouter();

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

  if (!authState.token && isLogged !== null && !isLogged) return children;

  if (authState.token || isLogged) router.push("/chat");
}

export default AuthRoutesProviders;
