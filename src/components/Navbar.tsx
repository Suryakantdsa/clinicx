"use client";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

import logo from "../../public/logo1.png"; // official logo

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav>
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/70 backdrop-blur-xl shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex justify-between items-center py-3 lg:py-4">
            {/* Logo + Doctor's Name */}
            <div className="flex items-center space-x-6">
              {/* Doctor's Name */}
              <div className="flex flex-col leading-snug text-center sm:text-left">
                <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#0077b6] drop-shadow-sm">
                  Dr. Gayadhar
                </span>
                <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#2cb34a] drop-shadow-sm">
                  Behera&apos;s
                </span>
              </div>

              {/* Logo */}
              <div className="flex items-center">
                <div className="w-40 h-18 overflow-hidden rounded-xl shadow-lg hover:scale-110 transition-transform border border-[#2cb34a]/50 bg-white flex items-center justify-center">
                  <Image
                    src={logo}
                    width={200}
                    height={80}
                    alt="OrthoSpine Clinic Logo"
                    className="object-contain w-full h-full"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center space-x-10">
              {[
                "About",
                "Services",
                "Qualifications",
                "Reviews",
                "Contact",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative text-gray-700 hover:text-[#0077b6] font-medium transition-colors group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#0077b6] transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              <button className="bg-gradient-to-r from-[#0077b6] to-[#2cb34a] text-white px-6 py-2.5 rounded-xl shadow-lg hover:shadow-xl hover:from-[#006699] hover:to-[#239a3c] transition-all transform hover:scale-110 font-semibold">
                Book Appointment
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-800" />
              ) : (
                <Menu className="w-6 h-6 text-gray-800" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/80 backdrop-blur-md border-t border-gray-200 shadow-lg">
            <div className="px-6 py-6 space-y-5">
              {[
                "About",
                "Services",
                "Qualifications",
                "Reviews",
                "Contact",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-gray-700 hover:text-[#0077b6] font-medium transition-colors"
                >
                  {item}
                </a>
              ))}
              <button className="w-full bg-gradient-to-r from-[#0077b6] to-[#2cb34a] text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:from-[#006699] hover:to-[#239a3c] transition-all transform hover:scale-105">
                Book Appointment
              </button>
            </div>
          </div>
        )}
      </header>
    </nav>
  );
};

export default Navbar;
