import "./index.css";
import { GoX } from "react-icons/go";
import { useState } from "react";
import axios from "axios";
import { useCart, useNavigate, useWishlist } from "../../customHooks";
import { addItemToCart } from "../../dryProviders";
const WishlistCard = ({ productObj }) => {
  const navigate = useNavigate();
  const [inCart, setButtonText] = useState(false);
  const { dispatchCart, cartCount, cart } = useCart();
  let cartItems = [];
  for (let i = 0; i < cart.length; i++) {
    cartItems.push(cart[i]._id);
  }
  const moveToCart = async (product) => {
    try {
      // const response=await axios.post('/api/user/cart',{product},{
      //   headers:{
      //     authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI3MTUxN2NmOS05MTg4LTRlNGYtOWM1MS0xMzMxZWE1ZThkZmQiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.WTkYnS_dAUXq8sBn-GKoX0BC6ZJKNpL8Q_CNUzlebJI"
      //   }
      // });
      // setButtonText(true)
      // dispatchCart({type:"cart",payload:{cart:response.data.cart,cartCount:cartCount+1}})
      await addItemToCart(product, dispatchCart, setButtonText, cartCount);
    } catch (e) {
      console.error("error while adding item into cart", e);
    }
  };
  const gotoCart = () => {
    navigate("/cart");
  };

  const cartHandler = async (handlerObj) => {
    try {
      const { type, payload } = handlerObj;
      switch (type) {
        case "navigate_to_cart":
          return gotoCart(navigate);
        default:
          return await addItemToCart(
            payload,
            dispatchCart,
            setButtonText,
            cartCount
          );
      }
    } catch (e) {
      throw e;
    }
  };

  const { dispatchWishlist, wishlistCount } = useWishlist();
  const { price, imageUrl, title, description, productRating } = productObj;

  const removeFromWishlist = async (product) => {
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
      // setToWishlist(false)
    } catch (e) {
      throw e;
    }
  };

return (
  <div className="flex-V-center-VH productCard">
    <div className="ver-card pos-rel-Ecase">
      <img src={imageUrl} alt="images" />
      <div className="flex-V-center-VH">
        <h3>{title}</h3>
        <p>{description}</p>
        <h4>${price}</h4>
        <button
          className={
            !inCart && !cartItems.includes(productObj._id)
              ? "primary-cta"
              : "secondary-cta"
          }
          id="cta"
          onClick={
            inCart || cartItems.includes(productObj._id)
              ? () => cartHandler({ type: "navigate_to_cart" })
              : () => cartHandler({ type: "add_to_cart", payload: productObj })
          }
        >
          {!inCart && !cartItems.includes(productObj._id)
            ? "Add to cart"
            : "Go to cart"}
        </button>
      </div>
      <div className="card-badge">
        <button
          className="like-icon icon-sm"
          onClick={() => removeFromWishlist(productObj)}
        >
          <GoX />
        </button>
      </div>
      <div className="static-rating-container ratingBadge">
        <div className="flex-H-center-V">
          {productRating}
          <span className="fa fa-star fa-1x checked"></span>
        </div>
      </div>
    </div>
  </div>
);
};

export { WishlistCard };
