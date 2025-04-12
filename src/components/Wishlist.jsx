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
    setWishlist(getWishlist()); // Refresh after removal
  };

  return (
    <div id="wishlist" className="mt-10">
      <h2 className="text-2xl font-semibold mb-4">Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p className="text-gray-500">No cars in wishlist.</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {wishlist.map((car) => (
            <motion.div
              key={car.id}
              className="bg-white p-4 rounded shadow relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <img src={car.image} alt={car.name} className="w-full h-40 object-cover rounded" />
              <h3 className="text-xl mt-2 font-bold">{car.name}</h3>
              <p className="text-gray-600">{car.brand}</p>
              <p className="text-blue-600 font-semibold">${car.price}</p>
              <button
                className="absolute top-2 right-2 text-sm text-red-600 hover:underline"
                onClick={() => handleRemove(car.id)}
              >
                Remove
              </button>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
