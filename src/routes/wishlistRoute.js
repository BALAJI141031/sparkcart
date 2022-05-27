import { WishlistCard, Navbar } from "../components";


import axios from "axios";
import { useCart, useWishlist, useNavigate } from "../customHooks";

const Wishlist = () => {
  const { wishlist } = useWishlist();
  const navigate = useNavigate();
  return (
    <>
      <h1 className="text-align-center">My Wishlist</h1>

      <div className="flex-wrap">
        {wishlist.length !== 0 &&
          wishlist.map((item) => (
            <WishlistCard productObj={item} key={item._id} />
          ))}
      </div>
      {wishlist.length === 0 && (
        <h2 className="text-align-center">wishlist is empty explore more</h2>
      )}
      <center>
        <button
          className="primary-cta"
          id="cta"
          onClick={() => navigate("/products")}
        >
          Shop Now!
        </button>
      </center>
    </>
  );
};
export { Wishlist };
