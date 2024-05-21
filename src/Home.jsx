import React from 'react'
import { Link } from 'react-router-dom'
import Headers from './Components/Headers'
import Contact from './Contact'

import {motion as m} from "framer-motion"
import BulletComp from './Components/homeComponents/BulletComp'
import ServiceTextComp from './Components/homeComponents/ServiceTextComp'
import ServicesComp from './Components/homeComponents/ServicesComp'
import AboutComp from './Components/homeComponents/AboutComp'
import Testimonials from './Components/homeComponents/Testimonials'
import Footer from './Components/Footer'
import HeroComp from './Components/homeComponents/HeroComp'
import InstagramCarousel from './Components/homeComponents/InstagramCarousel'

const Home = () => {
  
  return (
    <div className="bg-slate-800">
      <HeroComp />

      <InstagramCarousel />

      <ServicesComp />

      <AboutComp />

      <Testimonials />

      <Footer />
    </div>
  )
}

export default Home