
import { NavIcon, BadgeIcons } from "./nav-icons";
import './index.css'
import {useSidebar} from '../../contexts/sidebar-context'

import { CgClose,CgMenu,CgMoreVertical,CgSearch } from "react-icons/cg";

const Navbar = () => {
const {sidebarToggle,setToggleState}=useSidebar()
 const gotowishlist=()=>{
   console.log("clicked")
 }

  return (<>
  {/* mobile navbar */}
   <div className="mobileNavbar"><nav className="flex-H-space-bw ">
      <div className="flex-H-space-around ">
        <div onClick={()=>setToggleState((prevtate)=>!prevtate)}><NavIcon >
            {sidebarToggle?<CgMenu className="header-icons header-icons-m-lr icon-lg"/>: <CgClose className="header-icons header-icons-m-lr icon-lg"/>}
        </NavIcon></div>
        <h1>
          <span class="span-style">Spark</span>
        </h1>
      </div>
      <div className="flex-H-space-bw header-icons-div">
        <NavIcon>
          <CgSearch className="header-icons header-icons-m-lr icon-lg"/>
          
        </NavIcon>
        <BadgeIcons />
        <NavIcon >
          <CgMoreVertical className="header-icons header-icons-m-lr icon-lg"/>
        </NavIcon>
      </div>
    </nav>
    </div>
    {/* desktop navbar */}
   
   <div className="desktopNavbar"> <nav className="flex-H-space-around ">
      <div><span className="span-style">SparkCart</span></div>
        <div>
          <i className="fas fa-search"></i>
          Search.....
        </div>
        <div className="flex-H-space-around navbar-rightside-div">
          <button className="span-style">Login</button>
          <button className="span-style">Signup</button>
          <div className="position-relative">
            <i className="fas fa-cart-plus icon-md"></i>
            <div className="nav-icon-badge">99+</div>
          </div>
          <div className="position-relative">
            <i className="fas fa-heart icon-md"></i>
            <div className="nav-icon-badge">99+</div>
          </div>  
          </div> 
        </nav>
        </div>
  
  </>
    
  );
};

export { Navbar };
