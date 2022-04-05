import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products =[
  {
    _id: uuid(),
    title: "nonveg biriyani",
    author: "Shiv Khera",
    price: "5000",
    vegetarianP: false,
    description:"India's premium Food you cant uy anywhere",
    imageUrl:"https://b.zmtcdn.com/data/dish_photos/ff4/9f479fb2450b8c8cabca1b8cf53ecff4.jpg",
    productRating:4,
    fastDelivery:false
  },
  {
    _id: uuid(),
    title: "veg biriyani 2",
    author: "Junaid Qureshi",
    price: "3000",
    vegetarianP: true,
    description:"India's premium Food you cant uy anywhere",
    imageUrl:"https://b.zmtcdn.com/data/dish_photos/ff4/9f479fb2450b8c8cabca1b8cf53ecff4.jpg",
    productRating:5,
    fastDelivery:false,
  },
  {
    _id: uuid(),
    title: "Think and Grow Rich nonveg",
    author: "Shiv Khera",
    price: "1000",
    description:"India's premium Food you cant uy anywhere",
    vegetarianP: false,
    imageUrl:"https://b.zmtcdn.com/data/dish_photos/ff4/9f479fb2450b8c8cabca1b8cf53ecff4.jpg",
    productRating:2,
    fastDelivery:true,
  },
  {
    _id: uuid(),
    title: "balaji spicy  veg",
    author: "Shiv Khera",
    price: "1000",
    description:"India's premium Food you cant uy anywhere",
    vegetarianP: true,
    imageUrl:"https://b.zmtcdn.com/data/dish_photos/ff4/9f479fb2450b8c8cabca1b8cf53ecff4.jpg",
    productRating:1,
    fastDelivery:true
  }
];
