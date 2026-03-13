import { Link } from "react-router-dom";
import { Instagram, Facebook, XIcon, Youtube, Mail, Phone, MapPin } from "lucide-react";

const socials = [
  { icon: Instagram, href: "https://www.instagram.com/kenseigroups/?hl=en" },
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61588258664284" },
  { icon: XIcon, href: "https://x.com/Kenseigroups" },
  { icon: Youtube, href: "https://www.youtube.com/@KenseiGroups" },
];

const FooterSection = () => (
  <footer className="bg-white py-10 border-t border-gray-200">

    <div className="container mx-auto px-6">

      {/* MAIN GRID */}
      <div className="grid lg:grid-cols-3 gap-10 items-start">

        {/* LEFT — LINKS */}
        <div>
  <h3 className="text-base font-semibold text-gray-800 mb-4 tracking-wide">
    Quick Links
  </h3>

  <div className="flex flex-col gap-3 text-gray-600 text-sm">

    <a href="#" className="hover:text-yellow-600 transition">
    Home
  </a>
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
      GameOfWar
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
      Optimus
    </a>

  </div>
</div>

        {/* CENTER — CONTACT */}
        <div>
          <h3 className="text-base font-semibold text-gray-800 mb-4 tracking-wide">
            Contact
          </h3>

          <div className="space-y-3 text-gray-600 text-sm">

            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-yellow-600" />
              <span>Chennai, Tamil Nadu, India</span>
            </div>

            <div className="flex items-center gap-2">
              <Phone size={14} className="text-yellow-600" />
              <span>+91 8 124 123 000</span>
            </div>

            <div className="flex items-center gap-2">
              <Mail size={14} className="text-yellow-600" />
              <span>info@kenseigroups.com</span>
            </div>

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

        {/* RIGHT — MAP */}
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
        © 2026 <span className="font-semibold text-yellow-600">Kensei Groups</span>. All rights reserved.
      </div>

    </div>
  </footer>
);

export default FooterSection;