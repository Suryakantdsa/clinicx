import { Calendar, Clock, Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const ContactUs = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-800 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Get in <span className="text-teal-300">Touch</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Schedule your consultation with Dr. Gayadhar Behera and start your
            journey to live young and live healthy
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                <Phone className="w-6 h-6 text-teal-300" />
              </div>
              <div>
                <p className="font-semibold text-lg">Phone</p>
                <p className="text-blue-100">+91 XXX XXX XXXX</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                <Mail className="w-6 h-6 text-teal-300" />
              </div>
              <div>
                <p className="font-semibold text-lg">Email</p>
                <p className="text-blue-100">
                  dr.gayadhar@orthospineclinic.com
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-teal-300" />
              </div>
              <div>
                <p className="font-semibold text-lg">OrthoSpine Clinic</p>
                <p className="text-blue-100">Medical Center Address</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-teal-300" />
              </div>
              <div>
                <p className="font-semibold text-lg">Clinic Hours</p>
                <p className="text-blue-100">Mon-Fri: 9AM-6PM | Sat: 9AM-2PM</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <h4 className="text-lg font-semibold mb-3 text-teal-300">
                🌟 Live Young and Live Healthy
              </h4>
              <p className="text-blue-100 text-sm leading-relaxed">
                At Dr. Gayadhar Behera OrthoSpine Clinic, we believe in
                empowering our patients to maintain an active, healthy lifestyle
                through advanced orthopaedic and spine care.
              </p>
            </div>
          </div> */}

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20">
            <h3 className="text-2xl font-bold mb-6">Book Your Consultation</h3>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-teal-300"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-teal-300"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-teal-300"
                />
              </div>
              <div>
                <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-teal-300">
                  <option value="" className="text-gray-900">
                    Select Service
                  </option>
                  <option value="spine" className="text-gray-900">
                    Spine Surgery
                  </option>
                  <option value="joint" className="text-gray-900">
                    Joint Replacement
                  </option>
                  <option value="arthroscopy" className="text-gray-900">
                    Arthroscopic Surgery
                  </option>
                  <option value="consultation" className="text-gray-900">
                    General Consultation
                  </option>
                </select>
              </div>
              <div>
                <textarea
                  rows={4}
                  placeholder="Message or symptoms description"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-teal-300"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white py-4 rounded-xl font-semibold hover:from-teal-600 hover:to-teal-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Schedule Appointment</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
