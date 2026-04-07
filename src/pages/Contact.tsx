import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const response = await fetch("https://formspree.io/f/mnjgvklw", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setSuccess(true);
      e.target.reset();

      setTimeout(() => {
        setSuccess(false);
      }, 4000);
    }
  };

  return (
    <div className="bg-black text-white overflow-hidden">
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative py-28 bg-gradient-to-b from-black via-blue-950 to-black text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.08),transparent_70%)]" />

        <motion.h1
          className="relative text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          Contact <span className="text-yellow-400">Us</span>
        </motion.h1>

        <p className="relative max-w-3xl mx-auto text-gray-400 text-lg leading-relaxed px-6">
          Reach out to Kensei Groups for partnerships, bookings, or general
          inquiries. We are here to help.
        </p>
      </section>

      {/* ================= CONTACT LAYOUT ================= */}
      <section className="pb-28 container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-[1.1fr_1.4fr] gap-8 lg:gap-10 items-stretch">
          <div className="bg-blue-900/10 border border-yellow-400/20 rounded-3xl p-6 sm:p-8 lg:p-10">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">
              Get in Touch
            </h2>
            <p className="text-gray-400 leading-relaxed mb-10">
              Have a question or a partnership idea? Reach us directly and we
              will get back to you quickly.
            </p>

            <div className="space-y-6">
              <a
                href="https://www.google.com/maps?sca_esv=483bff7be855fde4&rlz=1C1GCEA_enIN1020IN1020&output=search&q=zora+global+ai&source=lnms&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpaEWjvZ2Py1XXV8d8KvlI3ppPEReeCOS7s1VbbZz2TLt2sOibMbYx2XAHg-v8xM5VswWDsYo9WtqkvCRRg9-K9fJjsnjqytEoKTR4cUs6BEp5CqUJpkUZenO7_GJv-kXjXUHbDYKgguiqut1JwbRNkRFqw9i95SENYJAGcl8K0pwuMkOtbkrJ1I9-NNCyhQDP9i9JOg&entry=mc&ved=1t:200715&ictx=111"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 rounded-2xl transition-colors hover:text-yellow-400"
              >
                <div className="h-12 w-12 rounded-2xl bg-blue-900/30 border border-yellow-400/20 flex items-center justify-center">
                  <MapPin className="text-yellow-400" size={22} />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold">Location</h3>
                  <p className="text-gray-400">Chennai, Tamil Nadu, India</p>
                </div>
              </a>

              <a
                href="tel:+918124123000"
                className="flex items-start gap-4 rounded-2xl transition-colors hover:text-yellow-400"
              >
                <div className="h-12 w-12 rounded-2xl bg-blue-900/30 border border-yellow-400/20 flex items-center justify-center">
                  <Phone className="text-yellow-400" size={22} />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold">Contact</h3>
                  <p className="text-gray-400">+91 81241 23000</p>
                </div>
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&to=info@kenseifnbgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 rounded-2xl transition-colors hover:text-yellow-400"
              >
                <div className="h-12 w-12 rounded-2xl bg-blue-900/30 border border-yellow-400/20 flex items-center justify-center">
                  <Mail className="text-yellow-400" size={22} />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-gray-400">info@kenseifnbgroup.com</p>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-blue-900/20 p-6 sm:p-8 lg:p-10 rounded-3xl border border-yellow-400/20">
            <h2 className="text-3xl font-bold mb-8 text-yellow-400">
              Send Us a Message
            </h2>

            {success && (
              <p className="text-green-400 mb-6 font-semibold">
                Success! Our team will contact you soon.
              </p>
            )}

            <form
              onSubmit={handleSubmit}
              className="grid md:grid-cols-2 gap-6"
            >
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="bg-black/60 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-yellow-400"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="bg-black/60 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-yellow-400"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="bg-black/60 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-yellow-400 md:col-span-2"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows={6}
                required
                className="bg-black/60 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-yellow-400 md:col-span-2"
              />

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-lg text-sm font-semibold
                             bg-blue-900 text-white
                             hover:bg-blue-800
                             hover:shadow-[0_0_15px_rgba(255,215,0,0.6)]
                             transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default ContactPage;
