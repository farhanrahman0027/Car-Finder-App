import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const CarCard = ({ car }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300 cursor-pointer"
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
    </motion.div>
  );
};

export default CarCard;
