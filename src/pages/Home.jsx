import React, { useEffect, useState } from "react";
import mockCars from "../data/mockCars";
import CarCard from "../components/CarCard";
import { motion } from 'framer-motion';

const Home = () => {
  const [cars, setCars] = useState([]);
  const [filters, setFilters] = useState({
    brand: "",
    fuel: "",
    minPrice: "",
    maxPrice: "",
  });
  const [sortOrder, setSortOrder] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 10;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const timeout = setTimeout(() => {
      try {
        let filtered = mockCars;

        if (filters.brand) {
          filtered = filtered.filter(
            (car) => car.brand.toLowerCase() === filters.brand.toLowerCase()
          );
        }
        if (filters.fuel) {
          filtered = filtered.filter(
            (car) => car.fuel.toLowerCase() === filters.fuel.toLowerCase()
          );
        }
        if (filters.minPrice) {
          filtered = filtered.filter(
            (car) => car.price >= Number(filters.minPrice)
          );
        }
        if (filters.maxPrice) {
          filtered = filtered.filter(
            (car) => car.price <= Number(filters.maxPrice)
          );
        }

        if (sortOrder === "lowToHigh") {
          filtered.sort((a, b) => a.price - b.price);
        } else if (sortOrder === "highToLow") {
          filtered.sort((a, b) => b.price - a.price);
        }

        const start = (currentPage - 1) * carsPerPage;
        const paginated = filtered.slice(start, start + carsPerPage);

        setCars(paginated);
      } catch (err) {
        setError("Failed to load cars.");
      } finally {
        setLoading(false);
      }
    }, 600);

    return () => clearTimeout(timeout);
  }, [filters, sortOrder, currentPage]);

  const handleChange = (e) => {
    setCurrentPage(1);
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="p-4 sm:p-6 md:p-8 max-w-7xl mx-auto"
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center">
      Discover Cars That Match Your Lifestyle.
      </h1>

      {/* Sort Dropdown */}
      <motion.div
        className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-end gap-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <label className="font-medium">Sort by Price:</label>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="p-2 border rounded w-full sm:w-[200px]"
        >
          <option value="">None</option>
          <option value="lowToHigh">Low to High</option>
          <option value="highToLow">High to Low</option>
        </select>
      </motion.div>

      {/* Filters */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <input
          type="text"
          name="brand"
          placeholder="Brand (e.g. Tesla)"
          className="p-2 border rounded w-full"
          value={filters.brand}
          onChange={handleChange}
        />
        <input
          type="text"
          name="fuel"
          placeholder="Fuel Type (e.g. Petrol)"
          className="p-2 border rounded w-full"
          value={filters.fuel}
          onChange={handleChange}
        />
        <input
          type="number"
          name="minPrice"
          placeholder="Min Price"
          className="p-2 border rounded w-full"
          value={filters.minPrice}
          onChange={handleChange}
        />
        <input
          type="number"
          name="maxPrice"
          placeholder="Max Price"
          className="p-2 border rounded w-full"
          value={filters.maxPrice}
          onChange={handleChange}
        />
      </motion.div>

      {/* Car Grid */}
      {loading ? (
        <div className="text-center text-blue-600 mt-10 text-xl">
          Loading cars...
        </div>
      ) : error ? (
        <div className="text-center text-red-500 mt-10 text-lg">{error}</div>
      ) : cars.length > 0 ? (
        <motion.div
          className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          key={JSON.stringify(cars)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </motion.div>
      ) : (
        <p className="text-center text-gray-500 mt-6">No cars found.</p>
      )}

      {/* Pagination Controls */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10">
        <button
          className="w-full sm:w-auto px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage === 1}
        >
          ⬅️ Previous
        </button>
        <button
          className="w-full sm:w-auto px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={cars.length < carsPerPage}
        >
          Next ➡️
        </button>
      </div>
    </motion.div>
  );
};

export default Home;
