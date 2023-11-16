"use client";

import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

function AuthRoutesProviders({ children }) {
  const router = useRouter();

  const authState = useSelector((state) => state.authState);
  const localStorageToken = localStorage.getItem("token");
  const isLogged = localStorageToken ? true : false;

  if (!authState.token && !isLogged) return children;

  if (authState.token || isLogged) router.push("/chat");
}

export default AuthRoutesProviders;
