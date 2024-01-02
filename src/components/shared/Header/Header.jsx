import React from "react";

const Header = () => {
  return (
    <div>
      <header className="bg-green-200 container lg:px-32 flex justify-center text-black p-4 fixed top-0 z-50">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold font-sans shadow-lg  text-gray-800 ">Fresh Palate</div>
          <nav>
            <ul className="flex space-x-4 font-bold">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Menu
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
