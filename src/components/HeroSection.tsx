"use client";
import { Calendar, Star, Award, Shield, Zap } from "lucide-react";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import DrImage from "../../public/dr_image.png";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    {
      value: "15+",
      label: "Years Experience",
      color: "text-blue-600",
      icon: Award,
    },
    {
      value: "5000+",
      label: "Surgeries",
      color: "text-teal-600",
      icon: Zap,
    },
    {
      value: "98%",
      label: "Success Rate",
      color: "text-purple-600",
      icon: Shield,
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 min-h-screen flex items-center overflow-hidden">
      {/* Enhanced Background with Gradient Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100/30 via-transparent to-teal-100/20"></div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px),
                           linear-gradient(to bottom, #000 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Floating Animated Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-6 h-6 bg-blue-400 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-4 h-4 bg-teal-400 rounded-full opacity-30 animate-float delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-8 h-8 bg-purple-400 rounded-full opacity-15 animate-float delay-500"></div>
        <div className="absolute bottom-20 right-32 w-3 h-3 bg-orange-400 rounded-full opacity-25 animate-float delay-1500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* LEFT CONTENT */}
          <div
            className={`space-y-8 transition-all duration-1000 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            {/* Enhanced Tagline Badge */}
            <div className="inline-flex items-center px-4 py-3 bg-gradient-to-r from-blue-100/80 to-teal-100/80 text-blue-900 rounded-2xl text-sm font-semibold shadow-lg border border-blue-200/50 backdrop-blur-sm">
              <div className="relative">
                <Star className="w-5 h-5 mr-2 fill-current text-yellow-500 animate-pulse" />
              </div>
              Senior Consultant Orthopaedics & Spine Surgery
              <div className="ml-2 w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
            </div>

            {/* Enhanced Headings with Stagger Animation */}
            <div className="space-y-2">
              <div
                className={`transition-all duration-700 delay-200 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                <h1 className="text-5xl lg:text-7xl font-black text-gray-900 mb-2 leading-tight">
                  Dr.{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-600 to-purple-600 animate-gradient-x">
                    Gayadhar
                  </span>
                </h1>
              </div>

              <div
                className={`transition-all duration-700 delay-300 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                <h2 className="text-4xl lg:text-5xl font-black text-gray-800 mb-4 tracking-tight bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text">
                  Behera
                </h2>
              </div>

              {/* Enhanced Motto Highlight */}
              <div
                className={`bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white px-6 py-3 rounded-2xl inline-block shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                <p className="text-sm font-bold flex items-center">
                  <span className="mr-1">🌟</span>
                  Live Young, Live Healthy
                </p>
              </div>

              {/* Enhanced Description */}
              <div
                className={`transition-all duration-700 delay-500 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                <p className="text-lg lg:text-xl text-gray-700 mb-8 leading-relaxed max-w-xl">
                  Expert in advanced orthopaedic and spine surgical procedures
                  with specialized training in{" "}
                  <span className="relative inline-block">
                    <span className="text-blue-600 font-semibold relative z-10">
                      computer navigation
                    </span>
                    <span className="absolute bottom-0 left-0 w-full h-2 bg-blue-200/40 -rotate-1 -z-0"></span>
                  </span>
                  ,{" "}
                  <span className="relative inline-block">
                    <span className="text-teal-600 font-semibold relative z-10">
                      minimally invasive techniques
                    </span>
                    <span className="absolute bottom-0 left-0 w-full h-2 bg-teal-200/40 -rotate-1 -z-0"></span>
                  </span>{" "}
                  &{" "}
                  <span className="relative inline-block">
                    <span className="text-purple-600 font-semibold relative z-10">
                      endoscopic spine surgery
                    </span>
                    <span className="absolute bottom-0 left-0 w-full h-2 bg-purple-200/40 rotate-1 -z-0"></span>
                  </span>
                  .
                </p>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 -mt-5 transition-all duration-700 delay-600 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <button className="group relative bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 font-semibold shadow-2xl hover:shadow-3xl flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <Calendar className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                Schedule Consultation
              </button>

              <button className="group relative border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-blue-600 hover:text-white hover:shadow-2xl overflow-hidden">
                <span className="relative z-10">View Qualifications</span>
                <div className="absolute inset-0 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </button>
            </div>

            {/* Enhanced Stats with Icons */}
            <div
              className={`grid grid-cols-3 gap-4 pt-8 transition-all duration-700 delay-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="group bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center border border-white/50 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <stat.icon
                      className={`w-8 h-8 mx-auto mb-2 ${stat.color} group-hover:scale-110 transition-transform duration-300`}
                    />
                    <div className={`text-2xl font-black ${stat.color} mb-1`}>
                      {stat.value}
                    </div>
                    <div className="text-xs font-medium text-gray-600 uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced RIGHT IMAGE */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="relative w-full h-80 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group -mt-56">
              {/* Main Image Container */}
              <div className="relative w-full h-full ">
                <Image
                  src={DrImage}
                  fill
                  alt="Dr. Gayadhar Behera - Orthopaedic Surgeon"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Enhanced Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-blue-900/10"></div>
              </div>

              {/* Enhanced Bottom Card */}
              <div className="absolute bottom-6 left-6 right-6 transform group-hover:translate-y-0 transition-transform duration-500">
                <div className="bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-white/50">
                  <p className="text-sm font-bold text-gray-800 mb-1">
                    🏆 Professional Medical Excellence
                  </p>
                  <p className="text-xs text-gray-600 font-medium">
                    Advanced Surgical Expertise & Patient Care
                  </p>
                </div>
              </div>

              {/* Floating Certification Badge */}
              <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-2xl animate-bounce-slow">
                <Award className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Enhanced Decorative Elements */}
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full opacity-20 blur-2xl animate-pulse"></div>
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full opacity-20 blur-2xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 -left-12 w-24 h-24 border-4 border-blue-300 rounded-full opacity-30 animate-spin-slow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
