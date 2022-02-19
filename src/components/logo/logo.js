import classes from "./logo.module.css";
import src from "../../assets/logo.svg";

const Logo = (props) => {
  return (
    <div className={classes.logo} {...props}>
      <img src={src} alt="logo" />
    </div>
  );
};

export default Logo;
