
import {WishlistCard,Navbar} from '../components'
import {useWishlist} from '../contexts/wishlistContext'
const Wishlist=()=>{
    const {wishlist}=useWishlist()
    return <>
    <Navbar/>
      <h1 className="text-align-center">My Wishlist</h1>
     
      <div className="flex-wrap">
        {wishlist.length!==0 && wishlist.map((item)=> <WishlistCard productObj={item} key={item._id}/>)}
      </div>
      {wishlist.length===0 && <h2 className="text-align-center">wishlist is empty explore more</h2>}
    </>
}
export {Wishlist}