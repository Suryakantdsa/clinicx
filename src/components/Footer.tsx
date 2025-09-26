"use client";
import { Stethoscope, MapPin, Phone, Mail, Clock, ArrowUp } from "lucide-react";
import React from "react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Qualifications", href: "#qualifications" },
    { name: "Success Stories", href: "#success" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      text: "OrthoSpine Clinic, Medical Complex",
      subtext: "Bhubaneswar, Odisha",
    },
    {
      icon: Phone,
      text: "+91 98765 43210",
      href: "tel:+919876543210",
    },
    {
      icon: Mail,
      text: "dr.gayadhar@orthospine.com",
      href: "mailto:dr.gayadhar@orthospine.com",
    },
    {
      icon: Clock,
      text: "Mon-Sat: 9:00 AM - 6:00 PM",
      subtext: "Emergency: 24/7 Available",
    },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-950 text-gray-300 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Animated Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-teal-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Stethoscope className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white bg-gradient-to-r from-white to-gray-300 bg-clip-text ">
                  Dr. Gayadhar Behera
                </h4>
                <p className="text-teal-400 font-semibold">
                  OrthoSpine Speciality Clinic
                </p>
              </div>
            </div>

            <p className="text-lg mb-4 text-orange-300 font-semibold flex items-center">
              <span className="w-2 h-2 bg-orange-400 rounded-full mr-2 animate-pulse"></span>
              🌟 Live Young, Live Healthy
            </p>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Senior Consultant Orthopaedics & Spine Surgery with expertise in
              advanced minimally invasive procedures, computer navigation, and
              endoscopic spine surgeries.
            </p>

            {/* Emergency Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full text-red-300">
              <div className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></div>
              Emergency Services Available 24/7
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-white font-bold text-lg mb-6 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-teal-500"></span>
            </h5>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="flex items-center text-gray-400 hover:text-teal-400 transition-all duration-300 group"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="text-white font-bold text-lg mb-6 relative inline-block">
              Contact Info
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-gradient-to-r from-teal-500 to-blue-500"></span>
            </h5>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <item.icon className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-gray-300 hover:text-teal-400 transition-colors block"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <span className="text-gray-300">{item.text}</span>
                    )}
                    {item.subtext && (
                      <p className="text-sm text-gray-500">{item.subtext}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © 2024 Dr. Gayadhar Behera OrthoSpine Clinic. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {["Facebook", "Twitter", "LinkedIn", "Instagram"].map(
                (social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-8 h-8 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 group"
                    aria-label={social}
                  >
                    <span className="text-xs font-semibold text-gray-400 group-hover:text-white">
                      {social[0]}
                    </span>
                  </a>
                )
              )}
            </div>

            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-gray-500 hover:text-teal-400 transition-colors group"
            >
              <span className="text-sm">Back to Top</span>
              <div className="w-8 h-8 bg-gray-800 hover:bg-teal-600 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                <ArrowUp className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
