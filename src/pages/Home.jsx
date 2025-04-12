import React, { useEffect, useState } from "react";
import mockCars from "../data/mockCars";
import CarCard from "../components/CarCard";
import Wishlist from "../components/Wishlist";

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

  useEffect(() => {
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

    // Pagination logic
    const start = (currentPage - 1) * carsPerPage;
    const paginated = filtered.slice(start, start + carsPerPage);

    setCars(paginated);
  }, [filters, sortOrder, currentPage]);

  const handleChange = (e) => {
    setCurrentPage(1); // 👈 resets to page 1 when filters are changed

    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">Car Finder App</h1>

      <div className="mb-4 flex justify-end">
        <label className="font-medium mr-2">Sort by Price:</label>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">None</option>
          <option value="lowToHigh">Low to High</option>
          <option value="highToLow">High to Low</option>
        </select>
      </div>
      {/* Filters */}
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
          placeholder="Fuel Type (e.g. Petrol)"
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

      {/* Car Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cars.length > 0 ? (
          cars.map((car) => <CarCard key={car.id} car={car} />)
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No cars found.
          </p>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-8 gap-4">
        <button
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage === 1}
        >
          ⬅️ Previous
        </button>

        <button
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={cars.length < carsPerPage}
        >
          Next ➡️
        </button>
      </div>

      {/* Wishlist Section */}
      <Wishlist />
    </div>
  );
};

export default Home;
