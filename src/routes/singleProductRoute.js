import { useEffect, useState } from 'react'
import {MdDeliveryDining,BsFileEarmarkCheck,MdPayment} from '../icons'
import './index.css'
import {getProduct} from '../dryProviders/index'
import { useParams,useNavigate } from 'react-router-dom'
import { AboutProduct } from '../components'
import { useCart,useNotifyUser,useWishlist } from "../customHooks";
import Cookies from 'js-cookie'
import {
  addItemToCart,
  gotoCart,
  removeItemFromWishlist,
  addItemToWishlist,
} from "../dryProviders";

const fiveStars=[1,2,3,4,5]

export function Product() {
  const [product, setProduct] = useState(null)
  const { dispatchWishlist, wishlistCount, wishlist } = useWishlist();
  const { cart } = useCart();
  const { toast } = useNotifyUser();
   const { dispatchCart,cartCount,cartTotal } = useCart();
  const { id } = useParams()
  const [inCart, setButtonText] = useState(false);
  const navigate=useNavigate()
  // make dry function for this it is repeting in many places
  let cartItems = [];
  for (let i = 0; i < cart.length; i++) {
    cartItems.push(cart[i]._id);
  }

  const cartHandler = async (handlerObj) => {
    try {
      const { type, payload } = handlerObj;
      switch (type) {
        case "navigate_to_cart":
          return gotoCart(navigate);
        default:
          if (Cookies.get("jwt_token")) {
            await addItemToCart(
              payload,
              dispatchCart,
              setButtonText,
              cartCount,
              cartTotal
            );
          } else {
            toast.warning("Please Login!!");
            navigate("/user/login");
          }
          break;
      }
    } catch (e) {
      throw e;
    }
  };

  // wishlist 
  let wishListItems = [];
  for (let i = 0; i < wishlist.length; i++) {
    wishListItems.push(wishlist[i]._id);
  }

  const addToWishList = async (product) => {
    try {
      if (!wishListItems.includes(product._id)) {
        await addItemToWishlist(
          product,
          dispatchWishlist,
          false,
          wishlistCount
        ); 
      } else {
        // show message that already wishlisted or navigate to wishist
        navigate("/wishlist");
      }
    } catch (e) {
      throw e;
    }
  };
  

    useEffect(async() => { 
        const productResponse = await getProduct(id)
        console.log(productResponse)
        setProduct(productResponse.data.product)
    }, 
      [id])
  return <>
    <div className="single-product">
        {product && <img src={product.imageUrl} />}
        {product && <div className='product-detials'>
            <h1>{product.title}</h1>
            <p >{product.author}</p>
            <div className='flex-H-center-V'>
                <p style={{'font-weight': "800" }}>Rs {product.price}/-</p>
            <p className="strike-rate" style={{"margin-left":"10px"}}>Rs {product.actualPrice}/-</p>    
            <p style={{ "margin-left": "10px", 'font-weight': "800" }} className="text-grey">5% OFF</p>
        </div>
        <div className='static-rating-container'>
          {fiveStars.map((indexRating)=> product.rating>=indexRating? <span class="fa fa-star fa-2x checked"></span>: <span class="fa fa-star fa-2x"></span>)}
          ({product.reviewCount} Reviews)
        </div>
            <p className='text-grey'>Inclusive of All Taxes</p>
                <div>
                {[{ text: "FastDelivery", icon: <MdDeliveryDining/> }, { text: "Instock", icon: <BsFileEarmarkCheck/> }, { text: "Emi Starts at 105", icon: <MdPayment/> }].map((detials) => <AboutProduct detials={ detials}/>)}
            </div>
             <div class="flex-H product-cta-div">
          <button
            className={
              !inCart && !cartItems.includes(id)
                ? "primary-cta"
                : "secondary-cta"
            }
            id="cta"
           
            onClick={
              inCart || cartItems.includes(id)
                ? (e) =>  cartHandler({ type: "navigate_to_cart" })
                
                : (e) =>  cartHandler({ type: "add_to_cart", payload: product })        
            }  
            
          >
            {!inCart && !cartItems.includes(id) ? "Add to cart" : "Go to cart"}
          </button>
           <button
              class="secondary-cta"
              onClick={() => addToWishList(product)}
            >
              {wishListItems.includes(id)
                ? "Go To WishList"
                : "Add To Wishlist"}
            </button>
          </div>
      </div>}
      
    </div>
    <center><button
        className="primary-cta shop-now-btn"
        id="cta"
      onClick={() => navigate("/products")}
      >
        Shop Now!
      </button></center>
    </>
    
}

