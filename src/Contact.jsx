import React from 'react';
import ContactForm from './Components/ContactForm';
import Footer from './Components/Footer'

const Contact = () => {
  return (
    <div>
      <section className="min-h-screen bg-cover relative rounded-xl" style={{ backgroundImage: "url('https://i.ibb.co/kcdL4vs/pexels-pixabay-271816.jpg')" }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="flex flex-col min-h-screen text-white relative z-10">
          <div className="container flex flex-col flex-1 px-6 py-12 mx-auto">
            <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
              <div className="text-white lg:w-1/2 lg:mx-6">
                <h1 className="text-3xl font-semibold capitalize lg:text-4xl mb-4">Welcome to DreamVizz</h1>

                <p className="max-w-xl mt-4 text-lg">
                  Elevate your architectural projects with DreamVizz, where dreams come to life through immersive 3D visualizations. Explore the power of design with us.
                </p>

                <button
                  className="px-8 py-3 mt-6 text-sm font-medium tracking-wide bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50"
                  onClick={() => window.location.href = 'tel:9022712136'}
                >
                  Call Now
                </button>
              </div>

              <div className="mt-8 lg:w-1/2 lg:mx-6">
                <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl lg:max-w-xl">
                  <h1 className="text-2xl font-medium text-gray-700 mb-4">Contact DreamVizz</h1>

                  <p className="mt-2 text-gray-500">
                    Let us know about your architectural visualization needs. DreamVizz is here to turn your visions into stunning 3D renderings that exceed expectations.
                  </p>

                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
