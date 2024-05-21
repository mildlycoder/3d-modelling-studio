import React from 'react';
import ContactForm from './Components/ContactForm';
import Footer from './Components/Footer'

const Contact = () => {
  return (
    <div>
      <section className="min-h-screen bg-slate-800 p-40 relative">
        <div className="flex flex-col text-white mx-auto relative z-10 rounded-xl bg-contain bg-[url('https://res.cloudinary.com/dfrpcqahh/image/upload/f_auto,q_auto/v1/dreamvizz/u52qsdax3mgp8gk6v6kk')]">
          <div className="container flex flex-col flex-1 px-6 py-12 mx-auto">
            <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
              <div class="text-slate-800 lg:w-1/2 lg:mx-6 bg-white/40 backdrop-blur-md p-4 rounded-xl">
                <h1 className="text-3xl font-semibold capitalize lg:text-4xl mb-4">Welcome to DreamVizz</h1>

                <p className="max-w-xl mt-4 text-lg ">
                  Elevate your architectural projects with DreamVizz, where dreams come to life through immersive 3D visualizations. Explore the power of design with us.
                </p>

                <button
                  className="px-8 py-3 mt-6 text-sm text-white font-medium tracking-wide bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50"
                  onClick={() => window.location.href = 'tel:9022712136'}
                >
                  Call Now
                </button>
              </div>

              <div className="mt-8 lg:w-1/2 lg:mx-6">
                <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white/40 backdrop-blur-md shadow-2xl rounded-xl lg:max-w-xl">
                  <h1 className="text-2xl font-semibold text-slate-900 mb-4">Contact DreamVizz</h1>

                  <p className="font-medium my-2 text-slate-900">
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
