import classes from "./input.module.css";

const Input = (props) => {
  let className = [classes.base];
  props.className && className.push(props.className);
  props.fullwidth && className.push("full-width");

  return <input className={className.join(" ")} {...props} />;
};

export default Input;
