import { Navigate,useNavigate} from "react-router-dom";
import { useCart } from "../contexts/cartContext";
import { useWishlist } from "../contexts/wishlistContext";
import { useFilter } from "../contexts/filterContext";
import { useNotifyUser } from "../contexts/toastContext";
import { useAuth } from "../contexts/authContext";
import { useRef,useEffect } from "react";

const useClickOutside = (cb) => {
  let domNode=useRef()
   useEffect(() => {
    const handler=(e) => {
      if (!domNode.current.contains(e.target)) {
        cb()
    }
    }
    document.addEventListener("mousedown",handler )
    return () => {
     document.removeEventListener("mousedown",handler)
   } 
   })
  
  return domNode
}



// payment integration 
const loadRazorPay = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };


 
const paymentHandler = async (cartTotal,navigate) => {
    const response = await loadRazorPay();
    if (!response) return console.log('Error in loading razorpay sdk');
    var options = {
      key_id: 'rzp_test_G8gydylRh0sAsO',
      key: 'rzp_test_G8gydylRh0sAsO',
      amount: cartTotal,
      currency: 'INR',
      name: 'Spark cart',
      description: 'Buy new UPSC Books!',
      image:
        'https://icon-library.com/images/image-icon-png/image-icon-png-6.jpg',
      handler: function (res) {

        
        navigate(`/order/confirmed/${res.razorpay_payment_id}`)

      },
      prefill: {
        name: `Balaji Narayana`,
        email: 'balajiab09@gmail.com',
        contact: '6304436614',
      },
      theme: {
        color: '#16003B',
      },
    };

    var razorPay = new window.Razorpay(options);
    razorPay.open();
}

export {
  useNavigate,
  useCart,
  useWishlist,
  useFilter,
  useNotifyUser,
  useAuth,
  useClickOutside,
  paymentHandler
};
