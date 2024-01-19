import React from 'react'
import ServiceTextComp from './ServiceTextComp'
import BulletComp from './BulletComp'
const ServicesComp = () => {
  return (
    <section className='mx-auto w-[60%]'>
    <div className="w-[85%] px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center ">
      <ServiceTextComp />
        <div class="flex flex-col gap-4">
          <BulletComp 
          title="D Architectural Visualisation"
          text="Immerse clients in stunning, lifelike representations of architectural designs. Precision meets creativity!"
          />
          <BulletComp 
          title="Interior 3D Visualisation"
          text="Transform ideas into vibrant, realistic interiors. See your space come alive before it's built!"
          />
          <BulletComp 
          title="Animated 3D Walkthrough"
          text="Experience the future with dynamic animated tours. Walk through your designs in a captivating virtual world!"
          />
        </div>
      </div>
    </div>
  </section>

  )
}

export default ServicesComp