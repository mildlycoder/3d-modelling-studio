import React from 'react'
import {motion as m} from "framer-motion"
import { Link } from 'react-router-dom'
const HeroComp = () => {
  return (
    <m.section>
        <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div className="relative z-10 lg:py-16">
              <m.div 
              initial={{x:"-50%", opacity:"0%"}}
              animate={{x: "0%", opacity:"100%"}}
              transition={{duration:1.5, ease:"easeInOut"}}
              className="relative h-64 sm:h-80 lg:h-full">
                <img
                  alt="House"
                  src="https://i.ibb.co/yqMFsGj/MASTER-BEDROOM11-copy-2.jpg"
                  className="absolute inset-0 h-full w-full object-cover rounded-xl transition ease-in-out delay-150 hover:scale-105 duration-300"
                />
              </m.div>
            </div>

            <m.div 
            
            initial={{x:"50%", opacity:"0%"}}
              animate={{x: "0%", opacity:"100%"}}
              transition={{duration:1.5, ease:"easeInOut"}}
            className="relative flex items-center bg-slate-700 rounded-r-xl">
              <span
                className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-slate-700 rounded-l-xl"
              ></span>

              <div className="p-8 sm:p-16 lg:p-24">
              <m.h2
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
                className="text-2xl font-bold sm:text-3xl text-white"
              >
                DreamVizz is a Visualization firm for your needs
              </m.h2>

                <m.p 
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
                className="mt-4 text-white">
                  Welcome to DreamVizz, your premier destination for 3D visualization in interior design and architecture. Our skilled team transforms visions into stunning realities through cutting-edge technology and artistic finesse. Experience the future of visualization with DreamVizz, where dreams come to life in three-dimensional splendor.
                </m.p>

                <m.button
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 2 }}
                  href="contact"
                  className="mt-8 inline-block rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-200 hover:text-blue-600 focus:outline-none focus:ring active:text-indigo-500"
                >
                  <Link to="contact">
                    Get in Touch
                  </Link>
                </m.button>
              </div>
            </m.div>
          </div>
        </div>
      </m.section>
  )
}

export default HeroComp