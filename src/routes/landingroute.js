
import { Navbar } from "../components/navbar-components/complete-navbar";
import {Hero} from "../components/hero-component/hero"
import {TextOverlayCard} from '../components/card-components/text-overlay'
import {ServiceCard} from '../components/card-components/service-card'
import {ProductCard} from '../components/card-components/product-card'
import { ChooseUs } from "../components/choose-us/choose-us";
import {CardWithText} from '../components/card-components/card-with-text'
import {TextCard} from '../components/card-components/text-card'
import {SocialMedia} from '../components/socialmedia-links/media-icons'
import {Sidenavbar} from '../components/side-Navbar/sidebar'
import Carousel from 'react-elastic-carousel';
import { useEffect, useState } from "react";
import axios from 'axios'
const breakPoints=[{width:1,itemsToShow:1},{width:550,itemsToShow:1},{width:768,itemsToShow:1},{width:1200,itemsToShow:1}]
const serviceCardBreakPoints=[{width:1,itemsToShow:1},{width:550,itemsToShow:1},{width:768,itemsToShow:2},{width:1200,itemsToShow:3}]

const LandingRoute=()=>{
    let list=[{reason:"Quality Products",imageUrl:"",text:"We guarantee the quality of all the cakes we provide as they are baked using the freshest ingredients."},{reason:"Free Delivary",imageUrl:"",text:"We guarantee the quality of all the cakes we provide as they are baked using the freshest ingredients."},{reason:"Catering Service",imageUrl:"",text:"We guarantee the quality of all the cakes we provide as they are baked using the freshest ingredients."},{reason:"Online Payment",imageUrl:"",text:"We guarantee the quality of all the cakes we provide as they are baked using the freshest ingredients."}]
    const getInTouch=[{reason:"location",text:"523 Sylvan Ave, 5th FloorMountain View, CA 94041 USA"},{reason:"phone",text:"+1 (844) 123 456 78"},{reason:"mail",text:"info@demolink.org"}]
    const [featuredList,updateFeaturedList]=useState([])
    useEffect(()=>{
        axios.get('/api/products').then((response)=>{  
            updateFeaturedList([...response.data.products])
        } )
      },[])

    return <div>
         <Navbar/> 
         <Carousel breakPoints={breakPoints} showArrows={false} enableAutoPlay={true} transitionMs={1000} autoPlaySpeed={400}><Hero/>
         <Hero/> 
         <Hero/> 
         <Hero/> 
         <Hero/> 
         </Carousel> 
         <TextOverlayCard/>
         <h1 className="text-align-center">What we Deliver</h1>
         <Carousel breakPoints={serviceCardBreakPoints} showArrows={false}> 
         <ServiceCard/>
         <ServiceCard/> 
         <ServiceCard/> 
        </Carousel> 
        <h1 className="text-align-center">New Products</h1>    
          <Carousel breakPoints={serviceCardBreakPoints} showArrows={false}>
        {/* {featuredList.map((item)=><ProductCard productObj={item} />)} */}
        </Carousel>  
        <h1 className="text-align-center">Why choose Us</h1>
        {list.map((item)=><ChooseUs chooseUsObj={item}/>)}
        {/* <Hero/> */}
        <CardWithText/>       
        <h3 className="text-align-center">GET IN TOUCH</h3>
        {getInTouch.map((item)=><ChooseUs chooseUsObj={item} contacts="true"/>)}
        <SocialMedia/>
        <Sidenavbar/> 
    </div>
        
}

export {LandingRoute}