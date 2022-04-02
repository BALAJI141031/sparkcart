import './index.css'
import { GoX } from "react-icons/go";
import { useWishlist } from '../../contexts/wishlistContext';
import axios from 'axios'


const WishlistCard=({productObj})=>{

    const {dispatchWishlist,wishlistCount}=useWishlist()
    const{price,imageUrl,title,description,productRating}=productObj
  
      const removeFromWishlist=async(product)=>{
        try{
          const response=await axios.delete(`/api/user/wishlist/${product._id}`,{headers:{authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI3MTUxN2NmOS05MTg4LTRlNGYtOWM1MS0xMzMxZWE1ZThkZmQiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.WTkYnS_dAUXq8sBn-GKoX0BC6ZJKNpL8Q_CNUzlebJI"}})
   
          dispatchWishlist({type:"wishlist",payload:{wishlist:response.data.wishlist,wishlistCount:wishlistCount-1,wishListed:false}})
          // setToWishlist(false)
      
        }catch(e){
          throw e
        }
      }

  return <div className="flex-V-center-VH productCard"><div className="ver-card pos-rel-Ecase">
    <img src={imageUrl} alt="images" />
    <div className="flex-V-center-VH">
      <h3>{title}</h3>
      <p>{description}</p>
      <h4>${price}</h4>
      <button className="btn primary-btn p-card-btn">add to cart</button>
    </div>
    <div className="card-badge">
      <button className="like-icon icon-sm" onClick={()=>removeFromWishlist(productObj)}>
        <GoX/>
      </button>
    </div>
    <div className="static-rating-container ratingBadge">
        <div className="flex-H-center-V">
       {productRating}<span className="fa fa-star fa-1x checked"></span>
    </div></div>

  </div></div>
}

export {WishlistCard}