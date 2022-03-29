import {Headers} from '../components/cart/cart-headers'
import {CartProduct} from '../components/cart/cart-product'
import {Checkout} from '../components/cart/checkOut'
import { useCart } from '../contexts/cart-context'
const Cart=()=>{
    const {cart,checkoutPrice}=useCart()
    console.log(checkoutPrice,"here at one step back",cart)    
      return <>
        <Headers/>
        <hr/>
         {cart.length!==0?cart.map((item)=> <CartProduct product={item}/>):<h1>cart is empty</h1>}
        <Checkout checkoutPrice={checkoutPrice}/>  
      </>
  }
  
  export {Cart}