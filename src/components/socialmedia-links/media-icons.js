import {GrInstagram,GrLinkedinOption,GrGoogle,GrFacebookOption,GrSwift} from "react-icons/gr"
import './mediaicons.css'
const SocialMedia=(props)=>{
    return <div className="flex-H-space-around mediaIconsDiv">
         <GrInstagram className="icon-lg mediaIcon"/>
         <GrLinkedinOption className="icon-lg mediaIcon"/>
         <GrGoogle className="icon-lg mediaIcon"/>
         <GrFacebookOption className="icon-lg mediaIcon"/>
         <GrSwift className="icon-lg mediaIcon"/>     
    </div>
}
export {SocialMedia}