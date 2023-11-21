"use client";

import { Header } from "@/components/Header";
import { PrivateHeader } from "@/components/Header/PrivateHeader";
import { useSelector } from "react-redux";

function AppLayout({ children }) {
  const authData = useSelector((state) => state.authState);
  return (
    <>
      {authData.token ? <PrivateHeader /> : <Header />}
      {children}
    </>
  );
}

export default AppLayout;
