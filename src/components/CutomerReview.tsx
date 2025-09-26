import { CheckCircle, Quote, Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const CutomerReview = () => {
  const reviews = [
    {
      name: "Rajesh Kumar",
      age: 45,
      condition: "Spine Surgery",
      rating: 5,
      review:
        "Dr. Gayadhar Behera performed my spine surgery using minimally invasive techniques. The recovery was much faster than expected, and I'm back to my normal activities. His expertise in navigation surgery is truly remarkable.",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    },
    {
      name: "Priya Sharma",
      age: 38,
      condition: "Knee Replacement",
      rating: 5,
      review:
        "The computer navigation arthroplasty performed by Dr. Behera was life-changing. My knee pain is completely gone, and the precision of the surgery was incredible. Highly recommend his expertise.",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    },
    {
      name: "Amit Patel",
      age: 52,
      condition: "Arthroscopic Surgery",
      rating: 5,
      review:
        "Dr. Behera's arthroscopic technique was minimally invasive with quick recovery. His international training really shows in his surgical skills. The clinic staff is also very professional and caring.",
      image:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    },
    {
      name: "Sunita Reddy",
      age: 41,
      condition: "Endoscopic Spine Surgery",
      rating: 5,
      review:
        "The UBE endoscopic spine surgery was a game-changer. Minimal scarring, quick recovery, and excellent results. Dr. Behera's expertise from South Korea training is evident in his precise surgical approach.",
      image:
        "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    },
  ];
  return (
    <section
      id="reviews"
      className="py-20 bg-gradient-to-br from-blue-50 to-teal-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Patient <span className="text-blue-600">Reviews</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from patients who chose to live young and live healthy
            with Dr. Gayadhar Behera
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all"
            >
              <div className="flex items-start space-x-4 mb-6">
                <Image
                  src={review.image}
                  alt={review.name}
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-full object-cover border-4 border-blue-100"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-semibold text-gray-900">
                      {review.name}
                    </h4>
                    <div className="flex space-x-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">
                    Age: {review.age} • {review.condition}
                  </p>
                </div>
              </div>

              <div className="relative">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-blue-200" />
                <p className="text-gray-700 leading-relaxed pl-6 italic">
                  {`"${review.review}"`}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-green-600 font-medium">
                    Verified Patient
                  </span>
                </div>
                <div className="text-sm text-gray-500">
                  Treatment: {review.condition}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-white px-8 py-4 rounded-2xl shadow-lg">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 text-yellow-400 fill-current"
                />
              ))}
            </div>
            <div className="text-left">
              <p className="text-2xl font-bold text-gray-900">4.9/5</p>
              <p className="text-sm text-gray-600">Based on 500+ reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CutomerReview;
