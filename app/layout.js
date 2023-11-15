import { Inter, Vazirmatn } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/components/Provider";

const inter = Inter({ subsets: ["latin"] });
const vazirmatn = Vazirmatn({ subsets: ["arabic"] });

export const metadata = {
  title: "Persian Gpt",
  description: "Gpt",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={vazirmatn.className}>
        {/* <Header /> */}
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
