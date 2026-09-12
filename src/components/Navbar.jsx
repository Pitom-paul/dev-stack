import { useState } from "react";
import logoText from "../assets/logo-text.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "#" },
    { name: "Technologies", href: "#technologies" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">

        
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-gray-200 text-lg text-gray-700 lg:hidden"
          aria-label="Menu"
        >
          ☰
        </button>

        
        <a href="#" className="flex items-center">
          <img
            src={logoText}
            alt="DevStack"
            className="h-9 w-auto object-contain"
          />
        </a>

        
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-[15px] font-medium transition ${
                index === 0
                  ? "font-semibold text-pink-500"
                  : "text-gray-600 hover:text-pink-500"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

       
        <div className="flex items-center gap-5">
          <button className="text-[15px] font-medium text-gray-700 transition hover:text-pink-500">
            Sign In
          </button>

          <button className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 px-6 py-2.5 text-[14px] font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            Sign Up
          </button>
        </div>
      </div>

      
      {menuOpen && (
        <div className="border-t border-gray-100 bg-white px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`rounded-lg px-4 py-3 text-sm font-medium transition ${
                  index === 0
                    ? "bg-pink-50 font-semibold text-pink-500"
                    : "text-gray-600 hover:bg-gray-50 hover:text-pink-500"
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;