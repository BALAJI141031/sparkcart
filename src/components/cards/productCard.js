import "./index.css";
import { useState } from "react";
import { useCart, useNavigate, useWishlist,useNotifyUser } from "../../customHooks";
import {
  addItemToCart,
  gotoCart,
  removeItemFromWishlist,
  addItemToWishlist,
} from "../../dryProviders";
import Cookies from "js-cookie";
const ProductCard = ({ productObj, cartItems, wishListItems }) => {
  const { toast } = useNotifyUser();
  const { price, imageUrl, title, description, productRating, _id } =
    productObj;
  const [wishListed, setToWishlist] = useState(false);
  const { dispatchCart, cartCount, cartTotal } = useCart();
  const { dispatchWishlist, wishlistCount } = useWishlist();
  const navigate = useNavigate();
  const [inCart, setButtonText] = useState(false);

  const toggleWishlist = async (handlerObj) => {
    try {
      if (!wishListed && !wishListItems.includes(_id)) {
        await addItemToWishlist(
          handlerObj,
          dispatchWishlist,
          setToWishlist,
          wishlistCount
        );
      } else {
        await removeItemFromWishlist(
          handlerObj,
          dispatchWishlist,
          setToWishlist,
          wishlistCount
        );
      }
    } catch (e) {
      toast.warning("Unexpected Error!!");
    }
  };

  const cartHandler = async (handlerObj) => {
    try {
      const { type, payload } = handlerObj;
      switch (type) {
        case "navigate_to_cart":
          return gotoCart(navigate);
        default:
          if (Cookies.get("jwt_token")) {
            await addItemToCart(
              payload,
              dispatchCart,
              setButtonText,
              cartCount,
              cartTotal
            );
          } else {
            toast.warning("Please Login!!");
            navigate("/user/login");
          }
          break;
      }
    } catch (e) {
      toast.warning("Unexpected Error!!");
    }
  };

  return (
    <div className="flex-V-center-VH " onClick={()=>navigate(`/products/${_id}`)}>
      <div className="ver-card pos-rel-Ecase productCard">
        <img src={imageUrl} alt="images" />
        <div className="flex-V-center-VH text-align-center">
          <h3>{title}</h3>
          <p>{description}</p>
          <h4>${price}</h4>
          <button
            className={
              !inCart && !cartItems.includes(_id)
                ? "primary-cta"
                : "secondary-cta"
            }
            id="cta"
           
            onClick={
              inCart || cartItems.includes(_id)
                ? (e) => {
                   e.stopPropagation()
                  return cartHandler({ type: "navigate_to_cart" })
                }
                : (e) => {
                  e.stopPropagation()
                  return cartHandler({ type: "add_to_cart", payload: productObj })
                  
                }
            } 
          >
            {!inCart && !cartItems.includes(_id) ? "Add to cart" : "Go to cart"}
          </button>
        </div>
        <div className="card-badge">
          <button
            className="like-icon icon-sm"
            onClick={(e) => {
              e.stopPropagation()
              return toggleWishlist(productObj)
            }
            }
            id={
              wishListed || wishListItems.includes(_id) ? "wishListStyle" : null
            }
          >
            <i className="fas fa-heart"></i>
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
export { ProductCard };
