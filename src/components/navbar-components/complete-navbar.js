
import { NavIcon, BadgeIcons } from "./nav-icons";
// import {useSidebar} from '../side-Navbar/sidebar-context'
import {useSidebar} from '../../contexts/sidebar-context'

import { CgClose,CgMenu,CgMoreVertical,CgSearch } from "react-icons/cg";

const Navbar = () => {
const {sidebarToggle,setToggleState}=useSidebar()


  return (
    <nav className="flex-H-space-bw">
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
        <NavIcon>
          <CgMoreVertical className="header-icons header-icons-m-lr icon-lg"/>
        </NavIcon>
      </div>
    </nav>
  );
};

export { Navbar };
