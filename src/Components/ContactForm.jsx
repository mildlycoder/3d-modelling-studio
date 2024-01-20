import React, { useState } from 'react';

function ContactForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission, e.g., send data to the server
    console.log('Form submitted:', { fullName, email, message });
    // You can add additional logic here, such as sending a request to a server.
  };

  return (
    <form className="mt-6" onSubmit={handleSubmit}>
      <div className="flex-1">
        <label className="block mb-2 text-sm text-gray-600">Your Full Name</label>
        <input
          type="text"
          placeholder="John Doe"
          className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
      </div>

      <div className="flex-1 mt-6">
        <label className="block mb-2 text-sm text-gray-600">Your Email Address</label>
        <input
          type="email"
          placeholder="johndoe@example.com"
          className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="w-full mt-6">
        <label className="block mb-2 text-sm text-gray-600">Appointment or Query Details</label>
        <textarea
          className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
          placeholder="Describe your appointment or query..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50"
      >
        Submit Appointment/Query
      </button>
    </form>
  );
}

export default ContactForm;
