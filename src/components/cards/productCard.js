import "./index.css";
import { useState } from "react";
import { useCart, useNavigate, useWishlist } from "../../customHooks";
import {
  addItemToCart,
  gotoCart,
  removeItemFromWishlist,
  addItemToWishlist,
  hideSnackbar,
} from "../../dryProviders";
import { useSnackbar } from "../../customHooks";

const ProductCard = ({ productObj }) => {
  const { price, imageUrl, title, description, productRating } = productObj;
  const [wishListed, setToWishlist] = useState(false);
  const { dispatchCart, cartCount } = useCart();
  const { dispatchWishlist, wishlistCount } = useWishlist();
  const navigate = useNavigate();
  const [inCart, setButtonText] = useState(false);
  const { setSnackbar } = useSnackbar();
  const toggleWishlist = async (handlerObj) => {
    try {
      if (!wishListed) {
        await addItemToWishlist(
          handlerObj,
          dispatchWishlist,
          setToWishlist,
          wishlistCount
        );
        setSnackbar({ status: true, payload: "wishListed!" });
        hideSnackbar(setSnackbar);
      } else {
        await removeItemFromWishlist(
          handlerObj,
          dispatchWishlist,
          setToWishlist,
          wishlistCount
        );
        setSnackbar({ status: true, payload: "out of list!" });
        hideSnackbar(setSnackbar);
      }
    } catch (e) {
      throw e;
    }
  };

  const cartHandler = async (handlerObj) => {
    try {
      const { type, payload } = handlerObj;
      switch (type) {
        case "navigate_to_cart":
          return gotoCart(navigate);
        default:
          await addItemToCart(payload, dispatchCart, setButtonText, cartCount);

          setSnackbar({ status: true, payload: "added to cart" });
          hideSnackbar(setSnackbar);

          break;
      }
    } catch (e) {
      throw e;
    }
  };

  return (
    <div className="flex-V-center-VH ">
      <div className="ver-card pos-rel-Ecase productCard">
        <img src={imageUrl} alt="images" />
        <div className="flex-V-center-VH text-align-center">
          <h3>{title}</h3>
          <p>{description}</p>
          <h4>${price}</h4>
          <button
            className="primary-cta"
            onClick={
              inCart
                ? () => cartHandler({ type: "navigate_to_cart" })
                : () =>
                    cartHandler({ type: "add_to_cart", payload: productObj })
            }
          >
            {!inCart ? "Add to cart" : "Go to cart"}
          </button>
        </div>
        <div className="card-badge">
          <button
            className="like-icon icon-sm"
            onClick={() => toggleWishlist(productObj)}
            id={wishListed ? "wishListStyle" : null}
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
