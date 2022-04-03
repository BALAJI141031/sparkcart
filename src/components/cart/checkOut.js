import "./index.css";
import { useCart } from "../../contexts/cartContext";
import { IoIosJet, IoMdArrowForward } from "react-icons/io";

const Checkout = ({ checkoutPrice }) => {
  // const {checkoutPrice}=useCart()
  return (
    <div className="flex-V-center-VH ">
      <div className="flex-V-center-VH checkout">
        <div className="cuponDiv flex-V-center-VH">
          <input placeholder="Coupon Code" className="cuponEl" />

          <button class="btn  primary-icon-btn">
            Apply
            <IoIosJet />
          </button>
        </div>
        <div className="flex-H-center-V">
          <p>Total</p>
          <h2 className="totalPrice">${checkoutPrice}</h2>
        </div>
      </div>
      <button className="btn primary-icon-btn checkout-btn">
        Procced To CheckOut <IoMdArrowForward />
      </button>
    </div>
  );
};

export { Checkout };
