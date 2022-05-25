import { HeroCard, SideNavbar, HeroImageCard } from "../components";
import { useEffect, useState } from "react";

import axios from "axios";
import "./index.css";

const LandingRoute = () => {
  let list = [
    {
      title: "International Relations",
      image:
        "https://i.ytimg.com/vi/3OMmxKiG4LE/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBmMrhT0Xnk6Yl-bqb64XZm8NXRNw",
    },
    {
      title: "Political Science",
      image:
        "https://i.ytimg.com/vi/XK2MBnw6RlY/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCbYgrLpduGFJnFXCvQjF8v5mY8Bw",
    },
    {
      title: "Indian History",
      image:
        "https://i.ytimg.com/vi/JpISyeHz73Q/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDyHacep2MYS1OygXqAdAvDRZuBCA",
    },
    {
      title: "World Geography",
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
        <h2 className="primary-cta" id="hero-cta">
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
