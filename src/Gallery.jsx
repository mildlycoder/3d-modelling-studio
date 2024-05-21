import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Headers from './Components/Headers';
import Footer from './Components/Footer';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All categories');
  const [selectedImage, setSelectedImage] = useState(null);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedImage(null); // Reset selected image when changing categories
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const images = {
    'All categories': [
      'https://i.ibb.co/hBmnXPR/DINING-ROOM2-copy.jpg',
      'https://i.ibb.co/HHpPK1z/GUEST-ROOM-AS-copy.jpg',
      'https://i.ibb.co/fq00rDG/KIDS-BEDROOM3-copy.jpg',
      'https://i.ibb.co/J22h0KW/KIDS-ROOM1-copy.jpg',
      'https://i.ibb.co/Ny683Cx/LIVING-ROOM-AD1-copy.jpg',
      'https://i.ibb.co/Rc1Xzcd/KIDS-ROOM8-copy.jpg',
      'https://i.ibb.co/n6f9TGh/MASTER-BEDROOM10-copy.jpg',
      'https://i.ibb.co/gggxM2d/PARENTS-BEDROOM1-copy.jpg',
      'https://i.ibb.co/7QjzwSg/PARENTS-BEDROOM2-copy.jpg',
      'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg',
      'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg',
      'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg',
    ],
    Living: [
      'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg',
      'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg',
      'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg',
    ],
    Bedroom: [
      'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg',
      'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg',
      'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg',
    ],
    Kitchen: [
      'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg',
      'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
      'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
      'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
    ],
    Bathroom: [
      'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
      'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
      'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg',
      'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg',
    ],
  };

  const filteredImages = images[selectedCategory];

  return (
<div className="bg-slate-800">
    <motion.div
      className="bg-slate-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap bg-slate-800">
        {Object.keys(images).map((category) => (
          <motion.button
            key={category}
            type="button"
            className={`text-gray-100 border border-slate-400 hover:border-blue-800 hover:bg-blue-800  bg-slate-600 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 ${
              selectedCategory === category ? 'active' : ''
            }`}
            onClick={() => handleCategoryChange(category)}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {category}
          </motion.button>
        ))}
      </div>
      <AnimatePresence mode='wait'>
        {!selectedImage ? (
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-5 m-10 bg-slate-800"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => handleImageClick(image)}
              >
                <img className="h-auto max-w-full rounded-xl" src={image} alt={`Image ${index + 1}`} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key={selectedImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center"
            onClick={() => setSelectedImage(null)} // Click anywhere to exit full-screen
          >
            <img className="max-h-full max-w-full rounded-lg" src={selectedImage} alt="Full-Screen Image" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
    <Footer />
</div>
  );
};

export default Gallery;
