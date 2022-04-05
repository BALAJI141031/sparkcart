import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    title: "Veg recipes",
    author: "Shiv Khera",
    price: "5000",
    vegetarianP: false,
    description: "India's premium Food ",
    imageUrl:
      "https://b.zmtcdn.com/data/dish_photos/ff4/9f479fb2450b8c8cabca1b8cf53ecff4.jpg",
    productRating: 4,
    fastDelivery: false,
    readyToDeliver: false,
  },
  {
    _id: uuid(),
    title: "NonVeg recipes",
    author: "Junaid Qureshi",
    price: "3000",
    vegetarianP: true,
    description: "India's premium Food ",
    imageUrl:
      "https://b.zmtcdn.com/data/dish_photos/ff4/9f479fb2450b8c8cabca1b8cf53ecff4.jpg",
    productRating: 5,
    fastDelivery: false,
    readyToDeliver: true,
  },
  {
    _id: uuid(),
    title: "NonVeg recipes",
    author: "Junaid Qureshi",
    price: "3000",
    vegetarianP: true,
    description: "India's premium Food ",
    imageUrl:
      "https://b.zmtcdn.com/data/dish_photos/ff4/9f479fb2450b8c8cabca1b8cf53ecff4.jpg",
    productRating: 5,
    fastDelivery: false,
    readyToDeliver: true,
  },
];
