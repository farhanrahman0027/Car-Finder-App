import React, { useEffect, useState } from 'react';
import mockCars from '../data/mockCars';
import CarCard from '../components/CarCard';

const Home = () => {
  const [cars, setCars] = useState([]);
  const [filters, setFilters] = useState({
    brand: '',
    fuel: '',
    minPrice: '',
    maxPrice: '',
  });

  useEffect(() => {
    // Filtering logic
    let filtered = mockCars;

    if (filters.brand) {
      filtered = filtered.filter(car => car.brand.toLowerCase() === filters.brand.toLowerCase());
    }
    if (filters.fuel) {
      filtered = filtered.filter(car => car.fuel.toLowerCase() === filters.fuel.toLowerCase());
    }
    if (filters.minPrice) {
      filtered = filtered.filter(car => car.price >= Number(filters.minPrice));
    }
    if (filters.maxPrice) {
      filtered = filtered.filter(car => car.price <= Number(filters.maxPrice));
    }

    setCars(filtered);
  }, [filters]);

  // Handle input changes for filtering
  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">Car Finder App</h1>

      {/* Filter Section */}
      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <input
          type="text"
          name="brand"
          placeholder="Brand (e.g. Tesla)"
          className="p-2 border rounded"
          value={filters.brand}
          onChange={handleChange}
        />
        <input
          type="text"
          name="fuel"
          placeholder="Fuel Type (e.g. Electric)"
          className="p-2 border rounded"
          value={filters.fuel}
          onChange={handleChange}
        />
        <input
          type="number"
          name="minPrice"
          placeholder="Min Price"
          className="p-2 border rounded"
          value={filters.minPrice}
          onChange={handleChange}
        />
        <input
          type="number"
          name="maxPrice"
          placeholder="Max Price"
          className="p-2 border rounded"
          value={filters.maxPrice}
          onChange={handleChange}
        />
      </div>

      {/* Cars Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cars.length > 0 ? (
          cars.map(car => <CarCard key={car.id} car={car} />)
        ) : (
          <p className="col-span-full text-center text-gray-500">No cars found.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
