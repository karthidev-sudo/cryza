import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; // Import Link and useLocation
import { Menu, X, ArrowRight, ChevronRight } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation(); // Useful if you want to style active links

  // Handle Scroll Effect for "Island" look
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileOpen]);

  const handleLinkClick = () => {
    setIsMobileOpen(false);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Work", path: "/work" },
    { name: "About", path: "/about" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled ? "py-4" : "py-6"
        }`}
      >
        <nav
          className={`flex items-center justify-between px-6 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isScrolled
              ? "w-[90%] md:w-[85%] lg:w-[1200px] bg-neutral-900/40 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.2)] rounded-full h-16"
              : "w-full px-8 md:px-12 bg-transparent border-transparent h-20"
          }`}
        >
          {/* LOGO */}
          <Link
            to="/"
            onClick={handleLinkClick}
            className="relative z-50 flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center overflow-hidden">
              <div className="w-full h-full bg-neutral-950 rotate-45 translate-y-[50%] group-hover:translate-y-[40%] transition-transform duration-500"></div>
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              CRYZA
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={handleLinkClick}
                className={`relative text-sm font-medium transition-colors duration-300 group ${
                  location.pathname === link.path
                    ? "text-white"
                    : "text-neutral-300 hover:text-white"
                }`}
              >
                {link.name}
                {/* Hover/Active Dot Animation */}
                <span
                  className={`absolute -bottom-4 left-1/2 w-1 h-1 bg-white rounded-full -translate-x-1/2 transition-all duration-300 ease-out ${
                    location.pathname === link.path
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
                  }`}
                ></span>
              </Link>
            ))}
          </div>

          {/* CTA & MOBILE TOGGLE */}
          <div className="flex items-center gap-4">
            {/* CTA Button */}
            <Link
              to="/contact"
              onClick={handleLinkClick}
              className="hidden md:flex items-center gap-2 bg-white text-black px-6 py-2 rounded-full text-sm font-bold tracking-tight hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 group"
            >
              Start Project
              <ArrowRight className="w-4 h-4 group-hover:-rotate-45 transition-transform duration-300" />
            </Link>

            {/* Hamburger / Close Icon */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="relative z-50 md:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors"
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* MOBILE OVERLAY */}
      <div
        className={`fixed inset-0 z-40 flex flex-col justify-center px-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] backdrop-blur-3xl bg-neutral-950/80 ${
          isMobileOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-8 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-6 relative z-10">
          <span className="text-neutral-500 text-xs tracking-[0.2em] uppercase mb-4">
            Navigation
          </span>

          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={handleLinkClick}
              className={`group flex items-center justify-between text-5xl font-bold tracking-tighter transition-all duration-300 ${
                location.pathname === link.path
                  ? "text-white"
                  : "text-neutral-300 hover:text-white"
              }`}
              style={{
                transitionDelay: isMobileOpen ? `${index * 50}ms` : "0ms",
                opacity: isMobileOpen ? 1 : 0,
                transform: isMobileOpen ? "translateY(0)" : "translateY(20px)",
              }}
            >
              {link.name}
              <ChevronRight
                className={`w-8 h-8 transition-all duration-300 text-indigo-400 ${
                  location.pathname === link.path
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0"
                }`}
              />
            </Link>
          ))}

          <Link
            to="/contact"
            onClick={handleLinkClick}
            className="mt-8 text-5xl font-bold text-white tracking-tighter flex items-center gap-4 group"
            style={{
              transitionDelay: isMobileOpen ? `250ms` : "0ms",
              opacity: isMobileOpen ? 1 : 0,
              transform: isMobileOpen ? "translateY(0)" : "translateY(20px)",
            }}
          >
            Let's Talk
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <ArrowRight className="w-6 h-6 text-black -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
            </div>
          </Link>
        </div>

        <div className="absolute bottom-12 left-8 right-8 flex justify-between text-neutral-500 text-xs uppercase tracking-widest border-t border-white/10 pt-6">
          <span>Based in San Francisco</span>
          <span>&copy; 2024 Cryza.</span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
