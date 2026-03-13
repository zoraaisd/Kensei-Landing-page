import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import kenseiLogo from "@/assets/Kensei-logo.webp";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Snookers", href: "#snookers" },
  { label: "GameOfWar", href: "#gameofwar" },
  { label: "Dip & Dash", href: "#dipdash" },
  { label: "Optimus", href: "#optimus" },
  { label: "Zora", href: "https://www.zoraglobalai.com/" },
  { label: "Contact", href: "/contact" },
  
];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("#home");

  const isExternalHref = (href: string) => href.startsWith("http");
  const isSectionHref = (href: string) => href.startsWith("#");

  useEffect(() => {
    const handleScroll = () => {
      navLinks.forEach((link) => {
        if (!isSectionHref(link.href)) return;
        const section = document.querySelector(link.href);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(link.href);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Set active state based on current route
    if (location.pathname === "/about") {
      setActive("#about");
    } else if (location.pathname === "/contact") {
      setActive("/contact");
    } else if (location.pathname === "/") {
      setActive("#home");
    }
  }, [location.pathname]);

  const handleScrollTo = (href: string) => {
    if (isExternalHref(href)) {
      setMobileOpen(false);
      window.open(href, "_blank", "noopener,noreferrer");
      return;
    }
    if (href.startsWith("/")) {
      navigate(href);
      setMobileOpen(false);
      return;
    }
    // If About link, navigate to about page
    if (href === "#about") {
      navigate("/about");
      setMobileOpen(false);
      return;
    }

    // If not on home page, navigate to home first
    if (location.pathname !== "/") {
      navigate("/");
      setMobileOpen(false);
      // Wait for navigation and page load, then scroll
      setTimeout(() => {
        const section = document.querySelector(href);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
      return;
    }

    // If already on home page, just scroll
    const section = document.querySelector(href);
    if (!section) return;

    if (mobileOpen) {
      setMobileOpen(false);
      setTimeout(() => {
        section.scrollIntoView({ behavior: "smooth" });
      }, 420);
    } else {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b border-blue-800"
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-2 min-h-[60px]">

        {/* LOGO */}
        <button onClick={() => handleScrollTo("#home")}>
          <img
            src={kenseiLogo}
            alt="Kensei"
            className="w-24"
          />
        </button>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-6">

          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => handleScrollTo(link.href)}
                  className={`
          relative text-sm font-semibold tracking-wide px-4 py-2 rounded-md
          transition-all duration-300

          ${active === link.href
                      ? "bg-gradient-to-r from-yellow-400 to-yellow-600 text-white shadow-md"
                      : "text-blue-800 hover:text-yellow-600 hover:-translate-y-1 hover:drop-shadow-[0_0_6px_rgba(255,215,0,0.6)]"
                    }
        `}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* BOOK A SLOT BUTTON */}
          <motion.a
            href="https://147-snooker.netlify.app/booking"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="ml-4 px-5 py-2 rounded-lg text-sm font-semibold
                       bg-blue-900 text-white
                       shadow-md
                       hover:bg-blue-800
                       hover:shadow-[0_0_15px_rgba(255,215,0,0.6)]
                       transition-all duration-300"
          >
            Book a Slot
          </motion.a>

        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-blue-900"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <ul className="flex flex-col items-center gap-4 py-6">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleScrollTo(link.href)}
                    className={`text-base font-medium
                      ${active === link.href ? "text-blue-900" : "text-blue-800 hover:text-blue-900"}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}

              {/* MOBILE BOOK BUTTON */}
              <motion.a
                href=""
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 px-6 py-2 rounded-lg text-sm font-semibold
                           bg-blue-900 text-white
                           hover:bg-blue-800
                           hover:shadow-[0_0_15px_rgba(255,215,0,0.6)]
                           transition-all duration-300"
              >
                Book a Slot
              </motion.a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
