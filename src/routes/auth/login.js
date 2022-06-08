import { useNavigate, useLocation, NavLink } from "react-router-dom";
import Cookies from "js-cookie";
import { useRef, useState } from "react";
import { useAuth } from "../../contexts/authContext";
import { MdOutlineKeyboardArrowRight, GiWindSlap } from "../../icons";
import { useNotifyUser } from "../../customHooks";
import { loginUser } from "../../dryProviders";
import "./auth.css";
export function Login() {
  const { toast } = useNotifyUser();
  const navigate = useNavigate();
  const { setIsLoggedIn } = useAuth();
  const location = useLocation();
  const emailInput = useRef(null);
  const passwordInput = useRef(null);
  const [validatedCredentials, validteCredentials] = useState({
    email: false,
    password: false,
  });

  const [testCredentials, setTestCredentials] = useState(null);

  const submitLoginForm = async (e) => {
    e.preventDefault();
    if (emailInput.current.value === "" && passwordInput.current.value !== "")
      validteCredentials({ email: true, password: false });
    else if (
      passwordInput.current.value === "" &&
      emailInput.current.value !== ""
    )
      validteCredentials({ email: false, password: true });
    else if (
      passwordInput.current.value === "" &&
      emailInput.current.value === ""
    )
      validteCredentials({ email: true, password: true });
    else {
      try {
        const loginResponse = await loginUser({
          email: emailInput.current.value,
          password: passwordInput.current.value,
        });

        Cookies.set("jwt_token", loginResponse.data.encodedToken);
        toast.success("Login sucessful!");
        setIsLoggedIn(true);
        navigate(location.state?.from?.pathname ?? "/", { replace: true });
      } catch (e) {
        emailInput.current.value = "";
        passwordInput.current.value = "";
        setTestCredentials({
          tesetEmail: "adarshbalika@gmail.com",
          testPassword: "adarshBalika1234",
        });
        if (e.response.status === 401) {
          toast.success("Invalid email or password. Please try again.!");
        } else if (e.response.status === 404) {
          toast.success("No user found with this email. Please try again.!");
        } else {
          toast.success("Unexpected error. Please try again in some time.!");
        }
      }
    }
  };
  return (
    <div className="auth-form">
      <h1>
        Spark Library <GiWindSlap className="hero-icon" />
      </h1>
      <form onSubmit={submitLoginForm}>
        <center>
          <h2>Login</h2>
        </center>
        <div>
          <label>Email address</label>
          <input
            type="email"
            placeholder="email"
            ref={emailInput}
            value={testCredentials && testCredentials.tesetEmail}
            onChange={() =>
              validteCredentials((prev) => ({
                ...prev,
                email: false,
              }))
            }
          />
          {validatedCredentials.email && (
            <p className="style-error">Please Provide Email</p>
          )}
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            placeholder="********"
            ref={passwordInput}
            value={testCredentials && testCredentials.testPassword}
            onChange={() =>
              validteCredentials((prev) => ({
                ...prev,
                password: false,
              }))
            }
          />
          {validatedCredentials.password && (
            <p className="style-error">Please Provide password</p>
          )}
        </div>
        <div className="flex-H-space-bw">
          <div className="flex-H-center-V">
            <input type="checkbox" className="checkbox" />
            <p>Remember Me</p>
          </div>
          <p>Forgot Your Password</p>
        </div>
        <button className="primary-cta" id="cta">
          Login
        </button>
        <div
          onClick={() =>
            setTestCredentials({
              tesetEmail: "balajiNarayana@gmail.com",
              testPassword: "balajiNarayana1234",
            })
          }
        >
          <button className="primary-cta" id="cta">
            Test Login
          </button>
        </div>

        <NavLink to="/user/signup">
          <div className="account-info">
            <p>Create New Acccount</p>
            <MdOutlineKeyboardArrowRight className="icon" />
          </div>
        </NavLink>
      </form>
    </div>
  );
}
