import classes from "./container.module.css";

const Container = (props) => {
  let className = [classes.container];
  props.className && className.push(props.className);

  return (
    <div className={className.join(" ")} {...props}>
      {props.children}
    </div>
  );
};

export default Container;
