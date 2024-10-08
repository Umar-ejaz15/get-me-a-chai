import React from "react";
import Link from "next/link";
import Button1 from "./Button1";
import Button2 from "./Button2";

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Get Me A Chai
        </Link>
        <ul className="flex justify-center items-center space-x-4">
          <li>
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-gray-300">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/signup" className="hover:text-gray-300">
              <Button1 text="Sign Up" />
            </Link>
          </li>
          <li>
            <Link href="/login" className="hover:text-gray-300">
              <Button2 text="Login" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
