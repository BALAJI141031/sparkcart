import { useSidebar } from "../../contexts/sidebar-context"
import './index.css'
import {Link} from 'react-router-dom'
const SideNavbar =()=>{
    const {sidebarToggle,setToggleState}=useSidebar()         
    return <div className={sidebarToggle?"hideSidebar":"sidebar"} >
    <Link to="/login"><p className="text-align-left linkColor">Login</p></Link>
    <Link to="/signup"><p className="text-align-left linkColor">Sign Up</p></Link>
    <p className="text-align-left">Contact Us</p>    
 </div>
}
export {SideNavbar}