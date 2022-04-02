
import {Checkout,CartProduct,Headers,Navbar } from '../components'
import { useCart } from '../contexts/cartContext'
const Cart=()=>{
    const {cart,checkoutPrice}=useCart()
     
      return <>
       {/* <Navbar/>  */}
        <Headers/>
        <hr/>
         {cart.length!==0?cart.map((item)=> <CartProduct product={item}/>):<h1 className="text-align-center">cart is empty</h1>}
        <Checkout checkoutPrice={checkoutPrice}/>  
      </>
  }
  
  export {Cart}