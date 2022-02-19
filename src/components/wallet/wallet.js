import Button from "../shared/button/button";
import classes from "./wallet.module.css";

const Wallet = ({ wallet }) => {
  return (
    <div className={classes.wallet}>
      <div className={classes["wallet-currency"]}>
        {wallet.icon}
        {wallet.currency}
      </div>
      <div className={classes["wallet-balance"]}>{wallet.balance}</div>
      <div className={classes["wallet-pending"]}>{wallet.pending}</div>
      <div className={classes["wallet-controls"]}>
        <Button>Deposit</Button>
        <Button transparent="true">Withdraw</Button>
      </div>
    </div>
  );
};

export default Wallet;
