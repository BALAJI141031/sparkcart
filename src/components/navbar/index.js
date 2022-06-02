import { NavIcon } from "../index";
import "./index.css";
import { useSidebar } from "../../contexts/sidebarContext";
import { CgClose, CgMenu } from "react-icons/cg";
import Cookies from "js-cookie";
import {useEffect, useRef, useState} from 'react'

import { FaShoppingCart, AiTwotoneHeart,BiSearchAlt2 } from "../../icons";
import { useCart, useWishlist, useNavigate, useAuth,useFilter } from "../../customHooks";
import { Link } from "react-router-dom";
import {searchItems} from '../../dryProviders'
import { MdTitle } from "react-icons/md";
import {useClickOutside} from '../../customHooks'
const Navbar = () => {
  const [searchedResult,setSearchedResult]=useState([])
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const { sidebarToggle, setToggleState } = useSidebar();
  const { cartCount, } = useCart();
  const {dispatchFilter}=useFilter()
  const { wishlistCount } = useWishlist();
  const navigate = useNavigate("/wishlist");


  const redirect = (destination) => {
    switch (destination) {
      case "wishlist":
        return navigate("/wishlist");
      case "cart":
        return navigate("/cart");
      default:
        return navigate("/");
    }
  };

  const toggleLogin = () => {
    console.log(isLoggedIn);
    if (isLoggedIn) {
      setIsLoggedIn(false);
      Cookies.remove("jwt_token");
      navigate("/");
    } else {
      navigate("/user/login");
    }
  };

  const signupHandle = () => {
    navigate("/user/signup");
  };

  // debounce fn

  const debounceFn = (cb) => {
    let timerId
    return (...text) => {
      clearInterval(timerId)
      timerId = setTimeout(() => cb(text),500)
    }
  }
  const searchFn = debounceFn(async (text) => {
    const searchedResponse = await searchItems(text[0]) 
    console.log(searchedResponse)
    setSearchedResult([...searchedResponse.data.products])
})  

   
  // custom hook to detect outside click
  let domNode=useClickOutside(() => {
    setSearchedResult([])
  })

  return (
    <>
      {/* mobile navbar */}
      <div className="mobileNavbar">
        <nav className="flex-H-space-bw ">
          <div className="flex-H-space-around ">
            <div onClick={() => setToggleState((prevtate) => !prevtate)}>
              <NavIcon>
                {sidebarToggle ? (
                  <CgMenu className="header-icons header-icons-m-lr icon-lg" />
                ) : (
                  <CgClose className="header-icons header-icons-m-lr icon-lg" />
                )}
              </NavIcon>
            </div>
            <h1>
              <span class="span-style">Spark</span>
            </h1>
          </div>
          <div className="flex-H-space-bw header-icons-div">
            <div className="position-rel" onClick={() => redirect("cart")}>
              <FaShoppingCart className="header-icons header-icons-m-lr icon-md" />
              {Boolean(cartCount) && (
                <div class="nav-icon-badge">{cartCount}</div>
              )}
            </div>

            <div className="position-rel" onClick={() => redirect("wishlist")}>
              <AiTwotoneHeart className="header-icons header-icons-m-lr icon-md" />
              {Boolean(wishlistCount) && (
                <div class="nav-icon-badge">{wishlistCount}</div>
              )}
            </div>
          </div>
        </nav>
      </div>

      {/* desktop navbar */}

      <div className="desktopNavbar">
        <nav className="flex-H-space-around ">
          <Link to="/">
            <span className="span-style">SparkCart</span>
          </Link>
         <div className="searchbar-div">
        <input
          className="search-bar"
          type="search"
              placeholder="search here...."
              onChange={(e) => searchFn(e.target.value)}

        />
        <button className="search-icon">
          <BiSearchAlt2 />
            </button>
            {searchedResult.length !== 0 && <div className="searched-items-div" ref={domNode}>
              {searchedResult.map((product) => <p onClick={() => { 
                 dispatchFilter({
                  type: "categoryFilter",
                  status: true,
                  from:"search",
                  payload: product.category,
                 })
                setSearchedResult([])
                navigate("/products")
              }}>{product.title}</p>)}
            </div>}
      </div>
          <div className="flex-H-space-around navbar-rightside-div">
            <button className="primary-cta" id="cta" onClick={toggleLogin}>
              {isLoggedIn ? "Logout" : "Login"}
            </button>
            {!isLoggedIn && (
              <button className="primary-cta" id="cta" onClick={signupHandle}>
                Signup
              </button>
            )}
            <div className="position-rel" onClick={() => redirect("cart")}>
              <FaShoppingCart className="header-icons header-icons-m-lr icon-md" />
              {Boolean(cartCount) && (
                <div class="nav-icon-badge">{cartCount}</div>
              )}
            </div>
            <div className="position-rel" onClick={() => redirect("wishlist")}>
              <AiTwotoneHeart className="header-icons header-icons-m-lr icon-md" />
              {Boolean(wishlistCount) && (
                <div class="nav-icon-badge">{wishlistCount}</div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export { Navbar };
