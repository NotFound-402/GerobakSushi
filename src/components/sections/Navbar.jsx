import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
        <header className="fixed inset-x-0 top-0 z-50 bg-white/70 backdrop-blur-md shadow-sm">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="md:flex md:items-center md:gap-12">
                <a className="block" href="#">
                  <span className="sr-only">Home</span>     
                   <img src="/Gerobaksushi.svg" alt="Logo" className="h-15 rounded-4xl w-auto" />
                </a>
              </div>

              <div className="hidden md:block">
                <nav aria-label="Global">
                  <ul className="flex items-center gap-6 text-m font-bold">
                    <li>
                      <a
                        className="text-gray-800 transition hover:text-red-500/75"
                        href="#"
                      >
                        Home
                      </a>
                    </li>

                    <li>
                      <a
                        className="text-gray-800 transition hover:text-red-500/75"
                        href="#menu"
                      >
                        Menu
                      </a>
                    </li>

                    <li>
                      <a
                        className="text-gray-800 transition hover:text-red-500/75"
                        href="#about"
                      >
                        About Us
                      </a>
                    </li>

                    <li>
                      <a
                        className="text-gray-800 transition hover:text-red-500/75"
                        href="#contact"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              {/* // Mobile Nav*/}
              <div className={`${isOpen ? "block" : "hidden"} md:hidden absolute top-16 left-0 right-0 bg-white/80 backdrop-blur-md shadow-md`}>
                <nav aria-label="Global">
                  <ul className="flex flex-col items-start gap-4 text-m font-bold p-4 bg-transparent">
                    <li>
                      <a
                        className="text-gray-800 transition hover:text-red-500/75"
                        href="#"
                        onClick={() => setIsOpen(false)}
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-800 transition hover:text-red-500/75"
                        href="#menu"
                        onClick={() => setIsOpen(false)}
                      >
                        Menu
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-800 transition hover:text-red-500/75"
                        href="#about"
                        onClick={() => setIsOpen(false)}
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-800 transition hover:text-red-500/75"
                        href="#contact"
                        onClick={() => setIsOpen(false)}
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                  <a
                    className="rounded-3xl bg-red-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm"
                    href="#"
                  >
                    Cart
                  </a>
                </div>

                <div className="block md:hidden">
                  <button 
                    onClick={toggleMenu}
                    className="rounded-sm bg-gray-100 p-2 text-gray-700 transition hover:text-gray-600/75">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>
    </div>
  );
};

export default Navbar;
