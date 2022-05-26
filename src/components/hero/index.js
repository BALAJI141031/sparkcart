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
        });
        navigate("/products");
      }}
    >
      <h1>{title}</h1>
    </div>
  );
};

const HeroImageCard = () => {
  const navigate = useNavigate();
  const { dispatchFilter } = useFilter();
  return (
    <div className="arrival-card-section">
      <div class="h-card flex-H arrival-card">
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/51URPCHNSBL._SX379_BO1,204,203,200_.jpg"
          class="card-image"
        />
        <div class="flex-V-sapce-between">
          <strong>New Arrival</strong>
          <div>
            <p>
              Taj's Lorem Ipsum is simply dummy text of the printing
              andtypesetting industry Food
            </p>
            <span>Rs 599/- </span>
            <span class="strike-rate">Rs 899/- </span>
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
