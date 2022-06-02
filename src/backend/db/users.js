import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    email: "adarshbalika@gmail.com",
    password: "adarshBalika1234",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    address: [{
      fullName:"Jason Dawood",
      city: "Newyork city",
      pincode: 1234678,
      street: "Raw Diamonds 7th Lane",
      state: "Newyork",
      MobileNumber:"(+91)7893293278",
      country: "USA",
      primaryAddress:true
    },{
      fullName:"Jason Russel",
      city: "Newyork city",
      pincode: 1234678,
      street: "Raw Diamonds 7th Lane",
      state: "Newyork",
      MobileNumber:"(+91)7893293278",
      country: "USA",
      primaryAddress:false
    }]
  },
];
