import React, { useState } from 'react';
import { motion } from 'framer-motion';

function ContactForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [projectDetails, setProjectDetails] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission, e.g., send data to the server
    console.log('Form submitted:', { fullName, email, projectDetails });
    // You can add additional logic here, such as sending a request to a server.
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-md p-6 bg-white shadow-md rounded-md"
      onSubmit={handleSubmit}
    >
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Your Full Name</label>
        <input
          type="text"
          placeholder="John Doe"
          className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400 transition-all duration-300"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Your Email Address</label>
        <input
          type="email"
          placeholder="johndoe@example.com"
          className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400 transition-all duration-300"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-600">Project Details</label>
        <textarea
          className="w-full h-32 px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400 transition-all duration-300"
          placeholder="Tell us about your architectural visualization project, including goals and specific requirements..."
          value={projectDetails}
          onChange={(e) => setProjectDetails(e.target.value)}
          required
        ></textarea>
      </div>

      <motion.button
        type="submit"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white uppercase bg-indigo-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:border-blue-400 transition-all duration-300"
      >
        Schedule ArchViz Consultation
      </motion.button>
    </motion.form>
  );
}

export default ContactForm;
