const mockCars = [
  {
    id: 1,
    brand: "Toyota",
    name: "Camry",
    price: 25000,
    fuel: "Petrol",
    seats: 5,
    image:
      "https://gaadiwaadi.com/wp-content/uploads/2024/08/2025-Toyota-Camry-India-1068x610.jpg",
  },
  {
    id: 2,
    brand: "Honda",
    name: "Civic",
    price: 22000,
    fuel: "Diesel",
    seats: 5,
    image:
      "https://cdn.pixabay.com/photo/2021/08/20/15/22/honda-civic-si-6560708_1280.jpg",
  },
  {
    id: 3,
    brand: "Tesla",
    name: "Model 3",
    price: 40000,
    fuel: "Electric",
    seats: 5,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJcdk4fJGId8OzC5CPn44ukPkoiWJTMFnOEg&s",
  },
  {
    id: 4,
    brand: "Ford",
    name: "Mustang",
    price: 35000,
    fuel: "Petrol",
    seats: 4,
    image:
      "https://static.overfuel.com/photos/398/284965/0173372f0f4546e9b8bdcb3bbb631543.webp",
  },
  {
    id: 5,
    brand: "Hyundai",
    name: "Elantra",
    price: 18000,
    fuel: "Petrol",
    seats: 5,
    image: "https://imgd.aeplcdn.com/1056x594/n/nj4fmsa_1472636.jpg?q=80",
  },
  {
    id: 6,
    brand: "BMW",
    name: "i8",
    price: 60000,
    fuel: "Electric",
    seats: 4,
    image:
      "https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-2545xM4RIyFnbm9Mb3AgyyIJrjG0suyJRBODlsrjGpuaprQbhSIqppglBgnJJOl384MlficYiGHqoQxYLW7%25f3tiJ0PCJirQbLDWcQW7%251uRCRqoQh47wMvcYi9SDGgMb3islBglUb%259cRScH8ZuMbnMdoPiyJGy5BoorQ%25r9YbJW8zWuES9qogqaFuQl3ilU%25d0cRScHzoBMbnMdg30yJGy5iYarQ%25r9SERW8zWunD4qogqaGR4l3ilU%25e0cRScHz8fMbnMdg%253yJGy5i4arQ%25r9SeCW8zWunm7qogqaDjzl3ilUCzgcRScH4g7MbnMdeo7yJGy5mgprQ%25r98BYW8zWuob9qogqa3Jal3ilURQGcRScHbzBMbnMdJgAyJGy5QJNrQ%25r98eJW8zWuoxdqogqa3V%25l3ilUUJ5cRScHHQmMbnMddQuyJGy559KrQ%25r90bDW8zWuBDjqogqaYEdl3ilUE00cRScHFBsMbnMdjWgyJGy5765rQ%25r90vSW8zWuBwoqogqaCQ4l3ilU4e0cRScHNq9Mb37ur1MESZrMcRoHSWRzMES208bq2b7uRI",
  },
  {
    id: 7,
    brand: "Kia",
    name: "Seltos",
    price: 21000,
    fuel: "Diesel",
    seats: 5,
    image:
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/174323/seltos-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
  },
  {
    id: 8,
    brand: "Mahindra",
    name: "XUV700",
    price: 27000,
    fuel: "Diesel",
    seats: 7,
    image: "https://imgd.aeplcdn.com/1056x594/n/wd5raeb_1756583.jpg?q=80",
  },
  {
    id: 9,
    brand: "Maruti",
    name: "Swift",
    price: 15000,
    fuel: "Petrol",
    seats: 5,
    image:
      "https://www.varunmaruti.com/uploads/products/colors/new-swift-pearl-arctic-white.png",
  },
  {
    id: 10,
    brand: "Tata",
    name: "Nexon EV",
    price: 30000,
    fuel: "Electric",
    seats: 5,
    image:
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/148309/punch-ev-exterior-right-front-three-quarter-10.jpeg?isig=0&q=80",
  },

  {
    id: 1,
    brand: "Toyota",
    name: "Camry",
    price: 25000,
    fuel: "Petrol",
    seats: 5,
    image:
      "https://gaadiwaadi.com/wp-content/uploads/2024/08/2025-Toyota-Camry-India-1068x610.jpg",
  },
  {
    id: 2,
    brand: "Honda",
    name: "Civic",
    price: 22000,
    fuel: "Diesel",
    seats: 5,
    image:
      "https://cdn.pixabay.com/photo/2021/08/20/15/22/honda-civic-si-6560708_1280.jpg",
  },
  {
    id: 3,
    brand: "Tesla",
    name: "Model 3",
    price: 40000,
    fuel: "Electric",
    seats: 5,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJcdk4fJGId8OzC5CPn44ukPkoiWJTMFnOEg&s",
  },
  {
    id: 4,
    brand: "Ford",
    name: "Mustang",
    price: 35000,
    fuel: "Petrol",
    seats: 4,
    image:
      "https://static.overfuel.com/photos/398/284965/0173372f0f4546e9b8bdcb3bbb631543.webp",
  },
  {
    id: 5,
    brand: "Hyundai",
    name: "Elantra",
    price: 18000,
    fuel: "Petrol",
    seats: 5,
    image: "https://imgd.aeplcdn.com/1056x594/n/nj4fmsa_1472636.jpg?q=80",
  },
  {
    id: 6,
    brand: "BMW",
    name: "i8",
    price: 60000,
    fuel: "Electric",
    seats: 4,
    image:
      "https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-2545xM4RIyFnbm9Mb3AgyyIJrjG0suyJRBODlsrjGpuaprQbhSIqppglBgnJJOl384MlficYiGHqoQxYLW7%25f3tiJ0PCJirQbLDWcQW7%251uRCRqoQh47wMvcYi9SDGgMb3islBglUb%259cRScH8ZuMbnMdoPiyJGy5BoorQ%25r9YbJW8zWuES9qogqaFuQl3ilU%25d0cRScHzoBMbnMdg30yJGy5iYarQ%25r9SERW8zWunD4qogqaGR4l3ilU%25e0cRScHz8fMbnMdg%253yJGy5i4arQ%25r9SeCW8zWunm7qogqaDjzl3ilUCzgcRScH4g7MbnMdeo7yJGy5mgprQ%25r98BYW8zWuob9qogqa3Jal3ilURQGcRScHbzBMbnMdJgAyJGy5QJNrQ%25r98eJW8zWuoxdqogqa3V%25l3ilUUJ5cRScHHQmMbnMddQuyJGy559KrQ%25r90bDW8zWuBDjqogqaYEdl3ilUE00cRScHFBsMbnMdjWgyJGy5765rQ%25r90vSW8zWuBwoqogqaCQ4l3ilU4e0cRScHNq9Mb37ur1MESZrMcRoHSWRzMES208bq2b7uRI",
  },
  {
    id: 7,
    brand: "Kia",
    name: "Seltos",
    price: 21000,
    fuel: "Diesel",
    seats: 5,
    image:
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/174323/seltos-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
  },
  {
    id: 8,
    brand: "Mahindra",
    name: "XUV700",
    price: 27000,
    fuel: "Diesel",
    seats: 7,
    image: "https://imgd.aeplcdn.com/1056x594/n/wd5raeb_1756583.jpg?q=80",
  },
  {
    id: 9,
    brand: "Maruti",
    name: "Swift",
    price: 15000,
    fuel: "Petrol",
    seats: 5,
    image:
      "https://www.varunmaruti.com/uploads/products/colors/new-swift-pearl-arctic-white.png",
  },
  {
    id: 10,
    brand: "Tata",
    name: "Nexon EV",
    price: 30000,
    fuel: "Electric",
    seats: 5,
    image:
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/148309/punch-ev-exterior-right-front-three-quarter-10.jpeg?isig=0&q=80",
  },
];

export default mockCars;
