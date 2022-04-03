import { NavIcon } from "../index";
import "./index.css";
import { useSidebar } from "../../contexts/sidebarContext";
import { CgClose, CgMenu } from "react-icons/cg";
import { VscHeart } from "react-icons/vsc";
import { GrCart } from "react-icons/gr";
import { useCart, useWishlist, useNavigate } from "../../customHooks";
const Navbar = () => {
  const { sidebarToggle, setToggleState } = useSidebar();
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();
  const navigate = useNavigate("/wishlist");

  console.log(wishlistCount, "count beyyyyyyy");

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
              <GrCart className="header-icons header-icons-m-lr icon-md" />
              {Boolean(cartCount) && (
                <div class="nav-icon-badge">{cartCount}</div>
              )}
            </div>

            <div className="position-rel" onClick={() => redirect("wishlist")}>
              <VscHeart className="header-icons header-icons-m-lr icon-md" />
              {Boolean(wishlistCount) && (
                <div class="nav-icon-badge">{wishlistCount}</div>
              )}
            </div>
          </div>
        </nav>
      </div>

      {/* desktop navbar */}

      <div className="desktopNavbar">
        {" "}
        <nav className="flex-H-space-around ">
          <div>
            <span className="span-style">SparkCart</span>
          </div>
          <div>
            <i className="fas fa-search"></i>
            Search.....
          </div>
          <div className="flex-H-space-around navbar-rightside-div">
            <button className="span-style">Login</button>
            <button className="span-style">Signup</button>
            <div className="position-rel" onClick={() => redirect("cart")}>
              <GrCart className="header-icons header-icons-m-lr icon-md" />
              {Boolean(cartCount) && (
                <div class="nav-icon-badge">{cartCount}</div>
              )}
            </div>
            <div className="position-rel" onClick={() => redirect("wishlist")}>
              <VscHeart className="header-icons header-icons-m-lr icon-md" />
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
