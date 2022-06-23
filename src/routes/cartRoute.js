import { Checkout, CartProduct, Headers, Navbar,AboutProduct } from "../components";
import { useCart } from "../contexts/cartContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoMdAddCircle } from '../icons'
import "./index.css";
import { toast } from "react-toastify";
const Cart = () => {
  const navigate = useNavigate();
  const { cart} = useCart();
  const [changeAddress, setChangeAddress] = useState(false)
  const [newAddress, setNewAddress] = useState(false)
  const [userNewAddress,setUserNewAddress]=useState({fullName:null,location:null,pincode:null,country:null,state:null,mobile:null})
  const [addresses, setAddress] = useState([{
      fullName:"Jason Dawood",
      city: "Newyork city",
      pincode: 1234678,
      mobile:"(+91)7893293278",
      country: "USA",
      primaryAddress:true,
      index: 0,
      location:"Raw Diamonds 7th Lane,Newyork city "
    },{
      fullName:"Jason Russel",
      pincode: 1234678,
      state: "Newyork",
      mobile:"(+91)7893293278",
      country: "USA",
      primaryAddress: false,
      index: 1,
      location:"Raw Diamonds 7th Lane,Newyork city "
    }])
  
  return (
    <div className="cart">
      <h2 className="text-center">My Cart</h2>
      <center>
        <button
          className="primary-cta"
          id="cta"
          onClick={() => navigate("/products")}
        >
          Shop More!
        </button>
      </center>
      {cart.length !== 0 ? (
        <div className="cart-section">
          <div className="cart-products">
            {addresses.map((address)=>address.primaryAddress && <div className="flex-H-center-V">
              <div><p>Deliver To:<span>{address.fullName} {address.mobile}</span></p>
                <p>#1/4 , {address.location}</p>
              </div>
              <button
                className="secondary-cta"
                id="cta"
              onClick={() => setChangeAddress(true)}
              >
                Change!
              </button>
            </div>)
            
            }
            {cart.map((item) => {
              return <CartProduct product={item} />;
            })}
          </div>
          <Checkout />
        </div>
      ) : (
        <center>
          <h1>cart is empty</h1>
        </center>
      )}
      

      {changeAddress && <div className="bg-black bg-opacity-50 absolute z-99 inset-0 flex justify-center items-center  ">
        <div className="bg-gray-200  p-10 rounded-lg">
          <div className="pb-10">
            {addresses.map((address) => {
              const {mobile,fullName,country,location,pincode,state,primaryAddress}=address
              return <div className="flex center-items mb-5" >
                <input type="radio" name="address" className="w-5 mr-4" checked={primaryAddress ? true : false} onClick={() => setAddress((prevAddress) => {
                  const selectedAdress = [...prevAddress].map((address) => address.primaryAddress ? {...address ,primaryAddress : false } : address
                  )
                  
                  selectedAdress[address.index].primaryAddress = true
                   return selectedAdress
                  
                  })} />
                <div>
                <h1>{fullName}</h1>
                <p>{location}</p>
                  <p>{ pincode} {state} {country}</p>
                <p>{ mobile}</p>
                </div>
             </div> 
            })}
          </div>
          <div className="flex justify-between">
          <div className="flex justify-start items-center cursor-pointer" onClick={()=>setNewAddress(true)}>
            <IoMdAddCircle className="text-xl font-bold  mb-1"/>
            <p className="font-bold">Add New Address</p>
            </div>
            <button className="primary-cta" onClick={()=>setChangeAddress(false)}>Save Address</button>
            </div>
         </div>
      </div>}
      {
        newAddress && <div className="bg-black bg-opacity-50 absolute z-99 inset-0 flex justify-center items-center  ">
        <div className="bg-gray-200  p-10 rounded-lg">
          <div className="pb-10">
              <select onChange={(e)=>setUserNewAddress({...userNewAddress,country:e.target.value})} value={userNewAddress.country}>
                <option>Select Country</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
              </select>
              <input placeholder="fullname " className="p-2 m-2 border border-indigo-600" onChange={(e) => setUserNewAddress({ ...userNewAddress, fullName: e.target.value })} value={userNewAddress.fullName}/>
              <input placeholder="street,city," className="p-2 m-2 border border-indigo-600" onChange={(e)=>setUserNewAddress({...userNewAddress,location:e.target.value})} value={userNewAddress.location}/>
              <input placeholder="pincode" className="p-2 m-2 border border-indigo-600" onChange={(e)=>setUserNewAddress({...userNewAddress,pincode:e.target.value})} value={userNewAddress.pincode}/>
              <input placeholder="mobile number" className="p-2 m-2 border border-indigo-600" onChange={(e)=>setUserNewAddress({...userNewAddress,mobile:e.target.value})} value={userNewAddress.mobile}/>
              {userNewAddress.country === "India" ? <select onChange={(e)=>setUserNewAddress({...userNewAddress,state:e.target.value})}>
                <option>Select State</option>
                <option value="AP">Andhra Pradesh</option>
                <option value="KA">Karnataka</option>
                <option value="TN">Tamil Nadu</option>
              </select> : <select onChange={(e)=>setUserNewAddress({...userNewAddress,state:e.target.value})} value={userNewAddress.state}>
                  <option >Select State</option>
                <option value="Los Angles">Los Angel</option>
                <option value="Monter land">Monster land</option>
                <option value="Misc">Misc</option>
              </select> }
          </div>
          <div className="flex justify-between">
              <button className="primary-cta hover:bg-sky-700" onClick={() => {
                if (userNewAddress.fullName && userNewAddress.location && userNewAddress.mobile && userNewAddress.state, userNewAddress.country) {
                  setAddress((prevAdd) => [...prevAdd, { ...userNewAddress,index:addresses.length }])
                  setNewAddress(false)
                }
                else {
                  toast.warning("Please Provide all The Detials")
                }
              }}>Add Address</button>
              <button className="primary-cta hover:bg-sky-700" onClick={()=>setNewAddress(false)}>Cancel</button>
              <button className="primary-cta hover:bg-sky-700" onClick={()=>setUserNewAddress({fullName:"Ronald Bump",location:"American Sky Towers, los Angles, first cross",pincode:12345,country:"USA",state:"Los Angles",mobile:7893293287,index:addresses.length})}>Fill with Dummy</button>
            </div>
         </div>
      </div>
      }
    </div>
  );
};

export { Cart };
