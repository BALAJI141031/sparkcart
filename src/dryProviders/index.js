import axios from "axios";
import { useCart } from "../customHooks";

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
          authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI3MTUxN2NmOS05MTg4LTRlNGYtOWM1MS0xMzMxZWE1ZThkZmQiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.WTkYnS_dAUXq8sBn-GKoX0BC6ZJKNpL8Q_CNUzlebJI",
        },
      }
    );

    setButtonText(true);
    dispatchCart({
      type: "cart",
      payload: { cart: response.data.cart, cartCount: cartCount + 1 },
    });
    let initalCartTotal = response.data.cart.reduce(
      (prevAmount, currAmmount) => prevAmount + currAmmount.price,
      0
    );

    let discount = 0;
    for (let i = 0; i < response.data.cart.length; i++) {
      discount =
        discount +
        response.data.cart[i].actualPrice -
        response.data.cart[i].price;
    }

    console.log(discount, "why nan");

    dispatchCart({
      type: "cartTotalAmount",
      payload: initalCartTotal,
    });
    dispatchCart({
      type: "discountAmount",
      payload: discount,
    });
  } catch (e) {
    console.error("error while adding item into cart", e);
  }
};

const removeItemFromCart = async (product, dispatchCart, cartCount) => {
  try {
    const updatedCartResponse = await axios.delete(
      `/api/user/cart/${product._id}`,
      {
        headers: {
          authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI3OGMwYThhMy1jN2ZiLTQ0ZjgtYWUwZS1iMmU2MTM2ZjUyNzEiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.RuUtRShcJPrhxsDlO30czFOKxmunlJd62KWyLPPwZlk",
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
          authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI3MTUxN2NmOS05MTg4LTRlNGYtOWM1MS0xMzMxZWE1ZThkZmQiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.WTkYnS_dAUXq8sBn-GKoX0BC6ZJKNpL8Q_CNUzlebJI",
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

// snackbar
const showSnackbar = (type, payload) => {
  console.log(payload);
  return (
    <div class={type}>
      <p>{payload}</p>
      <span id="closeBtn">×</span>
    </div>
  );
};

const hideSnackbar = (setSnackbar) => {
  setTimeout(
    () =>
      setSnackbar({
        status: false,
      }),
    1500
  );
};

export {
  addItemToCart,
  gotoCart,
  addItemToWishlist,
  removeItemFromWishlist,
  gotoWishlist,
  removeItemFromCart,
  showSnackbar,
  hideSnackbar,
  gotoProductsRoute,
  loginUser,
  signupUser,
};
