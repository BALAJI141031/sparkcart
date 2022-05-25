import { Checkout, CartProduct, Headers, Navbar } from "../components";
import { useCart } from "../contexts/cartContext";
import { useSnackbar } from "../customHooks";
import { showSnackbar } from "../dryProviders";
const Cart = () => {
  const { cart, checkoutPrice } = useCart();
  const { snackbar } = useSnackbar();
  return (
    <>
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
      {snackbar.status && showSnackbar(snackbar.payload)}
    </>
  );
};

export { Cart };
