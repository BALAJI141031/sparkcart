import "./index.css";
import { BsArrowRightSquareFill } from "../../icons";
import { useNavigate, useFilter } from "../../customHooks";

const HeroCard = ({ item }) => {
  const navigate = useNavigate();
  const { dispatchFilter } = useFilter();

  let { title, image } = item;

  return (
    <div
      className="hero-card"
      style={{ backgroundImage: `url(${image})` }}
      onClick={() => {
        dispatchFilter({
          type: "categoryFilter",
          status: true,
          payload: title,
          from:"home"
        });
        navigate("/products");
      }}
    >
      <h1>{title}</h1>
    </div>
  );
};

const HeroImageCard = ({arrival:{description,actualPrice,price,imageUrl}}) => {
  const navigate = useNavigate();
  const { dispatchFilter } = useFilter();
  return (
    <div className="arrival-card-section">
      <div className="h-card flex-H arrival-card">
        <img
          src={imageUrl}
          className="card-image"
          alt="new arrival"
        />
        <div className="flex-V-sapce-between">
          <strong>New Arrival</strong>
          <div>
            <p>
              {description}
            </p>
            <span>Rs {price}/- </span>
            <span className="strike-rate">Rs {actualPrice}/- </span>
            <p>50% OFF</p>
          </div>
        </div>
      </div>
      <BsArrowRightSquareFill
        className="second-cta"
        onClick={() => {
          dispatchFilter({
            type: "newArrival",
            payload: true,
          });
          navigate("/products");
        }}
      />
    </div>
  );
};

export { HeroCard, HeroImageCard };
