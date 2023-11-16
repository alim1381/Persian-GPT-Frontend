import React from "react";
import { Header } from "@/components/Header";

function PublicLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default PublicLayout;
