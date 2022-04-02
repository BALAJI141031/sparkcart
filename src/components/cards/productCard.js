import './index.css'
import { useState } from 'react'
import {useCart,useNavigate} from '../../customHooks'
import axios from 'axios'
const ProductCard=({productObj})=>{
  const{price,imageUrl,title,description,productRating,readyToDeliver}=productObj

  const {dispatchCart,wishlistCount,cartCount}=useCart()
  
  const navigate=useNavigate()
    const [inCart,setButtonText]=useState(false)

    const addItemToCart=async(product)=>{
      try{
        console.log(product,"entered intotry")
        const response=await axios.post('/api/user/cart',{product},{
          headers:{
            authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI3MTUxN2NmOS05MTg4LTRlNGYtOWM1MS0xMzMxZWE1ZThkZmQiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.WTkYnS_dAUXq8sBn-GKoX0BC6ZJKNpL8Q_CNUzlebJI"
          }
        });
        setButtonText(true)
        dispatchCart({type:"cart",payload:{cart:response.data.cart,cartCount:cartCount+1}})

      }catch(e){
        console.error("error while adding item into cart",e)
      }

    }

    const gotoCart=()=>{
      navigate('/cart')
    }

    return <div className="flex-V-center-VH "><div className="ver-card pos-rel-Ecase productCard">
    <img src={imageUrl} alt="images" />
    <div className="flex-V-center-VH text-align-center" >
      <h3 >{title}</h3>
      <p>{description}</p>
      <h4>${price}</h4>
      <button  className={!inCart?"btn primary-btn p-card-btn":"btn primary-outlime-btn"} onClick={inCart?()=>gotoCart():()=>addItemToCart(productObj)} >{!inCart?'Add to cart':"Go to cart"}</button>        
    </div>
    <div className="card-badge" >
      <button className="like-icon icon-sm">
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