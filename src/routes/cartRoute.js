import {Headers} from '../components/cart/cart-headers'
import {CartProduct} from '../components/cart/cart-product'
import {Checkout} from '../components/cart/checkOut'
import { useCart } from '../contexts/cart-context'
const Cart=()=>{
    const {cart}=useCart()
    
      return <>
        <Headers/>
        <hr/>
         {cart.length!==0?<CartProduct />:<h1>cart is empty</h1>}
        <Checkout/>
  
      </>
  }
  
  export {Cart}