import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-100 py-8 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div className="space-y-4 text-center md:text-left">
          <img
            src="/mentalhealthicon.png"
            alt="Mental Health Icon"
            className="w-20 mx-auto md:mx-0"
          />
          <p className="text-gray-700">
            Accessible, Anonymous, Always Here. <br />
            Real strength lies in reaching out, asking for help, and taking
            control of your mental health journey.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedin].map(
              (Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-primary bg-gray-200 hover:bg-primary hover:text-white p-2 rounded-full"
                  aria-label={`Social Link ${index + 1}`}
                >
                  <Icon size={18} />
                </a>
              )
            )}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:underline text-gray-700">
                Home
              </a>
            </li>
            <li>
              <a href="#about-us" className="hover:underline text-gray-700">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="hover:underline text-gray-700">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline text-gray-700">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Support</h3>
          <ul className="space-y-2">
            {["FAQs", "Terms of Services", "Support Center"].map(
              (link, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:underline text-gray-700">
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
          <ul className="space-y-2">
            <li>200 Old Avenue, Greater London, UK</li>
            <li>+123 768 6398</li>
            <li>info@mentalhealth.co.uk</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
