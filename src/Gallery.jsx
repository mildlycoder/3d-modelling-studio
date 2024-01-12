import React, { useState } from 'react';
import Headers from './Components/Headers';
const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All categories');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const images = {
    'All categories': [
      'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg',
      'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
      'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
      'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
      'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg',
      'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg',
      'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg',
      'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg',
      'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg',
      'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg',
      'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg',
      'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg',
    ],
    Shoes: [
      'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg',
      'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg',
      'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg',
    ],
    Bags: [
      'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg',
      'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg',
      'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg',
    ],
    Electronics: [
      'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg',
      'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
      'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
      'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
    ],
    Gaming: [
      'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
      'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
      'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg',
      'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg',
    ],
  };

  const filteredImages = images[selectedCategory];

  return (
    <div>
      <Headers />
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        {Object.keys(images).map((category) => (
          <button
            key={category}
            type="button"
            className={`text-gray-900 border border-white hover:border-indigo-500 bg-white focus:ring-2 focus:outline-none focus:ring-indigo-700 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 ${
              selectedCategory === category ? 'active' : ''
            }`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 m-10">
        {filteredImages.map((image, index) => (
          <div key={index}>
            <img className="h-auto max-w-full rounded-lg" src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
