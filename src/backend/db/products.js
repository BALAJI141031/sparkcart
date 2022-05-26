import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Indian Polity",
    author: "Shiv Khera",
    price: "5000",
    category: "Polity",
    description: "India's premium Food ",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/51rKNmuSrsL._SX384_BO1,204,203,200_.jpg",
    productRating: 4,
    fastDelivery: false,
    newArrival: true,
  },
  {
    _id: uuid(),
    title: "ART & Culture",
    author: "Junaid Qureshi",
    price: "3000",
    category: "ArtAndCulture",
    description: "India's premium Food ",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/51rKNmuSrsL._SX384_BO1,204,203,200_.jpg",
    productRating: 5,
    fastDelivery: true,
    newArrival: false,
  },
  {
    _id: uuid(),
    title: "Indian Economy",
    author: "Shiv Khera",
    price: "1000",
    description: "India's premium Food ",
    category: "Economy",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/51ZfZy6CV2L._SX355_BO1,204,203,200_.jpg",
    productRating: 2,
    fastDelivery: true,
    newArrival: false,
  },
  {
    _id: uuid(),
    title: "Indian Economy",
    author: "Shiv Khera",
    price: "1000",
    description: "India's premium ",
    category: "Economy",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/51WWmZpXrHL._SX397_BO1,204,203,200_.jpg",
    productRating: 1,
    fastDelivery: true,
    newArrival: true,
  },
  {
    _id: uuid(),
    title: "World History",
    author: "Shiv Khera",
    price: "1000",
    description: "India's premium ",
    category: "Geography",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/517OihiR00L._SX378_BO1,204,203,200_.jpg",
    productRating: 1,
    fastDelivery: true,
    newArrival: false,
  },
  {
    _id: uuid(),
    title: "balaji spicy  veg",
    author: "Shiv Khera",
    price: "1000",
    description: "India's premium ",
    category: "Geography",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/51f2LjqY7oL._SX377_BO1,204,203,200_.jpg",
    productRating: 1,
    fastDelivery: true,
    newArrival: false,
  },
  {
    _id: uuid(),
    title: "Ncert",
    author: "Shiv Khera",
    price: "1000",
    description: "India's premium ",
    category: "NCERT",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/51mCG33uzmL._SX382_BO1,204,203,200_.jpg",
    productRating: 1,
    fastDelivery: true,
    newArrival: false,
  },
  {
    _id: uuid(),
    title: "Ncert",
    author: "Shiv Khera",
    price: "1000",
    description: "India's premium ",
    category: "NCERT",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/514pVn+ccML._SY373_BO1,204,203,200_.jpg",
    productRating: 1,
    fastDelivery: true,
    newArrival: false,
  },
  {
    _id: uuid(),
    title: "World Geography",
    author: "Shiv Khera",
    price: "1000",
    description: "India's premium ",
    category: "NCERT",
    imageUrl: "https://m.media-amazon.com/images/I/61QXr5dugqL._AC_UY218_.jpg",
    productRating: 1,
    fastDelivery: true,
    newArrival: false,
  },
  {
    _id: uuid(),
    title: "World Geography",
    author: "Shiv Khera",
    price: "1000",
    description: "India's premium ",
    category: "NCERT",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/51Fdqv1Mn2L._SX379_BO1,204,203,200_.jpg",
    productRating: 1,
    fastDelivery: true,
    newArrival: false,
  },
];
