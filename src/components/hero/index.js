import "./index.css";
import { Button } from "../index";
import { useNavigate } from "../../customHooks";

const Hero = (props) => {
  const navigate = useNavigate();

  const goToProductsRoute = () => {
    navigate("/products");
  };

  const { title, description, image } = props;
  return (
    <div className="hero-card">
      <h2>Delicious Biriyani For You</h2>
      <p>Hotel Gayathri Grand Inn offers the best Biriyani for you</p>
      <Button
        type="btn primary-btn"
        text="order Now"
        redirect={goToProductsRoute}
      />
    </div>
  );
};

export { Hero };
