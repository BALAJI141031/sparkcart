import {GrInstagram,GrLinkedinOption,GrGoogle,GrFacebookOption,GrSwift} from "react-icons/gr"
const SocialMedia=(props)=>{
    return <div className="flex-H-space-around">
         <GrInstagram className="icon-lg"/>
         <GrLinkedinOption className="icon-lg"/>
         <GrGoogle className="icon-lg"/>
         <GrFacebookOption className="icon-lg"/>
         <GrSwift className="icon-lg"/>     
    </div>
}
export {SocialMedia}