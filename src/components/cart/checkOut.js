import "./index.css";
import { useCart } from "../../contexts/cartContext";
import { paymentHandler,useNavigate } from '../../customHooks'



const Checkout = ({ checkoutPrice }) => {
  const { cartCount, cartTotal, discount } = useCart();


  const navigate=useNavigate()
  
  const handleTransaction = async () => {
    let transactionStatus = await paymentHandler(cartTotal, navigate);
    console.log("coming immediately")
    
  }

  return (
    <div class="price-card  ">
      <strong>Price Detials</strong>
      <hr />
      <div>
        <p>Price ({cartCount} items)</p>
        <p>{cartTotal}</p>
      </div>
      <div>
        <p>Discount</p>
        <p>{discount}</p>
      </div>
      <div>
        <p>DeliveryCharges</p>
        <p>59</p>
      </div>
      <hr />
      <div>
        <strong>Total Amount</strong>
        <strong>Rs/- {cartTotal - discount + 59} </strong>
      </div>
      <hr />
      <strong>You will save {discount} on this order</strong>
      <div class="flex-v">
        <button class="primary-cta cursor-pointer" id="cta" onClick={handleTransaction}>
          Place Order
        </button>
      </div>
    </div>
  );
};

export { Checkout };
