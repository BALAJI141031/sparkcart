import "./index.css";
import { useState } from "react";

import { useCart, useWishlist, useNavigate } from "../../customHooks";
import { removeItemFromCart, addItemToWishlist } from "../../dryProviders";

const CartProduct = ({ product }) => {
  const navigate = useNavigate();
  const { dispatchWishlist, wishlistCount, wishlist } = useWishlist();
  const { dispatchCart, cartCount, cartTotal, discount } = useCart();
  const { title, imageUrl, price, author, actualPrice, _id } = product;

  const [count, setCount] = useState(1);
  const isdisable = count === 1 ? true : false;

  let wishListItems = [];
  for (let i = 0; i < wishlist.length; i++) {
    wishListItems.push(wishlist[i]._id);
  }

  const decreaseQunatity = (product) => {
    setCount((prevCount) => prevCount - 1);
    dispatchCart({
      type: "cartTotalAmount",
      payload: cartTotal - product.actualPrice,
    });

    dispatchCart({
      type: "discountAmount",
      payload: discount - (product.actualPrice - product.price),
    });
  };
  const increaseQuantity = (product) => {
    setCount((prevCount) => prevCount + 1);
    dispatchCart({
      type: "cartTotalAmount",
      payload: cartTotal + product.actualPrice,
    });
    dispatchCart({
      type: "discountAmount",
      payload: discount + (product.actualPrice - product.price),
    });
  };

  const removeProduct = async (product) => {
    try {
      await removeItemFromCart(product, dispatchCart, cartCount);
      dispatchCart({
        type: "cartTotalAmount",
        payload: cartTotal - count * product.actualPrice,
      });

      dispatchCart({
        type: "discountAmount",
        payload: discount - count * (product.actualPrice - product.price),
      });
    } catch (e) {
      throw e;
    }
  };

  const addToWishList = async (product) => {
    try {
      if (!wishListItems.includes(product._id)) {
        await removeItemFromCart(product, dispatchCart, cartCount);
        await addItemToWishlist(
          product,
          dispatchWishlist,
          false,
          wishlistCount
        );
        dispatchCart({
          type: "cartTotalAmount",
          payload: cartTotal - count * product.actualPrice,
        });

        dispatchCart({
          type: "discountAmount",
          payload: discount - count * (product.actualPrice - product.price),
        });
      } else {
        // show message that already wishlisted or navigate to wishist
        navigate("/wishlist");
      }
    } catch (e) {
      throw e;
    }
  };
  return (
    <>
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
              {wishListItems.includes(_id)
                ? "Go To WishList"
                : "Add To Wishlist"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};;

export { CartProduct };
