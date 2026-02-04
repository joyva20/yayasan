"use client";

import { useState } from "react";
import { testimonials } from "@/data/testimonials";

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="alumni" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="section-title">Testimoni Alumni</h2>
        <div className="section-divider"></div>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
          Dengarkan pengalaman alumni FBIS yang telah sukses berkarir di
          berbagai bidang
        </p>

        <div className="relative max-w-3xl mx-auto">
          {/* Left Navigation Button */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 bg-white hover:bg-[#25D366] text-[#25D366] hover:text-white border-2 border-[#25D366] rounded-full p-3 shadow-lg transition-all duration-300 group"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Right Navigation Button */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 bg-white hover:bg-[#25D366] text-[#25D366] hover:text-white border-2 border-[#25D366] rounded-full p-3 shadow-lg transition-all duration-300 group"
            aria-label="Next testimonial"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 w-16 h-16 bg-[#1DA851]/20 rounded-full flex items-center justify-center text-2xl font-bold text-[#25D366]">
              {testimonials[currentIndex].name.charAt(0)}
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg text-slate-900">
                {testimonials[currentIndex].name}
              </h3>
              <p className="text-sm text-[#25D366]">
                {testimonials[currentIndex].role}
              </p>
              <p className="text-sm text-slate-600">
                {testimonials[currentIndex].position}
              </p>
            </div>
            <div className="flex gap-1">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
          <p className="text-slate-700 leading-relaxed italic">
            &ldquo;{testimonials[currentIndex].message}&rdquo;
          </p>

          {/* Pagination dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-[#25D366]"
                    : "w-2 bg-slate-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
