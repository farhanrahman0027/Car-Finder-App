import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  addToWishlist,
  removeFromWishlist,
  isInWishlist
} from '../utils/localStorage';

const CarCard = ({ car }) => {
  const navigate = useNavigate();
  const [inWishlist, setInWishlist] = useState(false);

  // Check wishlist on component mount
  useEffect(() => {
    setInWishlist(isInWishlist(car.id));
  }, [car.id]);

  // Toggle wishlist
  const toggleWishlist = (e) => {
    e.stopPropagation(); // Prevent navigating to detail view
    if (inWishlist) {
      removeFromWishlist(car.id);
    } else {
      addToWishlist(car);
    }
    setInWishlist(!inWishlist); // Update UI
  };

  return (
    <motion.div
      className="bg-white shadow-md rounded-lg overflow-hidden relative hover:shadow-xl transition duration-300 cursor-pointer"
      whileHover={{ scale: 1.03 }}
      onClick={() => navigate(`/car/${car.id}`)}
    >
      <img src={car.image} alt={car.name} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{car.name}</h3>
        <p className="text-gray-600">{car.brand}</p>
        <p className="text-gray-700 font-bold">${car.price.toLocaleString()}</p>
        <p className="text-sm text-gray-500 mt-1">Fuel: {car.fuel} | Seats: {car.seats}</p>
      </div>

      {/* Wishlist Heart Button */}
      <button
        className={`absolute top-2 right-2 text-xl ${
          inWishlist ? 'text-red-500' : 'text-gray-400'
        }`}
        onClick={toggleWishlist}
        title={inWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
      >
        {inWishlist ? '❤️' : '🤍'}
      </button>
    </motion.div>
  );
};

export default CarCard;
