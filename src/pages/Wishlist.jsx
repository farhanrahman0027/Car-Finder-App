import React, { useEffect, useState } from 'react';
import { getWishlist, removeFromWishlist } from '../utils/localStorage';
import { motion } from 'framer-motion';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    setWishlist(getWishlist());
  }, []);

  const handleRemove = (id) => {
    removeFromWishlist(id);
    setWishlist(getWishlist());
  };

  return (
    <motion.div
      className="max-w-6xl mx-auto p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <h1 className="text-3xl font-bold text-center mb-8">Your Wishlist</h1>

      {wishlist.length === 0 ? (
        <p className="text-center text-gray-500">You haven't added any cars to your wishlist yet.</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {wishlist.map((car) => (
            <motion.div
              key={car.id}
              className="bg-white dark:bg-gray-800 p-4 rounded shadow relative"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <img src={car.image} alt={car.name} className="w-full h-40 object-cover rounded" />
              <h3 className="text-xl mt-2 font-bold">{car.name}</h3>
              <p className="text-gray-600 dark:text-gray-300">{car.brand}</p>
              <p className="text-blue-600 font-semibold">${car.price}</p>
              <button
                className="absolute bottom-2 right-2 text-sm text-red-600 hover:underline"
                onClick={() => handleRemove(car.id)}
              >
                Remove
              </button>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default Wishlist;
