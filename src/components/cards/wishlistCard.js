import './index.css'
import { GoX } from "react-icons/go";
import { useWishlist } from '../../contexts/wishlist-context';
const WishlistCard=({productObj})=>{
    const {dispatchWishlist}=useWishlist()
    const{price,imageUrl,title,description,productRating}=productObj
  const removeItem=async(product)=>{
    try{
      const response= await axios.delete(`/api/user/wishlist/${product._id}`,{headers:{authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI3OGMwYThhMy1jN2ZiLTQ0ZjgtYWUwZS1iMmU2MTM2ZjUyNzEiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.RuUtRShcJPrhxsDlO30czFOKxmunlJd62KWyLPPwZlk"}})
      dispatchWishlist({type:"wishlist",payload:response.data.wishlist})
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
      <button className="btn primary-btn p-card-btn">add to cart</button>
    </div>
    <div className="card-badge">
      <button className="like-icon icon-sm" onClick={()=>removeItem(productObj)}>
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