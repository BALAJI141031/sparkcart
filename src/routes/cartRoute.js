import { Checkout, CartProduct, Headers, Navbar } from "../components";
import { useCart } from "../contexts/cartContext";
const Cart = () => {
  const { cart, checkoutPrice } = useCart();

  return (
    <>
      <Navbar />
      <Headers />
      <hr />
      {cart.length !== 0 ? (
        cart.map((item) => <CartProduct product={item} />)
      ) : (
        <div className="text-align-center">
          <h1>cart is empty</h1>
        </div>
      )}
      <Checkout checkoutPrice={checkoutPrice} />
    </>
  );
};

export { Cart };
