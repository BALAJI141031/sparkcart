import "./index.css";
import { useState } from "react";

import { useCart, useWishlist } from "../../customHooks";
import { removeItemFromCart, addItemToWishlist } from "../../dryProviders";

const CartProduct = ({ product }) => {
  const { dispatchWishlist, wishlistCount } = useWishlist();
  const { dispatchCart, cartCount, cartTotal } = useCart();
  const { title, imageUrl, price, author, actualPrice } = product;

  const [count, setCount] = useState(1);
  const isdisable = count === 1 ? true : false;
  const decreaseQunatity = (product) => {
    setCount((prevCount) => prevCount - 1);
    dispatchCart({
      type: "cartTotalAmount",
      payload: cartTotal - product.price,
    });
  };
  const increaseQuantity = (product) => {
    setCount((prevCount) => prevCount + 1);
    dispatchCart({
      type: "cartTotalAmount",
      payload: cartTotal + product.price,
    });
  };

  const removeProduct = async (product) => {
    try {
      await removeItemFromCart(product, dispatchCart, cartCount);
    } catch (e) {
      throw e;
    }
  };

  const addToWishList = async (product) => {
    try {
      await removeItemFromCart(product, dispatchCart, cartCount);
      await addItemToWishlist(product, dispatchWishlist, false, wishlistCount);
    } catch (e) {
      throw e;
    }
  };
  return (
    <>
      {/* <div className="cart cartItem">
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
      </div> */}
      <div class="h-card flex-H" id="cartItem">
        <img src={imageUrl} class="card-image" />
        <div class="flex-V-sapce-between">
          <div>
            <h4>
              {title} ({author})
            </h4>

            <span>Rs {price}/-</span>
            <span class="strike-rate">Rs {actualPrice}/-</span>
            <p>5% OFF</p>
          </div>
          <div class="quantity">
            <strong>Quantity:</strong>
            <button
              class="delete"
              disabled={isdisable}
              onClick={() => decreaseQunatity(product)}
            >
              -
            </button>
            <div>{count}</div>
            <button class="add" onClick={() => increaseQuantity(product)}>
              +
            </button>
          </div>
          <div class="flex-v">
            <button class="primary-cta" onClick={() => removeProduct(product)}>
              Remove from Cart
            </button>
            <button
              class="secondary-cta"
              onClick={() => addToWishList(product)}
            >
              add to WishList
            </button>
          </div>
        </div>
      </div>
    </>
  );
};;

export { CartProduct };
