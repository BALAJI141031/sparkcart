import { HeroCard, SideNavbar, HeroImageCard } from "../components";
import { useNavigate } from "react-router-dom";
import { useFilter } from "../customHooks";
import axios from 'axios';
import "./index.css";

const LandingRoute = () => {
  const {dispatchFilter}=useFilter();
  const navigate = useNavigate();
  let list = [
    { 
      id:1,
      title: "IR",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/41BDzxiny6L._SX373_BO1,204,203,200_.jpg",
    },
    {
      id:2,
      title: "Polity",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51wG4C8d4EL._SX374_BO1,204,203,200_.jpg",
    },
    {
      id:3,
      title: "Economy",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51uRayhgWbL._SX379_BO1,204,203,200_.jpg",
    },
    {
      id:4,
      title: "Geography",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51nbJG0ucpL._SX380_BO1,204,203,200_.jpg",
    },
  ];

  const newArrivals = [   {
    _id: "asdefr3g",
    title: "Indian Economy",
    price: 200,
    actualPrice: 299,
    description: "India's premium",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/51WWmZpXrHL._SX397_BO1,204,203,200_.jpg",
  },
   {
    _id: "xyz1",
    title: "India's Relations",
    price: 500,
    actualPrice: 599,
    description: "India's most read book ",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/51LNQ-TGU9L._SX377_BO1,204,203,200_.jpg",
  },
     {
    _id: "xyz11111",
    title: "Indian Polity",
    price: 500,
    actualPrice: 599,
    description: "India's premium book ",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/51rKNmuSrsL._SX384_BO1,204,203,200_.jpg",
  },];

  return (
    <div>
      <div className="hero-cards cursor-pointer">
        {list.map((item) => (
          <HeroCard item={item} key={item.id}/>
        ))}
      </div>
      <div className="hero">
        <img
          src="https://cdn.pixabay.com/photo/2017/06/14/08/20/map-of-the-world-2401458_960_720.jpg"
          className="hero-main-image"
        />
        <div className="banner">
          <h1>Genius is 1% talent and 99% percent hard work.</h1>
        </div>
        <h2
          className="primary-cta"
          id="hero-cta"
          onClick={ () => {
            dispatchFilter({
          type: "categoryFilter",
          status: false,
          payload: [],
        });
         dispatchFilter({
                type: "newArrival",
                payload: false,
              })
          dispatchFilter({
          type: "priceFilter",
          status: false,
          payload: 1500,
        });
            navigate("/products")
          }
        }
        >
          Explore
        </h2>
      </div>
      <div className="arrival-div">
        {newArrivals.map((arrival) => (
          <HeroImageCard key={arrival.id} arrival={arrival}/>
        ))}
      </div>
      <SideNavbar />
    </div>
  );
};

export { LandingRoute };
