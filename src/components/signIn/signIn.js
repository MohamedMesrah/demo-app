import classes from "./signIn.module.css";
import { AppContext } from "../../context/appContext";
import { useContext } from "react";
import Input from "../shared/input/input";
import Button from "../shared/button/button";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const { dispatch } = useContext(AppContext);
  const navigate = useNavigate();

  const handleRegisterClick = (e) => {
    e.preventDefault();
    dispatch({ type: "SET_SIGN_UP", isSignUp: true });
  };

  const handleLogInClick = () => {
    dispatch({ type: "SET_REGESTERED", registered: true });
    navigate("home");
  };

  return (
    <>
      <div className="register-header">Login</div>
      <div>
        New to PrimeXBT?{" "}
        <a className={classes.link} onClick={handleRegisterClick}>
          Register
        </a>
      </div>

      <Input fullwidth="true" type="text" placeholder="Email" />
      <Input fullwidth="true" type="password" placeholder="Password" />

      <div>
        <a className={classes.link}>Forgot password?</a>
      </div>

      <Button fullwidth="true" onClick={handleLogInClick}>
        Log In
      </Button>
    </>
  );
};

export default SignIn;
