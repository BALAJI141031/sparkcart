import { HeroCard, SideNavbar, HeroImageCard } from "../components";
import { useNavigate } from "react-router-dom";

import "./index.css";

const LandingRoute = () => {
  const navigate = useNavigate();
  let list = [
    {
      title: "IR",
      image:
        "https://i.ytimg.com/vi/3OMmxKiG4LE/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBmMrhT0Xnk6Yl-bqb64XZm8NXRNw",
    },
    {
      title: "Polity",
      image:
        "https://i.ytimg.com/vi/XK2MBnw6RlY/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCbYgrLpduGFJnFXCvQjF8v5mY8Bw",
    },
    {
      title: "Economy",
      image:
        "https://i.ytimg.com/vi/JpISyeHz73Q/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDyHacep2MYS1OygXqAdAvDRZuBCA",
    },
    {
      title: "Geography",
      image:
        "https://i.ytimg.com/vi/JpISyeHz73Q/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDyHacep2MYS1OygXqAdAvDRZuBCA",
    },
  ];

  const newArrivals = ["1", "2", "3"];

  return (
    <div>
      <div className="hero-cards">
        {list.map((item) => (
          <HeroCard item={item} />
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
          onClick={() => navigate("/products")}
        >
          Explore
        </h2>
      </div>
      <div className="arrival-div">
        {newArrivals.map((arrival) => (
          <HeroImageCard />
        ))}
      </div>
      <SideNavbar />
    </div>
  );
};

export { LandingRoute };
