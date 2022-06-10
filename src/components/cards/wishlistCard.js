import "./index.css";
import { GoX } from "react-icons/go";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useCart, useNavigate, useWishlist,useNotifyUser } from "../../customHooks";
import { addItemToCart } from "../../dryProviders";
const WishlistCard = ({ productObj }) => {
  const navigate = useNavigate();
  const { toast } = useNotifyUser();
  const [inCart, setButtonText] = useState(false);
  const { dispatchCart, cartCount, cart } = useCart();
  let cartItems = [];
  for (let i = 0; i < cart.length; i++) {
    cartItems.push(cart[i]._id);
  }
  const moveToCart = async (product) => {
    try {
      const response=await addItemToCart(product, dispatchCart, setButtonText, cartCount);
    } catch (e) {
      toast.warning("error while adding item into cart!!");
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
      toast.warning("Unexpected Error!!");
    }
  };

  const { dispatchWishlist, wishlistCount } = useWishlist();
  const { price, imageUrl, title, description, productRating } = productObj;

  const removeFromWishlist = async (product) => {
    try {

      // have to use provider from dry providers
      const response = await axios.delete(`/api/user/wishlist/${product._id}`, {
        headers: {
          authorization:Cookies.get("jwt_token"),
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
    } catch (e) {
      toast.warning("Unexpected Error!!");
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
