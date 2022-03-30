import './index.css';
import {GrDeliver,GrCafeteria } from "react-icons/gr";
import {HiCake,HiCreditCard,HiOutlinePhone,HiOutlineLocationMarker,HiOutlineMail} from 'react-icons/hi'
const IconWithText=(props)=>{
    const {chooseUsObj,contacts}=props
    const {reason,text,}=chooseUsObj
    let compo
    switch(reason){
       case "Quality Products":
           compo=<HiCake className="icon-lg"/>
           break
       case "Free Delivary":
           compo=<GrDeliver className="icon-lg"/>
           break
       case "Catering Service":
           compo=<GrCafeteria className="icon-lg"/>
           break
       case "Online Payment":
           compo=<HiCreditCard className="icon-lg"/>
           break
        case "location":
            compo=<HiOutlineLocationMarker className="icon-lg"/>
            break
        case "phone":
            compo=<HiOutlinePhone className="icon-lg"/>
            break
        default:
            compo=<HiOutlineMail className="icon-lg"/>
    }
    return  <div className="chooseUsCard flex-V-center-H">
        {compo}
        {contacts!=="true"?<h2>{reason}</h2>:null}
        <p>{text}</p>
        </div>
}
export {IconWithText}