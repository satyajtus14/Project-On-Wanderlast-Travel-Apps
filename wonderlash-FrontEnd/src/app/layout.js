import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const josefinaSans = Josefin_Sans({
  subsets: ["latin"],
});



export const metadata = {
  title: "Wanderlast || Your Ultimate Travel Companion",
  description: "Your ultimate travel companion for exclusive deals and inspiration",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${josefinaSans.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main>
          {children}
        </main>
         <Footer />
        </body>
    </html>
  );
}
