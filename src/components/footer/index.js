import { RiTwitterLine, RiWhatsappLine, } from "react-icons/ri";
import { VscGithubAlt } from "react-icons/vsc";
import './index.css'
const Footer=()=>{
    return ( <footer class="flex-V-center-VH">
    <div>Lets Connect Now!!!!</div>
    <ul>
    
     <RiTwitterLine className="header-icons header-icons-m-lr"/>
     <RiWhatsappLine className="header-icons header-icons-m-lr"/>
     <VscGithubAlt className="header-icons header-icons-m-lr"/>
    </ul>
  </footer>)
}

export {Footer}