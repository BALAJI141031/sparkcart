import './cards.css'
import { IoArrowForward } from "react-icons/io5";
const TextOverlayCard=()=>{
    
    return <div className="overlay-card flex-V-center-H">
       <h1>Fresh Biriyani's</h1>
       <p>All of our products are made from scratch using family recipes with only the highest quality ingredients. We bake and sell fresh daily to ensure only the best products are sold to our customers.</p>
       <button class="btn float">
          <IoArrowForward/>
        </button>
    </div>
}

export {TextOverlayCard}