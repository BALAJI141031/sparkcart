import { v4 as uuid } from "uuid";
import { Link, useParams } from "react-router-dom";
import {GiConfirmed} from '../icons'
export default function OrderDetials() {
 const {id}=useParams()
  return (
      <div className="flex flex-col items-center mt-20 ">
      <div className="flex items-center order-status">
        <GiConfirmed className="w-10 h-10"/>
      <h2 className="ml-2 mb-4">Order Confirmed</h2>
      
      </div>
          <p>Order Id:{uuid()}</p>
      <p>Transaction Id:{id}</p>
      <Link to="/products"><button id="cta" className="primary-cta">Shop Agian!</button></Link>
    </div>
  )
}

