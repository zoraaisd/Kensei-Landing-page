import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import kenseiLogo from "@/assets/Kensei-logo.webp";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Snookers", href: "#snookers" },
  { label: "Dip & Dash", href: "#dipdash" },
  { label: "GameOfWar", href: "#gameofwar" },
  { label: "Contact", href: "/contact" },
];

const companyLinks = [
  { label: "Optimus", href: "#optimus" },
  { label: "Optimus Manpower", href: "#optimus-manpower" },
  { label: "Zora", href: "https://www.zoraglobalai.com/" },
];

const homeSectionGroups = [
  { href: "/", selector: "#home" },
  { href: "#snookers", selector: "#snookers" },
  { href: "#dipdash", selector: "#dipdash" },
  { href: "#gameofwar", selector: "#gameofwar" },
  { href: "#optimus", selector: "#optimus" },
  { href: "#optimus-manpower", selector: "#optimus-manpower" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [companiesOpen, setCompaniesOpen] = useState(false);
  const [active, setActive] = useState("/");
  const companiesRef = useRef<HTMLLIElement | null>(null);
  const navbarRef = useRef<HTMLElement | null>(null);

  const isExternalHref = (href: string) => href.startsWith("http");

  const scrollToSectionWithOffset = (section: Element) => {
    const navbarHeight = navbarRef.current?.offsetHeight ?? 72;
    const top = section.getBoundingClientRect().top + window.scrollY - navbarHeight - 16;

    window.scrollTo({
      top: Math.max(0, top),
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname !== "/") return;

      const marker = window.scrollY + 120;
      let currentSection = "/";

      for (const group of homeSectionGroups) {
        const section = document.querySelector(group.selector);
        if (!section) continue;

        const sectionTop =
          section.getBoundingClientRect().top + window.scrollY;

        if (marker >= sectionTop) {
          currentSection = group.href;
        } else {
          break;
        }
      }

      setActive(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    // Set active state based on current route
    if (location.pathname === "/about") {
      setActive("/about");
    } else if (location.pathname === "/contact") {
      setActive("/contact");
    } else if (location.pathname === "/") {
      setActive("/");
    }
    setCompaniesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!companiesOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (!companiesRef.current) return;
      if (!companiesRef.current.contains(event.target as Node)) {
        setCompaniesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [companiesOpen]);

  useEffect(() => {
    if (!mobileOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (!navbarRef.current) return;
      if (!navbarRef.current.contains(event.target as Node)) {
        setMobileOpen(false);
      }
    };

    const handleScroll = () => {
      setMobileOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mobileOpen]);

  const handleScrollTo = (href: string) => {
    if (isExternalHref(href)) {
      setMobileOpen(false);
      window.open(href, "_blank", "noopener,noreferrer");
      return;
    }

    if (href.startsWith("/")) {
      if (location.pathname === href) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate(href);
      }
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
          scrollToSectionWithOffset(section);
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
        scrollToSectionWithOffset(section);
      }, 420);
    } else {
      scrollToSectionWithOffset(section);
    }
  };

  return (
    <motion.nav
      ref={navbarRef}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b border-blue-800"
    >
      <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-2 min-h-[60px]">

        {/* LOGO */}
        <button onClick={() => handleScrollTo("#home")} className="shrink-0">
          <img
            src={kenseiLogo}
            alt="Kensei"
            className="w-24"
          />
        </button>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex flex-1 items-center justify-end gap-3 xl:gap-6 min-w-0">

          <ul className="flex items-center justify-end gap-1 xl:gap-3 min-w-0">
            {navLinks.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => handleScrollTo(link.href)}
                  className={`
          relative whitespace-nowrap text-xs xl:text-sm font-semibold tracking-wide px-2.5 xl:px-4 py-2 rounded-md
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

            <li ref={companiesRef} className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setCompaniesOpen((prev) => !prev);
                }}
                className={`
          relative whitespace-nowrap text-xs xl:text-sm font-semibold tracking-wide px-2.5 xl:px-4 py-2 rounded-md
          transition-all duration-300
          ${companyLinks.some((link) => active === link.href)
                    ? "bg-gradient-to-r from-yellow-400 to-yellow-600 text-white shadow-md"
                    : "text-blue-800 hover:text-yellow-600 hover:-translate-y-1 hover:drop-shadow-[0_0_6px_rgba(255,215,0,0.6)]"
                  }
        `}
                aria-haspopup="menu"
                aria-expanded={companiesOpen}
              >
                Companies
              </button>

              <AnimatePresence>
                {companiesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-3 min-w-[220px] rounded-xl border border-blue-100 bg-white shadow-lg"
                  >
                    <ul className="flex flex-col py-2">
                      {companyLinks.map((link) => (
                        <li key={link.label}>
                          <button
                            onClick={() => {
                              setCompaniesOpen(false);
                              handleScrollTo(link.href);
                            }}
                            className={`flex w-full items-center px-4 py-2 text-sm font-medium transition
                              ${active === link.href
                                ? "text-yellow-700"
                                : "text-blue-800 hover:bg-yellow-50 hover:text-yellow-700"
                              }`}
                          >
                            {link.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          </ul>

          <li className="shrink-0">
            <a
              href="https://147-snooker.netlify.app/booking"
              target="_blank"
              rel="noopener noreferrer"
              className="relative whitespace-nowrap text-xs xl:text-sm font-semibold tracking-wide px-3 xl:px-4 py-2 rounded-md
                         transition-all duration-300
                         bg-blue-900 text-white hover:bg-blue-800 hover:drop-shadow-[0_0_8px_rgba(255,215,0,0.4)]"
            >
              Book a Slot
            </a>
          </li>

        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-blue-900"
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
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <ul className="flex flex-col items-stretch gap-2 py-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleScrollTo(link.href)}
                    className={`w-full px-6 py-2 text-left text-sm font-semibold tracking-wide
                      ${active === link.href ? "text-blue-900" : "text-blue-800 hover:text-blue-900"}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}

              <li key="companies-mobile">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setCompaniesOpen((prev) => !prev);
                  }}
                  className={`w-full px-6 py-2 text-left text-sm font-semibold tracking-wide flex items-center justify-between
                    ${active === companyLinks[0]?.href ? "text-blue-900" : "text-blue-800 hover:text-blue-900"}`}
                >
                  Companies
                  <span className="text-blue-600">{companiesOpen ? "-" : "+"}</span>
                </button>
                <AnimatePresence> 
                  {companiesOpen && (
                    <motion.ul
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col overflow-hidden"
                    >
                      {companyLinks.map((link) => (
                        <li key={link.label}>
                          <button
                            onClick={() => {
                              setCompaniesOpen(false);
                              handleScrollTo(link.href);
                            }}
                            className={`w-full px-12 py-2 text-left text-sm font-medium transition
                              ${active === link.href
                                ? "text-yellow-700 bg-blue-50"
                                : "text-blue-800 hover:bg-blue-50 hover:text-yellow-700"
                              }`}
                          >
                            {link.label}
                          </button>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>

              <li key="book-slot-mobile">
                <div className="px-6 pt-2">
                  <a
                    href="https://147-snooker.netlify.app/booking"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full rounded-md bg-blue-900 px-6 py-3 text-center text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:bg-blue-800"
                  >
                    Book a Slot
                  </a>
                </div>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;


