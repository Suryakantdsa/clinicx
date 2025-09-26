import { ActivityIcon, Bone, Brain, Heart, Shield, Users } from "lucide-react";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Medical <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive orthopaedic and spine care using advanced surgical
            techniques and technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group bg-gradient-to-br from-white to-blue-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 border border-gray-100">
            <div className="relative mb-6">
              <Image
                src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop"
                width={120}
                height={120}
                alt="Computer Navigation Surgery"
                className="w-full h-32 object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-blue-600/20 rounded-xl"></div>
              <Bone className="absolute top-4 right-4 w-8 h-8 text-white bg-blue-600 p-1.5 rounded-lg" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Computer Navigation Arthroplasty
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Advanced joint replacement surgery using computer-guided precision
              for optimal implant positioning and improved outcomes.
            </p>
          </div>

          <div className="group bg-gradient-to-br from-white to-teal-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 border border-gray-100">
            <div className="relative mb-6">
              <Image
                src="https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop"
                alt="Arthroscopic Surgery"
                width={120}
                height={120}
                className="w-full h-32 object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-teal-600/20 rounded-xl"></div>
              <ActivityIcon className="absolute top-4 right-4 w-8 h-8 text-white bg-teal-600 p-1.5 rounded-lg" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Arthroscopic Surgery
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Minimally invasive joint surgery with smaller incisions, reduced
              pain, and faster recovery times for various joint conditions.
            </p>
          </div>

          <div className="group bg-gradient-to-br from-white to-purple-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 border border-gray-100">
            <div className="relative mb-6">
              <Image
                src="https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop"
                alt="Spine Surgery"
                width={120}
                height={120}
                className="w-full h-32 object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-purple-600/20 rounded-xl"></div>
              <Brain className="absolute top-4 right-4 w-8 h-8 text-white bg-purple-600 p-1.5 rounded-lg" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Spine Surgery
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Comprehensive spine care including minimally invasive spine
              surgery (MISS) and navigation-guided procedures.
            </p>
          </div>

          <div className="group bg-gradient-to-br from-white to-orange-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 border border-gray-100">
            <div className="relative mb-6">
              <Image
                src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop"
                alt="Endoscopic Surgery"
                width={120}
                height={120}
                className="w-full h-32 object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-orange-600/20 rounded-xl"></div>
              <Heart className="absolute top-4 right-4 w-8 h-8 text-white bg-orange-600 p-1.5 rounded-lg" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              UBE Endo-Spine Surgery
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Ultra-modern endoscopic spine surgery techniques learned from
              South Korea for minimal tissue damage and faster healing.
            </p>
          </div>

          <div className="group bg-gradient-to-br from-white to-green-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 border border-gray-100">
            <div className="relative mb-6">
              <Image
                src="https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop"
                alt="Navigation Surgery"
                width={120}
                height={120}
                className="w-full h-32 object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-green-600/20 rounded-xl"></div>
              <Shield className="absolute top-4 right-4 w-8 h-8 text-white bg-green-600 p-1.5 rounded-lg" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Navigation Surgery
            </h3>
            <p className="text-gray-600 leading-relaxed">
              State-of-the-art computer navigation systems for precise surgical
              planning and execution in complex cases.
            </p>
          </div>

          <div className="group bg-gradient-to-br from-white to-red-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 border border-gray-100">
            <div className="relative mb-6">
              <Image
                src="https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop"
                alt="Patient Care"
                width={120}
                height={120}
                className="w-full h-32 object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-red-600/20 rounded-xl"></div>
              <Users className="absolute top-4 right-4 w-8 h-8 text-white bg-red-600 p-1.5 rounded-lg" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Comprehensive Patient Care
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Personalized treatment plans with post-operative rehabilitation
              support to help patients live young and live healthy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
