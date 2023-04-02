export const AppConfig = {
  site_name: `Car Rent Lelo`,
  title: "Car Rent Lelo",
  description: "This is a car renting service website. Book your car today.",
  url: "",
  locale: "en",
  author: "Rishabh Anand",
  pagination_size: 5,
};

export const NAV_LINKS = [
  { id: 1, redirect: "/home", text: "Home" },
  { id: 1, redirect: "/about", text: "About" },
  { id: 1, redirect: "/models", text: "Vehicle Models" },
  { id: 1, redirect: "/testimonials", text: "Testimonials" },
  { id: 1, redirect: "/team", text: "Our Team" },
  { id: 1, redirect: "/contact", text: "Contact" },
];

export const CAR_MODELS = [
  {
    name: "Audi A1",
    rate: "45",
    brand: "Audi",
    transmissionType: "Manual",
    fuelType: "Diesel",
    rating: "4",
    link: "/",
    image: "/cars-big/golf6-box.png",
  },
  {
    name: "Golf 6",
    rate: "37",
    brand: "VW",
    transmissionType: "Auto",
    fuelType: "Diesel",
    rating: "4",
    link: "/",
    image: "/cars-big/toyota-box.png",
  },
  {
    name: "Toyota",
    rate: "30",
    brand: "Camry",
    transmissionType: "Manual",
    fuelType: "Diesel",
    rating: "5",
    link: "/",
    image: "/cars-big/audi-box.png",
  },
  {
    name: "BMW 320",
    rate: "35",
    brand: "ModernLine",
    transmissionType: "Auto",
    fuelType: "Diesel",
    rating: "4",
    link: "/",
    image: "/cars-big/bmw-box.png",
  },
  {
    name: "Mercedes",
    rate: "50",
    brand: "Benz GLK",
    transmissionType: "Manual",
    fuelType: "Diesel",
    rating: "3",
    link: "/",
    image: "/cars-big/benz-box.png",
  },
  {
    name: "VW Passat",
    rate: "25",
    brand: "CC",
    transmissionType: "Auto",
    fuelType: "Diesel",
    rating: "1",
    link: "/",
    image: "/cars-big/passat-box.png",
  },
];

export const ModelType = typeof CAR_MODELS[0];
