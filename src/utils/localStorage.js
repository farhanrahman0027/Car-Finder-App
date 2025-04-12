const WISHLIST_KEY = "wishlist_cars";

// Get wishlist from LocalStorage
export const getWishlist = () => {
  const data = localStorage.getItem(WISHLIST_KEY);
  return data ? JSON.parse(data) : [];
};

// Save car to wishlist
export const addToWishlist = (car) => {
  const current = getWishlist();
  const exists = current.find(c => c.id === car.id);
  if (!exists) {
    const updated = [...current, car];
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(updated));
  }
};

// Remove car from wishlist
export const removeFromWishlist = (id) => {
  const current = getWishlist();
  const updated = current.filter(c => c.id !== id);
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(updated));
};

// Check if car is already in wishlist
export const isInWishlist = (id) => {
  const current = getWishlist();
  return current.some(c => c.id === id);
};
