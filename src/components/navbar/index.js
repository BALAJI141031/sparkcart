
import { NavIcon, BadgeIcons } from "../index";
import './index.css'
import {useSidebar} from '../../contexts/sidebarContext'
import { CgClose,CgMenu,CgSearch } from "react-icons/cg";
import { VscHeart } from "react-icons/vsc";
import {GrCart} from "react-icons/gr"
const Navbar = () => {
const {sidebarToggle,setToggleState}=useSidebar()

//  const gotowishlist=()=>{
//    console.log("clicked")
//  }

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
        {/* <NavIcon>
          <CgSearch className="header-icons header-icons-m-lr icon-lg"/>    
        </NavIcon> */}
        <BadgeIcons>
        <GrCart className="header-icons header-icons-m-lr icon-md"/>
          </BadgeIcons>
          <BadgeIcons>
        <VscHeart className="header-icons header-icons-m-lr icon-md"/>
          </BadgeIcons>
        {/* <NavIcon >
          <CgMoreVertical className="header-icons header-icons-m-lr icon-lg"/>
        </NavIcon> */}
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
          <BadgeIcons>
        <GrCart className="header-icons header-icons-m-lr icon-md"/>
          </BadgeIcons>
          <BadgeIcons>
        <VscHeart className="header-icons header-icons-m-lr icon-md"/>
          </BadgeIcons>
          </div> 
        </nav>
        </div>
  
  </>
    
  );
};

export { Navbar };
