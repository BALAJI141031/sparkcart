import "./index.css";
import { useState } from "react";
import { GoX } from "react-icons/go";
import { useCart, useWishlist } from "../../customHooks";
import {
  removeItemFromCart,
  addItemToWishlist,
  hideSnackbar,
} from "../../dryProviders";
import { useSnackbar } from "../../customHooks";

const CartProduct = ({ product }) => {
  const { dispatchWishlist, wishlistCount } = useWishlist();
  const { dispatchCart, cartCount } = useCart();
  const { title, imageUrl, price } = product;
  const [quantityPrice, setQuantityPrice] = useState(Number(price));
  const [count, setCount] = useState(1);
  const isdisable = count === 1 ? true : false;
  const { setSnackbar } = useSnackbar();
  const decreaseQunatity = (product) => {
    setQuantityPrice((prevPrice) => prevPrice - Number(product.price));
    setCount((prevCount) => prevCount - 1);
  };
  const increaseQuantity = (product) => {
    setQuantityPrice((prevPrice) => prevPrice + Number(product.price));
    setCount((prevCount) => prevCount + 1);
  };

  const removeProduct = async (product) => {
    try {
      await removeItemFromCart(product, dispatchCart, cartCount);
      setSnackbar({ status: true, payload: "out of cart!" });
      hideSnackbar(setSnackbar);
    } catch (e) {
      throw e;
    }
  };

  const addToWishList = async (product) => {
    try {
      await removeItemFromCart(product, dispatchCart, cartCount);
      await addItemToWishlist(product, dispatchWishlist, false, wishlistCount);
      setSnackbar({ status: true, payload: "wishlisted!" });
      hideSnackbar(setSnackbar);
    } catch (e) {
      throw e;
    }
  };
  return (
    <>
      <div className="cart cartItem">
        <div>
          <div className="flex-H-center-V">
            <img src={imageUrl} className="cart-image" alt="cart" />
            <div>
              <p>{title}</p>
              <p>Grand inn</p>
            </div>
          </div>
          {count === 1 && (
            <button
              className="span-style"
              onClick={() => addToWishList(product)}
            >
              Move to wishlist
            </button>
          )}
        </div>
        <p className="flex-V-center-VH">${price}</p>
        <div className="flex-H-center-VH">
          <button
            disabled={isdisable}
            onClick={() => decreaseQunatity(product)}
          >
            -
          </button>
          <p>{count}</p>
          <button onClick={() => increaseQuantity(product)}>+</button>
        </div>
        <p className="flex-V-center-VH">${quantityPrice}</p>
        <button
          className="like-icon icon-sm removeBtn"
          onClick={() => removeProduct(product)}
        >
          <GoX />
        </button>
      </div>
    </>
  );
};

export { CartProduct };
