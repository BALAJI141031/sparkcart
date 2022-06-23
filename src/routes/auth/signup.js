import { useNavigate, useLocation, NavLink } from "react-router-dom";
import Cookies from "js-cookie";
import { useState } from "react";
import { useAuth } from "../../contexts/authContext";
import { MdOutlineKeyboardArrowRight, GiWindSlap } from "../../icons";
import { signupUser } from "../../dryProviders";
import { useNotifyUser } from "../../customHooks";
import "./auth.css";

export function Signup() {
  const navigate = useNavigate();
  const { toast } = useNotifyUser();
  const { setIsLoggedIn } = useAuth();
  const location = useLocation();
  let intialDetials = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    displayname: "",
  };
  const [detials, setDetials] = useState(intialDetials);
  const submitSignupForm = async (e) => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    } = detials;

    if (firstName==="") {
      toast.info("Please Provide FirstName!");

      setDetials((predDetials) => ({
        ...predDetials,
        password: "",
        confirmPassword: "",
      }));
    }
    if (lastName ==="") {
      toast.info("Please Provide LastName!");
      setDetials((predDetials) => ({
        ...predDetials,
        password: "",
        confirmPassword: "",
      }));
    }

    if (email ==="") {
      toast.info("Please Provide Email!");
      setDetials((predDetials) => ({
        ...predDetials,
        password: "",
        confirmPassword: "",
      }));
    }
    

    if (password.length < 6) {
      toast.info("Password must be at least 6 characters long!");

      setDetials((predDetials) => ({
        ...predDetials,
        password: "",
        confirmPassword: "",
      }));
    } else if (password.search(/\d/) === -1) {
      toast.info("Password must contain at least one number!");
      setDetials((predDetials) => ({
        ...predDetials,
        password: "",
        confirmPassword: "",
      }));
    } else if (password.search(/[a-z]/) === -1) {
      toast.info("Password must contain at least one lowercase letter!");
      setDetials((predDetials) => ({
        ...predDetials,
        password: "",
        confirmPassword: "",
      }));
    } else if (password.search(/[A-Z]/) === -1) {
      toast.info("Password must contain at least one Uppercase letter!");
      setDetials((predDetials) => ({
        ...predDetials,
        password: "",
        confirmPassword: "",
      }));
    } else if (password !== confirmPassword) {
      setDetials((predDetials) => ({
        ...predDetials,
        password: "",
        confirmPassword: "",
      }));

      toast.info("Entered Passwords Are Not Matching!");
    } else {
      try {
        const signupResponse = await signupUser({
          firstName: detials.firstName,
          lastName: detials.lastName,
          email: detials.email,
          password: detials.password,
          displayname: detials.displayname,
        });
        Cookies.set("jwt_token", signupResponse.data.encodedToken);
        toast.success("Account created successfully!");
        setIsLoggedIn(true);
        navigate(location.state?.from?.pathname ?? "/", { replace: true });
      } catch (e) {
        if (e.response.status === 422) {
          toast.error("Account already exists!");
          setDetials(intialDetials);
        } else {
          toast.error("Unexpected error!");
        }
      }
    }
  };

  const setDetialsHandler = (e) => {
    if (e.target.name !== "termsAndConditions")
      setDetials((prevCredentials) => ({
        ...prevCredentials,
        [e.target.name]: e.target.value,
      }));
    else
      setDetials((prevCredentials) => ({
        ...prevCredentials,
        [e.target.name]: e.target.checked,
      }));
  };

  return (
    <div className="auth-form">
      <h1>
        Spark Wind <GiWindSlap className="hero-icon" />
      </h1>
      <form onSubmit={submitSignupForm}>
        <center>
          <h2>Signup</h2>
        </center>
        <div>
          <label>First Name</label>
          <input
            type="text"
            placeholder="name"
            name="firstName"
            onChange={setDetialsHandler}
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            placeholder="name"
            name="lastName"
            onChange={setDetialsHandler}
          />
        </div>
        <div>
          <label>User Name</label>
          <input
            type="text"
            placeholder="username"
            name="displayname"
            onChange={setDetialsHandler}
          />
        </div>
        <div>
          <label>Email address</label>
          <input
            type="email"
            placeholder="email"
            name="email"
            onChange={setDetialsHandler}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            placeholder="********"
            name="password"
            onChange={setDetialsHandler}
          />
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="********"
            name="confirmPassword"
            onChange={setDetialsHandler}
          />
        </div>
        <center><button className="primary-cta" id="cta">
          Signup
        </button></center>
        <NavLink to="/user/login">
          <div className="account-info">
            <p>Already have an account</p>
            <MdOutlineKeyboardArrowRight className="icon" />
          </div>
        </NavLink>
      </form>
    </div>
  );
}
