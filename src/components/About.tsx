import {
  Award,
  CheckCircle,
  GraduationCap,
  Heart,
  Stethoscope,
  Target,
  Zap,
} from "lucide-react";
import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-blue-600">Dr. Gayadhar Behera</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A distinguished orthopaedic and spine surgeon dedicated to helping
            patients live young and live healthy through advanced medical care
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Excellence in Orthopaedic Care
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Dr. Gayadhar Behera brings over 15 years of specialized experience
              in orthopaedic and spine surgery. His commitment to "Live Young
              and Live Healthy" drives his approach to patient care, utilizing
              the most advanced surgical techniques and technologies available.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span className="text-gray-700">
                  Gold Medal recipient from JIPMER
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span className="text-gray-700">
                  International fellowship training
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span className="text-gray-700">
                  5000+ successful surgeries
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span className="text-gray-700">
                  Minimally invasive techniques specialist
                </span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
              alt="Modern surgical facility"
              className="w-full h-80 object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="group bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-3xl hover:shadow-xl transition-all transform hover:scale-105">
            <div className="relative mb-6">
              <img
                src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop"
                alt="Advanced surgical equipment"
                className="w-full h-32 object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-blue-600/20 rounded-xl"></div>
              <Target className="absolute top-4 right-4 w-8 h-8 text-white bg-blue-600 p-1.5 rounded-lg" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Precision Surgery
            </h3>
            <p className="text-gray-600">
              Computer navigation and advanced imaging for precise surgical
              planning and execution with minimal invasive approach.
            </p>
          </div>

          <div className="group bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-3xl hover:shadow-xl transition-all transform hover:scale-105">
            <div className="relative mb-6">
              <img
                src="https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop"
                alt="Patient consultation"
                className="w-full h-32 object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-teal-600/20 rounded-xl"></div>
              <Heart className="absolute top-4 right-4 w-8 h-8 text-white bg-teal-600 p-1.5 rounded-lg" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Patient-Centered Care
            </h3>
            <p className="text-gray-600">
              Personalized treatment plans focused on helping patients achieve
              optimal health and maintain an active lifestyle.
            </p>
          </div>

          <div className="group bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-3xl hover:shadow-xl transition-all transform hover:scale-105">
            <div className="relative mb-6">
              <img
                src="https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop"
                alt="Medical research and innovation"
                className="w-full h-32 object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-purple-600/20 rounded-xl"></div>
              <Zap className="absolute top-4 right-4 w-8 h-8 text-white bg-purple-600 p-1.5 rounded-lg" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Innovation & Research
            </h3>
            <p className="text-gray-600">
              Continuous learning and adoption of latest surgical techniques
              from international training programs and fellowships.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
