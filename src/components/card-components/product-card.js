import './cards.css'
import axios from 'axios'
import { useCart } from '../../contexts/cart-context'
import { useState } from 'react'
import { useNavigate,} from "react-router-dom";
import { useWishlist } from '../../contexts/wishlist-context';
const ProductCard=({productObj})=>{
  let navigateObj = useNavigate()
  const {dispatchCart}=useCart()
  const{price,imageUrl,title,description,productRating}=productObj
  const[inCart,setInCart]=useState(false)
  const [inWishList,setWishList]=useState(false)
  const {dispatchWishlist}=useWishlist()
  const addToCart=async(productObj)=>{
    try{
      console.log("triggered")
      const response=await axios.post('/api/user/cart',{product:productObj},{
        headers:{
          authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI3OGMwYThhMy1jN2ZiLTQ0ZjgtYWUwZS1iMmU2MTM2ZjUyNzEiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.RuUtRShcJPrhxsDlO30czFOKxmunlJd62KWyLPPwZlk"
        }
      });
      setInCart(true)
      dispatchCart({type:"cart",payload:response.data.cart})
    }catch(e){
      console.error("cant add to cart")
      throw e
    }
  }
  const goToCart=() => {
    navigateObj("/cart");
  }


  const toggleToWishList=async(product)=>{
    try{
      if(!inWishList){
      const response=await axios.post('/api/user/wishlist',{
        product,
      },
      {
        headers: { authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI3OGMwYThhMy1jN2ZiLTQ0ZjgtYWUwZS1iMmU2MTM2ZjUyNzEiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.RuUtRShcJPrhxsDlO30czFOKxmunlJd62KWyLPPwZlk" },
      })

      console.log(response,"how to set")
      dispatchWishlist({type:"wishlist",payload:response.data.wishlist})
      setWishList(true)
      }
    }catch(e){
      throw e
    }
   
  }
    return <div className="flex-V-center-VH productCard"><div className="ver-card pos-rel-Ecase">
    <img src={imageUrl} alt="images" />
    <div className="flex-V-center-VH">
      <h2>{title}</h2>
      <p>{description}</p>
      <h3>${price}</h3>
      <button className={!inCart?"btn primary-btn p-card-btn":"btn primary-outlime-btn"} onClick={!inCart?()=>addToCart(productObj):goToCart}>{!inCart?"add to cart":"go to cart"}</button>
    </div>
    <div className="card-badge">
      <button className="like-icon icon-sm" onClick={()=>toggleToWishList(productObj)} id={inWishList?"wishListStyle":null}>
        <i className="fas fa-heart"></i>
      </button>
    </div>
    <div className="static-rating-container ratingBadge">
        <div className="flex-H-center-V">
       {productRating}<span className="fa fa-star fa-1x checked"></span>
    </div></div>
  </div></div>
}
export {ProductCard}