import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: "xyz11111",
    title: "Indian Polity",
    author: "Shiv Khera",
    price: 500,
    actualPrice: 599,
    category: "Polity",
    description: "India's premium book ",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/51rKNmuSrsL._SX384_BO1,204,203,200_.jpg",
    productRating: 4,
    fastDelivery: false,
    newArrival: true,
    inCart: false,
    inWishList: false,
    rating: 2,
    reviewCount:10
  },
  {
    _id: "xyz1",
    title: "India's Relations",
    author: "Shiv Khera",
    price: 500,
    actualPrice: 599,
    category: "IR",
    description: "India's most read book ",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/51LNQ-TGU9L._SX377_BO1,204,203,200_.jpg",
    productRating: 4,
    fastDelivery: false,
    newArrival: true,
    inCart: false,
    inWishList: false,
    rating: 2,
    reviewCount:10
  },
  {
    _id: "cghtjf",
    title: "ART & Culture",
    author: "Junaid Qureshi",
    price: 300,
    actualPrice: 699,
    category: "Art & Culture",
    description: "India's faviourite book ",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/519mYjJFCrL._SX379_BO1,204,203,200_.jpg",
    productRating: 5,
    fastDelivery: true,
    newArrival: false,
    inCart: false,
    inWishList: false,
    rating: 3,
    reviewCount:15
  },
  {
    _id: "lkjhgfg",
    title: "Indian Economy",
    author: "Shiv Khera",
    price: 100,
    actualPrice: 599,
    description: "India's best seller",
    category: "Economy",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/51ZfZy6CV2L._SX355_BO1,204,203,200_.jpg",
    productRating: 2,
    fastDelivery: true,
    newArrival: false,
    inCart: false,
    inWishList: false,
    rating: 4,
    reviewCount:10
  },
  {
    _id: "asdefr3g",
    title: "Indian Economy",
    author: "Shiv Khera",
    price: 200,
    actualPrice: 299,
    description: "India's premium",
    category: "Economy",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/51WWmZpXrHL._SX397_BO1,204,203,200_.jpg",
    productRating: 1,
    fastDelivery: true,
    newArrival: true,
    inCart: false,
    inWishList: false,
    rating: 2,
    reviewCount:2
  },
  {
    _id: "fghthyu6543g",
    title: "World Geography",
    author: "Shiv Khera",
    price: 300,
    actualPrice: 399,
    description: "India Surfaces",
    category: "Geography",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/517OihiR00L._SX378_BO1,204,203,200_.jpg",
    productRating: 1,
    fastDelivery: true,
    newArrival: false,
    inCart: false,
    inWishList: false,
    rating: 2,
    reviewCount:8
  },
  {
    _id: "bnhjgty5678fg",
    title: "Regional Geography",
    author: "Shiv Khera",
    price: 400,
    actualPrice: 499,
    description: "Regional Surfaces",
    category: "Geography",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/51f2LjqY7oL._SX377_BO1,204,203,200_.jpg",
    productRating: 1,
    fastDelivery: true,
    newArrival: false,
    inCart: false,
    inWishList: false,
    rating: 2,
    reviewCount:10
  },
  {
    _id: "vbghtjyu7868f",
    title: "Ncert",
    author: "Shiv Khera",
    price: 500,
    actualPrice: 599,
    description: "NCERT Guide",
    category: "NCERT",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/51mCG33uzmL._SX382_BO1,204,203,200_.jpg",
    productRating: 1,
    fastDelivery: true,
    newArrival: false,
    inCart: false,
    inWishList: false,
    rating: 2,
    reviewCount:3
  },
  {
    _id: "jkhukiloytyrer",
    title: "Ncert",
    author: "Shiv Khera",
    price: 300,
    actualPrice: 399,
    description: "NCERT MCQ Book",
    category: "NCERT",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/514pVn+ccML._SY373_BO1,204,203,200_.jpg",
    productRating: 1,
    fastDelivery: true,
    newArrival: false,
    inCart: false,
    inWishList: false,
    rating: 2,
    reviewCount:5
  },
  {
    _id: "ploikujygq",
    title: "Ncert",
    author: "Shiv Khera",
    price: 300,
    actualPrice: 399,
    description: "World History-ncert",
    category: "NCERT",
    imageUrl: "https://m.media-amazon.com/images/I/61QXr5dugqL._AC_UY218_.jpg",
    productRating: 1,
    fastDelivery: true,
    newArrival: false,
    inCart: false,
    inWishList: false,
    rating: 4,
    reviewCount:4
  },
  {
    _id: "lkjuyhtgrx",
    title: "Polity",
    author: "Shiv Khera",
    price: 1000,
    actualPrice: 1999,
    description: "polity-ncert",
    category: "NCERT",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/51Fdqv1Mn2L._SX379_BO1,204,203,200_.jpg",
    productRating: 1,
    fastDelivery: true,
    newArrival: false,
    inCart: false,
    inWishList: false,
    rating: 5,
    reviewCount:5
  },
   {
    _id: "lkjuyhtgrz",
    title: "Indian History",
    author: "Shiv Khera",
    price: 1000,
    actualPrice: 1999,
    description: "Freedom Struggle",
    category: "History",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/416aKSJmFhL._SX305_BO1,204,203,200_.jpg",
    productRating: 1,
    fastDelivery: true,
    newArrival: false,
    inCart: false,
    inWishList: false,
    rating: 5,
    reviewCount:5
  },
];
