import './index.css'
import {useState} from 'react'
import {Button} from '../index'
import {useCart} from '../../contexts/cartContext'
import { GoX } from "react-icons/go";
import axios  from "axios";

const CartProduct=({product})=>{
  const {dispatchCart,cartCount}=useCart()
  const {title,imageUrl,price}=product
  const[quantityPrice,setQuantityPrice]=useState(Number(price))
  const [count,setCount]=useState(1)
  const isdisable=count===1?true:false
  const decreaseQunatity=(product)=>{  
    setQuantityPrice((prevPrice)=>prevPrice-Number(product.price))
    setCount((prevCount)=>prevCount-1)
  } 
  const increaseQuantity=(product)=>{
    setQuantityPrice((prevPrice)=>prevPrice+Number(product.price))
    setCount((prevCount)=>prevCount+1)
  }

  const removeProduct=async (product)=>{
    try{
      const updatedCartResponse=await axios.delete(`/api/user/cart/${product._id}`,{headers:{authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI3OGMwYThhMy1jN2ZiLTQ0ZjgtYWUwZS1iMmU2MTM2ZjUyNzEiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.RuUtRShcJPrhxsDlO30czFOKxmunlJd62KWyLPPwZlk"}})
      dispatchCart({type:"cart",payload:{cart:updatedCartResponse.data.cart,cartCount:cartCount-1}})
    }catch(e){
      throw e
    }   
  }

  const addToWishList=async(product)=>{
    try{
      await removeProduct(product)
    }catch(e){
      throw e
    }

  }
    return <>
      <div className="cart cartItem">
        
          <div><div className="flex-H-center-V"><img src={imageUrl} className="cart-image" alt="cart"/>
          <div><p>{title}</p>
          <p>Grand inn</p>
          </div>
          </div>  
          {count===1&&<button className="span-style" onClick={()=>addToWishList(product)}>Move to wishlist</button> }
          </div>          
          <p className="flex-V-center-VH">${price}</p>
          <div className="flex-H-center-VH">
              <button disabled={isdisable} onClick={()=>decreaseQunatity(product)}>-</button>
              <p>{count}</p>
              <button onClick={()=>increaseQuantity(product)}>+</button>
          </div>
          <p className="flex-V-center-VH">${quantityPrice}</p>
          <button className="like-icon icon-sm removeBtn" onClick={()=>removeProduct(product)}>
          <GoX/>
          </button>
      </div>
    </>
}

export {CartProduct}