import './index.css'
import {GrCart} from "react-icons/gr"

const NavIcon = ({ children }) => {  
  return <div>{children}</div>
};

const BadgeIcons = ({ children }) => {
  return (<div className="position-rel">
      <GrCart className="header-icons header-icons-m-lr icon-lg"/>
      <div class="nav-icon-badge">0</div>  
    </div>
  );
};

export { NavIcon, BadgeIcons };
