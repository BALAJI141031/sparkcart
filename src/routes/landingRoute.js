import {
  Navbar,
  Hero,
  ServiceCard,
  ProductCard,
  CardWithText,
  Footer,
  IconWithText,
  SocialMedia,
  SideNavbar,
} from "../components";
import Carousel from "react-elastic-carousel";
import { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1 },
  { width: 768, itemsToShow: 1 },
  { width: 1200, itemsToShow: 1 },
];
const serviceCardBreakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 },
];

const LandingRoute = () => {
  let list = [
    {
      reason: "Quality Products",
      imageUrl: "",
      text: "We guarantee the quality of all the cakes we provide as they are baked using the freshest ingredients.",
    },
    {
      reason: "Free Delivary",
      imageUrl: "",
      text: "We guarantee the quality of all the cakes we provide as they are baked using the freshest ingredients.",
    },
    {
      reason: "Catering Service",
      imageUrl: "",
      text: "We guarantee the quality of all the cakes we provide as they are baked using the freshest ingredients.",
    },
    {
      reason: "Online Payment",
      imageUrl: "",
      text: "We guarantee the quality of all the cakes we provide as they are baked using the freshest ingredients.",
    },
  ];
  const getInTouch = [
    {
      reason: "location",
      text: "523 Sylvan Ave, 5th FloorMountain View, CA 94041 USA",
    },
    { reason: "phone", text: "+1 (844) 123 456 78" },
    { reason: "mail", text: "info@demolink.org" },
  ];
  const [featuredList, updateFeaturedList] = useState([]);

  useEffect(() => {
    const getFeaturedProducts = async () => {
      try {
        const response = await axios.get("/api/categories");
        updateFeaturedList([...response.data.categories]);
      } catch (e) {
        throw e;
      }
    };
    getFeaturedProducts();
  return (
    <div>
      <Navbar />
      <Carousel
        breakPoints={breakPoints}
        showArrows={false}
        enableAutoPlay={true}
        transitionMs={1000}
        autoPlaySpeed={400}
      >
        <Hero />
        <Hero />
        <Hero />
        <Hero />
        <Hero />
      </Carousel>
      {/* <TextOverlayCard/> */}
      <h1 className="text-align-center">What we Deliver</h1>
      <Carousel breakPoints={serviceCardBreakPoints} showArrows={false}>
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </Carousel>
      {/* <h1 className="text-align-center">New Products</h1>
      <h1 className="text-align-center">New Products</h1>
      <Carousel breakPoints={serviceCardBreakPoints} showArrows={false}>
        {featuredList.map((item) => (
          <ProductCard productObj={item} />
        ))}
      </Carousel> */}
      </Carousel>
      <h1 className="text-align-center">Why choose Us</h1>
      <div className="chooseUs">
        {list.map((item) => (
          <IconWithText chooseUsObj={item} />
        ))}
      </div>
      {/* <Hero/> */}
      <CardWithText />
      <h3 className="text-align-center">GET IN TOUCH</h3>
      <div className="flex-H-center-V">
        <img
          src="https://b.zmtcdn.com/data/pictures/7/18802677/1fd7f6dc3754d5d595f4a651148d036b.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
          alt="getintouch"
          className="contactImg"
        />
        <div className="getinTouchDiv">
          {getInTouch.map((item) => (
            <IconWithText chooseUsObj={item} contacts="true" />
          ))}
          <SocialMedia />
        </div>
      </div>
      <Footer />
      <SideNavbar />
    </div>
  );
};

export { LandingRoute };
