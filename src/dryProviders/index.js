import axios from "axios";
import Cookies from "js-cookie";

const addItemToCart = async (
  product,
  dispatchCart,
  setButtonText,
  cartCount
) => {
  try {
    const response = await axios.post(
      "/api/user/cart",
      { product },
      {
        headers: {
          authorization: Cookies.get("jwt_token"),
        },
      }
    );

    setButtonText(true);
    dispatchCart({
      type: "cart",
      payload: { cart: response.data.cart, cartCount: cartCount + 1 },
    });
    let initalCartTotal = response.data.cart.reduce(
      (prevAmount, currAmmount) => prevAmount + currAmmount.actualPrice,
      0
    );

    dispatchCart({
      type: "cartTotalAmount",
      payload: initalCartTotal,
    });

    let discount = 0;
    for (let i = 0; i < response.data.cart.length; i++) {
      discount =
        discount +
        (response.data.cart[i].actualPrice - response.data.cart[i].price);
    }
    dispatchCart({
      type: "discountAmount",
      payload: discount,
    });
    return response;
  } catch (e) {
    console.log("error while adding item into cart", e);
  }
};

const removeItemFromCart = async (product, dispatchCart, cartCount) => {
  try {
    const updatedCartResponse = await axios.delete(
      `/api/user/cart/${product._id}`,
      {
        headers: {
          authorization: Cookies.get("jwt_token"),
        },
      }
    );
    dispatchCart({
      type: "cart",
      payload: {
        cart: updatedCartResponse.data.cart,
        cartCount: cartCount - 1,
      },
    });
  } catch (e) {
    throw e;
  }
};

const addItemToWishlist = async (
  product,
  dispatchWishlist,
  setToWishlist,
  wishlistCount
) => {
  try {
    const response = await axios.post(
      "/api/user/wishlist",
      { product },
      {
        headers: {
          authorization: Cookies.get("jwt_token"),
        },
      }
    );

    dispatchWishlist({
      type: "wishlist",
      payload: {
        wishlist: response.data.wishlist,
        wishlistCount: wishlistCount + 1,
        wishListed: true,
      },
    });
    if (setToWishlist) setToWishlist(true);
  } catch (e) {
    throw e;
  }
};

const removeItemFromWishlist = async (
  product,
  dispatchWishlist,
  setToWishlist,
  wishlistCount
) => {
  try {
    const response = await axios.delete(`/api/user/wishlist/${product._id}`, {
      headers: {
        authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI3MTUxN2NmOS05MTg4LTRlNGYtOWM1MS0xMzMxZWE1ZThkZmQiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.WTkYnS_dAUXq8sBn-GKoX0BC6ZJKNpL8Q_CNUzlebJI",
      },
    });
    dispatchWishlist({
      type: "wishlist",
      payload: {
        wishlist: response.data.wishlist,
        wishlistCount: wishlistCount - 1,
        wishListed: false,
      },
    });
    setToWishlist(false);
  } catch (e) {
    throw e;
  }
};

const gotoCart = (navigate) => {
  navigate("/cart");
};

const gotoProductsRoute = (navigate) => {
  navigate("/products");
};

const gotoWishlist = (navigate) => {
  navigate("/wishlist");
};

const loginUser = async (payload) => {
  try {
    const loginResponse = await axios.post("/api/auth/login", payload);
    console.log(loginResponse, "checking in calls");
    return loginResponse;
  } catch (e) {
    throw e;
  }
};

const signupUser = async (payload) => {
  try {
    const loginResponse = await axios.post("/api/auth/signup", payload);
    return loginResponse;
  } catch (e) {
    throw e;
  }
};

const getProduct = async (id) => {
  try {
    console.log(`/api/products/${id}`)
    const response = await axios.get(`/api/products/${id}`)
    return response
  } catch (e) {
    console.log(e)
  }
}


const searchItems = async(text) => {
  try {
    const response=await axios.get(`/api/products?s=${text}`)
    return response
    
  } catch (e) {
    throw e
    
  }
}

// api is not there
// const getUserDetials = async () => {
//   try{
//    const response=await axios.get()
//   } catch (e) {
//     throw e
//   }
// }

export {
  addItemToCart,
  gotoCart,
  addItemToWishlist,
  removeItemFromWishlist,
  gotoWishlist,
  removeItemFromCart,
  gotoProductsRoute,
  loginUser,
  signupUser,
  searchItems,
  getProduct
};
