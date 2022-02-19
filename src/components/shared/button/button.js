import classes from "./button.module.css";

const Button = (props) => {
  let className = [classes.base];
  props.className && className.push(props.className);
  props.success && className.push(classes.success);
  props.transparent && className.push(classes.transparent);
  props.fullwidth && className.push("full-width");

  return (
    <button className={className.join(" ")} {...props}>
      {props.children}
    </button>
  );
};

export default Button;
