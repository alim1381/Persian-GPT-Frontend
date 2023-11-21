import PrivateRoutesProviders from "@/components/Providers/PriveteRoutesProvider";
import { SideBar } from "@/components/Sidebar";
import PageTitle from "@/components/Header/PageTitle";
import HambergerMenu from "@/components/HambergerMenu";

function PriveteRoutesLayout({ children }) {
  return (
    <PrivateRoutesProviders>
      <section className=" flex gap-5 p-5 pt-0 mx-auto max-w-screen-2xl">
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
