import { Link, useLocation, useNavigate } from "react-router-dom";
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";

const XOfficialLogo = ({ size = 14 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
      fill="currentColor"
    />
  </svg>
);

const socials = [
  { icon: Instagram, href: "https://www.instagram.com/kenseigroups/?hl=en" },
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61588258664284" },
  { icon: XOfficialLogo, href: "https://x.com/Kenseigroups" },
  { icon: Youtube, href: "https://www.youtube.com/@KenseiGroups" },
];

const FooterSection = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleHomeClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    navigate("/");
  };

  return (
    <footer className="bg-white py-10 border-t border-gray-200">
      <div className="container mx-auto px-6">
        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          {/* LEFT- LINKS */}
          <div>
            <h3 className="text-base font-semibold text-gray-800 mb-4 tracking-wide">
              Quick Links
            </h3>

            <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-gray-600 text-sm text-left">
              <button
                type="button"
                onClick={handleHomeClick}
                className="text-left hover:text-yellow-600 transition"
              >
                Home
              </button>

              <Link to="/about" className="hover:text-yellow-600 transition">
                About
              </Link>

              <Link to="/contact" className="hover:text-yellow-600 transition">
                Contact Us
              </Link>

              <a
                href="https://147-snooker.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-600 transition"
              >
                Snookers
              </a>

              <a
                href="https://147-snooker.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-600 transition"
              >
                Game Of War
              </a>

              <a
                href="https://www.dipanddash.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-600 transition"
              >
                Dip & Dash
              </a>

              <a
                href="https://www.optimusoverseasedu.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-600 transition"
              >
                Optimus Global
              </a>

              <a
                href="https://www.optimusglobalhr.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-600 transition"
              >
                Optimus Manpower
              </a>

              <a
                href="https://www.zoraglobalai.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-600 transition"
              >
                Zora
              </a>
            </div>
          </div>

          {/* CENTER- CONTACT */}
          <div>
            <h3 className="text-base font-semibold text-gray-800 mb-4 tracking-wide">
              Contact
            </h3>

          <div className="space-y-3 text-gray-600 text-sm">

            <a
              href="https://www.google.com/maps?sca_esv=483bff7be855fde4&rlz=1C1GCEA_enIN1020IN1020&output=search&q=zora+global+ai&source=lnms&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpaEWjvZ2Py1XXV8d8KvlI3ppPEReeCOS7s1VbbZz2TLt2sOibMbYx2XAHg-v8xM5VswWDsYo9WtqkvCRRg9-K9fJjsnjqytEoKTR4cUs6BEp5CqUJpkUZenO7_GJv-kXjXUHbDYKgguiqut1JwbRNkRFqw9i95SENYJAGcl8K0pwuMkOtbkrJ1I9-NNCyhQDP9i9JOg&entry=mc&ved=1t:200715&ictx=111"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 hover:text-yellow-400 transition-colors"
            >
              <MapPin size={14} className="text-yellow-600 mt-0.5 shrink-0" />
              <span>No:12,Gandhi Salai, <br />
              Srinivasa Nagar, Kandhanchavadi, <br />
              Perungudi,Chennai,<br />
              Tamil Nadu-600096</span>
            </a>

            <a
              href="tel:+918124123000"
              className="flex items-center gap-2 hover:text-yellow-400 transition-colors"
            >
              <Phone size={14} className="text-yellow-600" />
              <span>+91 8 124 123 000</span>
            </a>

            <a
              href="tel:+918124123000"
              className="flex items-center gap-2 hover:text-yellow-400 transition-colors"
            >
              <Phone size={14} className="text-yellow-600" />
              <span>+91-044-4625 4744 </span>
            </a>

              <a
                href="https://mail.google.com/mail/?view=cm&to=info@kenseifnbgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-yellow-400 transition-colors"
              >
                <Mail size={14} className="text-yellow-600" />
                <span>info@kenseifnbgroup.com</span>
              </a>
            </div>

            {/* SOCIALS */}
            <div className="flex gap-3 mt-4">
              {socials.map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-yellow-500 hover:text-white transition-all duration-300"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT- MAP */}
          <div>
            <h3 className="text-base font-semibold text-gray-800 mb-4 tracking-wide">
              Location
            </h3>

            <div className="rounded-lg overflow-hidden border border-gray-200">
              <iframe
                src="https://www.google.com/maps?q=Zora+Global+Ai+Technologies+Private+Limited&output=embed"
                loading="lazy"
                className="w-full h-36"
              ></iframe>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-8 text-center text-xs text-gray-500">
          Copyright 2026 <span className="font-semibold text-yellow-600">Kensei Groups</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
