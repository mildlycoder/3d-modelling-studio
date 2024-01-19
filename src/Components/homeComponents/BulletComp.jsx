import React from 'react'
import {motion as m} from "framer-motion"
import { useInView } from "react-intersection-observer";

const BulletComp = ({title, text}) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
      });
    
      const animationVariants = {
        hidden: { x: "40%" , opacity: "0%"},
        visible: { x: "30%" , opacity: "100%"},
      };
    
      return (
        <m.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={animationVariants}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="block rounded-xl border border-gray-100 p-8 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring transition duration-300 ease-in-out transform hover:scale-105"
        >
          <h2 className="mt-2 font-bold text-lg">{title}</h2>
          <p className="hidden mt-1 text-sm text-gray-600 sm:block">
            {text}
          </p>
        </m.div>
      );
}

export default BulletComp