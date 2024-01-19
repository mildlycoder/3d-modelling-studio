import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutComp = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 20, scale: .25 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={animationVariants}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16"
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
          <img
            alt="MasterBedroom"
            src="https://i.ibb.co/BcXq3mv/MASTER-BEDROOM-AS2-copy.jpg"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <div className="lg:py-24">
          <h2 className="text-3xl font-bold sm:text-4xl">Why Choose Us? </h2>

          <p className="mt-4 text-gray-600">
            We redefine 3D architectural visualization with precision and innovation. At DreamVizz, our visualizations are masterpieces, bringing your vision to life with extraordinary clarity. Animated walkthroughs set trends and offer a unique, engaging experience. We prioritize transparent communication, exceeding expectations every time. Elevate your projects with DreamVizz, where creativity meets precision.
          </p>

          <a
            href="#"
            className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutComp;
