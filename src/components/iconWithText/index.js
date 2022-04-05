import "./index.css";
import { GrDeliver, GrCafeteria } from "react-icons/gr";
import {
  HiCake,
  HiCreditCard,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiOutlineMail,
} from "react-icons/hi";
const IconWithText = (props) => {
  const { chooseUsObj, contacts } = props;
  const { reason, text } = chooseUsObj;
  let component;
  switch (reason) {
    case "Quality Products":
      component = <HiCake className="icon-lg" />;
      break;
    case "Free Delivary":
      component = <GrDeliver className="icon-lg" />;
      break;
    case "Catering Service":
      component = <GrCafeteria className="icon-lg" />;
      break;
    case "Online Payment":
      component = <HiCreditCard className="icon-lg" />;
      break;
    case "location":
      component = <HiOutlineLocationMarker className="icon-lg" />;
      break;
    case "phone":
      component = <HiOutlinePhone className="icon-lg" />;
      break;
    default:
      component = <HiOutlineMail className="icon-lg" />;
  }
  return (
    <div className="chooseUsCard flex-V-center-H">
      {component}
      {contacts !== "true" ? <h2>{reason}</h2> : null}
      <p>{text}</p>
    </div>
  );
};
export { IconWithText };
