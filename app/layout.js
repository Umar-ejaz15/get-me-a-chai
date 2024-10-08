import localFont from "next/font/local";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./index.css";

export const metadata = {
  title: "Give Me a Chai",
  description:
    "Give me a chai is a platform where you can donate to the people who need it the most. We are a non-profit organization that helps people in need. We are a non-profit organization that helps people in need. We are a non-profit organization that helps people in need.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="text-white min-h-screen flex flex-col [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
          <Navbar />
          <main className="min-h-[calc(100vh-100px)] flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
