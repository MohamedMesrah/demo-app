import classes from "./fund.module.css";
import Button from "../shared/button/button";
import Switch from "@mui/material/Switch";

const Fund = () => {
  return (
    <div className={classes.fund}>
      <div className={classes.head}>
        <span>Total funds</span>
        <div>
          <span>Mask</span>
          <Switch />
        </div>
      </div>
      <div className={classes.currency}>≈ 0 USD</div>
      <div className={classes.controls}>
        <Button transparent="true">Exchange</Button>
        <Button>Deposit</Button>
      </div>
    </div>
  );
};

export default Fund;
