import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import mockCars from '../data/mockCars';

const CarDetail = () => {
  const { id } = useParams(); // Get car ID from URL
  const navigate = useNavigate();

  // Find the selected car from mock data
  const car = mockCars.find(car => car.id === parseInt(id));

  if (!car) {
    return <p className="text-center mt-10 text-gray-600">Car not found.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
      >
        ← Back
      </button>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img src={car.image} alt={car.name} className="w-full h-64 object-cover" />

        <div className="p-6">
          <h2 className="text-3xl font-bold mb-2">{car.name}</h2>
          <p className="text-gray-600 text-lg mb-4">{car.brand}</p>
          <p className="text-xl text-blue-700 font-semibold mb-2">
            Price: ${car.price.toLocaleString()}
          </p>
          <p className="text-gray-700 mb-1">Fuel Type: {car.fuel}</p>
          <p className="text-gray-700 mb-1">Seating Capacity: {car.seats}</p>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;
