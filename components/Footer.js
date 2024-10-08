import React from "react";

const Footer = () => {
  return (
    <footer
      className="bg-gradient-to-r
     from-[#2D1669] via-zinc-950 to-[#2D1669] text-white py-4"
    >
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} Get Me A Chai. All rights reserved.</p>
        <div className="mt-2">
          <a href="#" className="mx-2 hover:text-gray-300">
            Privacy Policy
          </a>
          <a href="#" className="mx-2 hover:text-gray-300">
            Terms of Service
          </a>
          <a href="#" className="mx-2 hover:text-gray-300">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
