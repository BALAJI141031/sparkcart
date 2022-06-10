import { useNavigate } from "react-router-dom";
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

export {
  useNavigate,
  useCart,
  useWishlist,
  useFilter,
  useNotifyUser,
  useAuth,
  useClickOutside
};
