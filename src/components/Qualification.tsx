import { Award, GraduationCap } from "lucide-react";
import React from "react";

const Qualification = () => {
  return (
    <section
      id="qualifications"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Qualifications & <span className="text-blue-600">Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive medical education and specialized training from
            prestigious institutions worldwide
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Medical Qualifications */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-blue-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mr-4">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Medical Qualifications
              </h3>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-3"></div>
                <div>
                  <p className="font-semibold text-gray-900 text-lg">
                    MS (Ortho) - JIPMER
                  </p>
                  <p className="text-blue-600 font-medium">
                    🏆 Gold Medal recipient
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-3"></div>
                <div>
                  <p className="font-semibold text-gray-900 text-lg">
                    DNB (Ortho)
                  </p>
                  <p className="text-gray-600">Diplomate of National Board</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-3"></div>
                <div>
                  <p className="font-semibold text-gray-900 text-lg">
                    MNAMS (New Delhi)
                  </p>
                  <p className="text-gray-600">
                    Member of National Academy of Medical Sciences
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Fellowship Training */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-teal-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-teal-700 rounded-xl flex items-center justify-center mr-4">
                <Award className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Fellowship Training
              </h3>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-teal-50 to-teal-100 rounded-xl">
                <div className="w-2 h-2 bg-teal-600 rounded-full mt-3"></div>
                <div>
                  <p className="font-semibold text-gray-900 text-lg">
                    Computer Navigation Arthroplasty & Arthroscopy
                  </p>
                  <p className="text-teal-600 font-medium">SWH (Singapore)</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-teal-50 to-teal-100 rounded-xl">
                <div className="w-2 h-2 bg-teal-600 rounded-full mt-3"></div>
                <div>
                  <p className="font-semibold text-gray-900 text-lg">
                    Spine, MISS & Navigation Spine Surgery
                  </p>
                  <p className="text-teal-600 font-medium">SSHRI, SWH</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-teal-50 to-teal-100 rounded-xl">
                <div className="w-2 h-2 bg-teal-600 rounded-full mt-3"></div>
                <div>
                  <p className="font-semibold text-gray-900 text-lg">
                    AO-Spine Fellowship Asia Pacific
                  </p>
                  <p className="text-teal-600 font-medium">
                    International Training Program
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-teal-50 to-teal-100 rounded-xl">
                <div className="w-2 h-2 bg-teal-600 rounded-full mt-3"></div>
                <div>
                  <p className="font-semibold text-gray-900 text-lg">
                    UBE Endo-Spine Surgery
                  </p>
                  <p className="text-teal-600 font-medium">🇰🇷 South Korea</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
