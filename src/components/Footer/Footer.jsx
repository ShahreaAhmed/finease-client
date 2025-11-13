import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from "../../assets/appLogo.png"; // apnar logo path

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-800 via-indigo-900 to-purple-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">
        {/* Logo & Website Name */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="FinEase Logo" className="w-12 h-12 object-contain" />
            <span className="text-2xl font-bold tracking-wide">FinEase</span>
          </div>
          <p className="text-gray-300 max-w-xs">
            Your personal finance management app to track income, expenses, and savings efficiently.
          </p>
        </div>

        {/* Contact Details */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Email: support@finease.com</li>
            <li>Phone: +880 1234 567 890</li>
            <li>Address: 123, Dhaka, Bangladesh</li>
          </ul>
        </div>

        {/* Terms & Conditions */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="/terms" className="hover:text-purple-400 transition-colors">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-purple-400 transition-colors">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-purple-700 rounded-full hover:bg-purple-500 transition-colors"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-purple-700 rounded-full hover:bg-purple-500 transition-colors"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-purple-700 rounded-full hover:bg-purple-500 transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-purple-700 rounded-full hover:bg-purple-500 transition-colors"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-12 border-t border-purple-700 pt-6 text-center text-gray-400">
        &copy; {new Date().getFullYear()} FinEase. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
