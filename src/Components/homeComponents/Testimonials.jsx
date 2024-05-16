// TestimonialCarousel.js

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  { id: 1, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', author: 'John Doe' },
  { id: 2, text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', author: 'Jane Doe' },
  { id: 2, text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', author: 'Jane Doe' },
  { id: 2, text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', author: 'Jane Doe' },
  // Add more testimonials as needed
];

const TestimonialCarousel = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleDotClick = (index) => {
    setCurrentTestimonial(index);
  };

  useEffect(() => {
    const autoplayInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change the interval duration as needed

    return () => clearInterval(autoplayInterval);
  }, []);

  return (
    <div className="max-w-3xl mx-auto m-16">
      <AnimatePresence mode='wait' initial={false}>
        <motion.div
          key={currentTestimonial}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-slate-600 p-16 block rounded-xl border border-gray-300 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring transition duration-300 ease-in-out transform hover:scale-105"
        >
          <p className="text-gray-100 text-3xl mb-4">{testimonials[currentTestimonial].text}</p>
          <p className="text-gray-300">{testimonials[currentTestimonial].author}</p>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-center m-10">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`mx-2 w-4 h-4 bg-indigo-600 rounded-full focus:outline-none ${
              index === currentTestimonial ? 'opacity-100' : 'opacity-50'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
