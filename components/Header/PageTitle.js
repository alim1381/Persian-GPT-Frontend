"use client";

import { pathToTitle } from "@/helper/pathToTitle";
import { usePathname } from "next/navigation";

function PageTitle() {
  const path = usePathname();
  return (
    <h1 className=" text-center text-white font-bold text-lg">
      {pathToTitle(path)}
    </h1>
  );
}

export default PageTitle;
