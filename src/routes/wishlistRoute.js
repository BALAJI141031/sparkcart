
import {WishlistCard} from '../components/card-components/wishList-card'
import {useWishlist} from '../contexts/wishlist-context'
const Wishlist=()=>{
    const {wishlist}=useWishlist()
    console.log(wishlist,"to render on screen")
    return <>
      <h1>My Wishlist</h1>
      {wishlist.length!==0?wishlist.map((item)=><WishlistCard productObj={item} key={item._id}/>):<h1>empty</h1>}
    </>
}
export {Wishlist}