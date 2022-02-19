import Input from "../shared/input/input";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AppContext } from "../../context/appContext";
import Button from "../shared/button/button";
import classes from "./signUp.module.css";

const SignUp = () => {
  const { dispatch } = useContext(AppContext);
  const [terms, setTerms] = useState(false);
  const navigate = useNavigate();

  const handleLogInClick = (e) => {
    e.preventDefault();
    dispatch({ type: "SET_SIGN_UP", isSignUp: false });
  };

  const handleRegisterClick = () => {
    dispatch({ type: "SET_REGESTERED", registered: true });
    navigate("home");
  };

  const handleTermsChange = () => {
    setTerms((oldTerms) => !oldTerms);
  };

  return (
    <>
      <div className="register-header">Register</div>
      <div>
        Already have an account?{" "}
        <a className={classes.link} onClick={handleLogInClick}>
          Log in
        </a>
      </div>

      <Input fullwidth="true" type="text" placeholder="Email" />
      <Input fullwidth="true" type="password" placeholder="Password" />

      <div>
        <Input
          type="checkbox"
          id="terms"
          checked={terms}
          onChange={handleTermsChange}
        />
        <label htmlFor="terms">
          &nbsp; I accept the&nbsp;
          <Link className={classes.link} to="/terms-of-conditions">
            Terms of Conditions{" "}
          </Link>
          and&nbsp;
          <Link className={classes.link} to="/privacy-policy">
            Privacy Policy
          </Link>
        </label>
      </div>

      <Button disabled={!terms} fullwidth="true" onClick={handleRegisterClick}>
        Regiser
      </Button>
    </>
  );
};

export default SignUp;
