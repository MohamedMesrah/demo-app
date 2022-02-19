import classes from "./register.module.css";
import Logo from "../logo/logo";
import SignIn from "../signIn/signIn";
import SignUp from "../signUp/signUp";
import { useContext } from "react";
import { AppContext } from "../../context/appContext";
import LockIcon from "@mui/icons-material/Lock";
import sslLogo from "../../assets/ssl.png";
import awsLogo from "../../assets/aws.png";

const Register = () => {
  const { isSignUp } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={classes.register}>
      <Logo className={classes.logo} />
      <form className={classes.form} onSubmit={handleSubmit}>
        {isSignUp ? <SignUp /> : <SignIn />}
        <div className={classes.footer}>
          <LockIcon className={classes.lock} />
          <span>We take the protection of your data seriously</span>
        </div>
      </form>
      <div className={classes.logos}>
        <img src={sslLogo} alt="ssl-logo" />
        <img src={awsLogo} alt="aws-logo" />
      </div>
    </div>
  );
};

export default Register;
