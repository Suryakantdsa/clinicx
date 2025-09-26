"use client";
import {
  Award,
  GraduationCap,
  Heart,
  Stethoscope,
  Target,
  Zap,
  Sparkles,
  ArrowRight,
  Play,
} from "lucide-react";
import React, { useState } from "react";
import DrImage from "../../public/dr_image.png";
import Image from "next/image";

const About = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const features = [
    {
      icon: Target,
      title: "Precision Surgery",
      description:
        "Computer navigation and advanced imaging for precise surgical planning and execution with minimal invasive approach.",
      image:
        "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg",
      color: "from-blue-50 to-blue-100",
      iconColor: "bg-blue-600",
      gradient: "from-blue-600 to-blue-700",
    },
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description:
        "Personalized treatment plans focused on helping patients achieve optimal health and maintain an active lifestyle.",
      image:
        "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg",
      color: "from-teal-50 to-teal-100",
      iconColor: "bg-teal-600",
      gradient: "from-teal-600 to-teal-700",
    },
    {
      icon: Zap,
      title: "Innovation & Research",
      description:
        "Continuous learning and adoption of latest surgical techniques from international training programs and fellowships.",
      image:
        "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg",
      color: "from-purple-50 to-purple-100",
      iconColor: "bg-purple-600",
      gradient: "from-purple-600 to-purple-700",
    },
  ];

  const achievements = [
    { icon: Award, text: "Gold Medal recipient from JIPMER" },
    { icon: GraduationCap, text: "International fellowship training" },
    { icon: Stethoscope, text: "5000+ successful surgeries" },
    { icon: Zap, text: "Minimally invasive techniques specialist" },
  ];

  return (
    <section
      id="about"
      className="relative py-20 bg-gradient-to-br from-white via-blue-50/30 to-teal-50/30 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            About The Doctor
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Meet{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
              Dr. Gayadhar Behera
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A distinguished orthopaedic and spine surgeon dedicated to helping
            patients
            <span className="font-semibold text-blue-600">
              {" "}
              live young and live healthy{" "}
            </span>
            through advanced medical care and compassionate treatment
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Excellence in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                  Orthopaedic Care
                </span>
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                With over{" "}
                <span className="font-semibold text-blue-600">15 years</span> of
                specialized experience in orthopaedic and spine surgery, Dr.
                Gayadhar Behera combines technical expertise with a
                patient-first approach. His philosophy of{" "}
                <span className="font-semibold text-teal-600">
                  {"Live Young and Live Healthy"}
                </span>
                drives innovative treatment solutions.
              </p>

              {/* Achievements List */}
              <div className="grid sm:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <achievement.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium text-sm">
                      {achievement.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <button className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              View Full Qualifications
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Image Section */}
          <div className="relative group">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={DrImage}
                alt="Modern surgical facility"
                className="w-full h-80 lg:h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-transparent"></div>

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <Play className="w-6 h-6 text-blue-600 ml-1" />
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-xl shadow-2xl">
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5" />
                <span className="font-bold text-sm">15+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br ${feature.color} p-6 rounded-2xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50 backdrop-blur-sm`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Hover Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              ></div>

              {/* Image Container */}
              <div className="relative mb-6 overflow-hidden rounded-xl">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={100}
                  height={100}
                  className="w-full h-32 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${feature.gradient
                    .replace("from-", "from-")
                    .replace("to-", "to-")}/20 rounded-xl`}
                ></div>
                <div
                  className={`absolute top-4 right-4 w-10 h-10 ${feature.iconColor} rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed relative z-10">
                {feature.description}
              </p>

              {/* Animated Border */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}
              >
                <div className="absolute inset-[2px] rounded-2xl bg-white"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600/10 to-teal-600/10 rounded-2xl p-8 border border-blue-200/50">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Journey to Better Health?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Schedule a consultation with Dr. Gayadhar Behera and take the
              first step towards living young and healthy again.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-teal-700 transition-all transform hover:scale-105">
                Book Consultation
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all">
                Emergency Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
