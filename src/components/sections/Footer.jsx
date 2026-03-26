import React from "react";
import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const Footer = () => {
  return (
    <>
    <section>
      <footer className="bg-white text-black py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold text-red-500 mb-4">
                Gerobal Sushi
              </h3>
              <p className="text-gray-400">
                Pengalaman kuliner Jepang autentik dengan cita rasa terbaik
                sejak 2010.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4">Menu Cepat</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#home"
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    Beranda
                  </a>
                </li>
                <li>
                  <a
                    href="#menu"
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    Menu
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                  <span className="text-gray-400">
                    Jl. Sudirman No. 123, Jakarta Pusat
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-red-500 shrink-0" />
                  <span className="text-gray-400">+62 21 1234 5678</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-red-500 shrink-0" />
                  <span className="text-gray-400">info@gerobalsushi.com</span>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            {/* <div>
              <h4 className="font-bold mb-4">Ikuti Kami</h4>
              <div className="flex gap-4">
              </div>
            </div> */}
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Gerobal Sushi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </section>
    
    </>
  );
};

export default Footer;
