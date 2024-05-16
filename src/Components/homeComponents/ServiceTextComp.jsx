import React from 'react';
import { motion as m } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const ServiceTextComp = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const animationVariants = {
    hidden: { x: "-50%", opacity: "0%" },
    visible: { x: "0%", opacity: "100%" },
  };

  return (
    <m.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={animationVariants}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="mx-auto max-w-lg text-center lg:mx-0 lg:text-left"
    >
      <h2 className="text-4xl font-bold sm:text-5xl text-white">Our Services</h2>

      <p className="mt-4 text-white">
        Elevate your experience with our top-notch services.
      </p>

      <a href="#/contact">
      <button className="mt-8 inline-block rounded bg-indigo-600 px-6 py-3 text-sm font-medium text-white transition duration-300 ease-in-out transform hover:bg-indigo-700" >
        Getting started
      </button>
      </a>
      {/* <a
        href="/contact"
        className="mt-8 inline-block rounded bg-indigo-600 px-6 py-3 text-sm font-medium text-white transition duration-300 ease-in-out transform hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
      >
        Get Started Today
      </a> */}
      
    </m.div>
  );
};

export default ServiceTextComp;
