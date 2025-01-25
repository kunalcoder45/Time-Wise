import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);
  const panelRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
    if (!isOpen) {
      buttonRef.current.focus();
    }
  };

  const closeDropdown = (focusAfter) => {
    if (!isOpen) return;
    setIsOpen(false);
    focusAfter && focusAfter.focus();
  };

  useEffect(() => {
    // Animate the navbar to slide down from the top on page load
    gsap.fromTo(
      "nav",
      { y: "-100%", opacity: 0 },
      { y: "0%", opacity: 1, duration: 1, ease: "power2.out" }
    );
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-20 shadow-lg ${
          isOpen ? "bg-white" : "bg-white/80"
        } transition-colors duration-300`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="text-xl font-bold font-Inter text-gray-800" style={{ textDecoration: "none" }}>
                TimeWise
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              <Link
                to="/"
                className="text-gray-700 hover:text-black hover:font-bold transition-all duration-300 px-3 py-2 text-sm font-medium font-Mono" style={{ textDecoration: "none" }}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-black hover:font-bold transition-all duration-300 px-3 py-2 text-sm font-medium font-Mono" style={{ textDecoration: "none" }}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-black hover:font-bold transition-all duration-300 px-3 py-2 text-sm font-medium font-Mono" style={{ textDecoration: "none" }}
              >
                Contact
              </Link>
              <Link
                to="/register"
                className="text-blue-500 hover:bg-blue-500 hover:text-white hover:font-bold transition-all duration-300 px-3 py-2 text-sm font-medium outline rounded-none outline-blue-500 outline-1 font-Mono" style={{ textDecoration: "none" }}
              >
                Get Started
              </Link>
              <Link
                to="/vendor-login"
                className="bg-blue-500 text-white px-4 py-2 rounded-none text-sm font-medium transition-all duration-300 ease-in-out hover:bg-white hover:outline hover:outline-2 hover:outline-bule-500 hover:text-blue-500 font-Mono"
                style={{ textDecoration: "none" }}
              >
                Vendor Login
              </Link>
              {/* Dropdown Component */}
              <div className="relative inline-block">
                <button
                  onClick={toggleDropdown}
                  aria-expanded={isOpen}
                  aria-controls="dropdown-button"
                  type="button"
                  ref={buttonRef}
                  className="flex items-center"
                >
                  <div className="relative h-10 w-10">
                    <img className="h-full w-full rounded-full object-cover object-center ring ring-white" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                  </div>
                </button>
                {isOpen && (
                  <div
                    ref={panelRef}
                    className="absolute right-0 z-10 mt-3 w-60 divide-y divide-gray-100 rounded-lg border border-gray-100 bg-white text-left text-sm shadow-lg"
                    id="dropdown-button"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent click from bubbling up to the mobile menu
                      closeDropdown(buttonRef.current);
                    }} // Close on click
                  >
                    {/* Dropdown content */}
                    <div className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className="relative h-10 w-10">
                          <img className="h-full w-full rounded-full object-cover object-center ring ring-white" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                        </div>
                        <div className="text-sm">
                          <div className="font-medium text-gray-700">Steven Jobs</div>
                          <div className="text-gray-400">jobs@sailboatui.com</div>
                        </div>
                      </div>
                    </div>
                    <div className="z-<999>">
                      <Link to="/profile" className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100"
                      style={{textDecoration: "none"}}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                        View profile
                      </Link>
                      <Link to="/settings" className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                      style={{textDecoration: "none"}}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Settings
                      </Link>
                      <Link to="/download" className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                      style={{textDecoration: "none"}}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                        </svg>
                        Download
                      </Link>
                    </div>
                    <div className="p-1">
                      <Link to="/help" className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100"
                      style={{textDecoration: "none"}}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                        </svg>
                        Help Center
                      </Link>
                      <Link to="/changelog" className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                      style={{textDecoration: "none"}}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                        </svg>
                        Changelog
                      </Link>
                      <Link to="/api" className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                      style={{textDecoration: "none"}}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                        </svg>
                        API
                      </Link>
                    </div>
                    <div className="p-1">
                      <Link to="/logout" className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-gray-700 hover:bg-customRed hover:text-white"
                      style={{textDecoration: "none"}}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                        </svg>
                        Log out
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              {/* End of Dropdown Component */}
            </div>

            {/* Hamburger Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="relative w-10 h-10 flex items-center justify-center rounded-md text-gray-700 hover:text-gray-900"
                aria-label="Toggle Menu"
              >
                <div className="w-6 h-5 relative flex items-center justify-center">
                  <span
                    className={`absolute h-0.5 w-6 bg-gray-700 transform transition-all duration-300 ease-in-out ${
                      isOpen ? "rotate-45" : "-translate-y-2"
                    }`}
                  />
                  <span
                    className={`absolute h-0.5 w-6 bg-gray-700 transform transition-all duration-300 ease-in-out ${
                      isOpen ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <span
                    className={`absolute h-0.5 w-6 bg-gray-700 transform transition-all duration-300 ease-in-out ${
                      isOpen ? "-rotate-45" : "translate-y-2"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-10 transition-opacity duration-300"
          onClick={toggleMenu} // Close menu on overlay click
        />
      )}

      {/* Mobile Menu Content */}
      <div
        className={`fixed left-0 right-0 top-16 bg-white shadow-lg z-40 transition-all duration-300 ease-in-out ${isOpen ? "block" : "hidden"} md:hidden`}
      >
        <div className="py-6 space-y-3">
          <Link to="/" className="block px-4 py-2 text-gray-700 font-Mono" onClick={toggleMenu} style={{ textDecoration: "none" }}>
            Home
          </Link>
          <Link to="/about" className="block px-4 py-2 text-gray-700 font-Mono" onClick={toggleMenu} style={{ textDecoration: "none" }}>
            About
          </Link>
          <Link to="/contact" className="block px-4 py-2 text-gray-700 font-Mono" onClick={toggleMenu} style={{ textDecoration: "none" }}>
            Contact
          </Link>
          <Link to="/register" className="block px-4 py-2 text-gray-700 font-Mono" onClick={toggleMenu} style={{ textDecoration: "none" }}>
            Sign Up
          </Link>
          <Link to="/vendor-login" className="block w-11/12 py-2 text-center bg-blue-500 text-white rounded-full mx-auto font-Mono" onClick={toggleMenu} style={{ textDecoration: "none" }}>
            Vendor Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
