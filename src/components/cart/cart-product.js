import { useEffect } from 'react/cjs/react.development'
import './cart.css'
import {useState} from 'react'
import {useCart} from '../../contexts/cart-context'
import { GoX } from "react-icons/go";
const CartProduct=({product})=>{
  const {title,imageUrl,price}=product
  const [singleProductTotalPrice,updateTotalPrice]=useState(Number(price))
  const [count,updateCount]=useState(1)
  const isdisable=count===1?true:false
  const {setCheckoutPrice,updateQuantity,updatedCartItems,cartlistFromStorage,cartProductsId,setCartListFromStorage}=useCart()
  
  const decreaseQunatity=(product)=>{   
  
  } 

  const increaseQuantity=(product)=>{  
  
  }
useEffect(()=>{
  const quantity=updatedCartItems.filter((id)=>product._id===id).length
  updateCount(quantity);

},[updatedCartItems])

    return <>
      <div className="cart cartItem">
          <div><div className="flex-H-center-V"><img src={imageUrl} className="cart-image" alt="cart"/>
          <div><p>{title}</p>
          <p>Grand inn</p>
          </div>
          </div>
          </div>
          <p className="flex-V-center-VH">${price}</p>
          <div className="flex-H-center-VH">
              <button disabled={isdisable} onClick={()=>decreaseQunatity(product)}>-</button>
              <p>{count}</p>
              <button onClick={()=>increaseQuantity(product)}>+</button>
          </div>
          <p className="flex-V-center-VH">${singleProductTotalPrice}</p>
          <button className="like-icon icon-sm removeBtn" >
          <GoX/>
          </button>
      </div>
    </>
}

export {CartProduct}