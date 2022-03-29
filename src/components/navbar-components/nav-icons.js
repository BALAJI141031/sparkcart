import './navStyles.css'
import { useSidebar } from '../../contexts/sidebar-context';
import {GrCart} from "react-icons/gr"
import { useNavigate,} from "react-router-dom";

const NavIcon = ({ children }) => {  
  let navigateObj = useNavigate()
  const gotowishlist=()=>{
    navigateObj('/wishlist')
  }
  const {setToggleState}=useSidebar()
  // return <div onClick={()=>setToggleState((prevtate)=>!prevtate)}>{children}</div>;
  return <div onClick={gotowishlist}>{children}</div>
};

const BadgeIcons = ({ children }) => {
  


  return (<div className="position-rel">
      <GrCart className="header-icons header-icons-m-lr icon-lg"/>
    <div class="nav-icon-badge">0</div>  
    </div>
  );
};

export { NavIcon, BadgeIcons };
