import './cart.css'
import {useCart} from '../../contexts/cart-context'
import { IoIosJet,IoMdArrowForward } from "react-icons/io";

const Checkout=()=>{
    const {checkoutPrice}=useCart()
    return <div className="flex-V-center-VH">
    <div className="flex-V-center-VH checkout">
   <div className="cuponDiv flex-V-center-VH">
    <input placeholder="Coupon Code" className="cuponEl"/>
   
    <button class="btn  primary-icon-btn">Apply<IoIosJet/></button>
    </div> 
    <div className="flex-H-center-V">
        <p>Total</p>
        <h2 className="totalPrice">${checkoutPrice}</h2>
    </div>
    <button className="btn primary-icon-btn">Procced To CheckOut <IoMdArrowForward/></button>
    </div>
    </div>
}

export {Checkout}