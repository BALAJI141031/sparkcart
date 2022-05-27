import { NavIcon } from "../index";
import "./index.css";
import { useSidebar } from "../../contexts/sidebarContext";
import { CgClose, CgMenu } from "react-icons/cg";
import Cookies from "js-cookie";

import { FaShoppingCart, AiTwotoneHeart } from "../../icons";
import { useCart, useWishlist, useNavigate, useAuth } from "../../customHooks";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const { sidebarToggle, setToggleState } = useSidebar();
  const { cartCount } = useCart();
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
          <div>
            <i className="fas fa-search"></i>
            Search.....
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
