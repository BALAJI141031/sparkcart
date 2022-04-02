import './index.css'



const NavIcon = ({ children }) => {  
  return <div>{children}</div>
};

const BadgeIcons = ({ children }) => {
  

  return (<div className="position-rel">
       {children}
      <div class="nav-icon-badge">10</div>  
    </div>
  );
};

export { NavIcon, BadgeIcons };
