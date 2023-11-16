import PrivateRoutesProviders from "@/components/Providers/PriveteRoutesProvider";
import { PrivateHeader } from "../../components/Header/PrivateHeader";
import { SideBar } from "@/components/Sidebar";
import PageTitle from "@/components/Header/PageTitle";

function PriveteRoutesLayout({ children }) {
  return (
    <PrivateRoutesProviders>
      <PrivateHeader />
      <section className=" flex gap-5 p-5 pt-0">
        <SideBar />
        <section className=" w-10/12 max-lg:w-full bg-gradient-to-b from-neutral-800 rounded-3xl h-[85vh] pt-3">
          <PageTitle />
          {children}
        </section>
      </section>
    </PrivateRoutesProviders>
  );
}

export default PriveteRoutesLayout;
