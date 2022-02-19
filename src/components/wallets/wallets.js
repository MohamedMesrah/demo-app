import Wallet from "../wallet/wallet";
import classes from "./wallets.module.css";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

const Wallets = ({ wallets }) => {
  return (
    <div className={classes.wallets}>
      <div className={classes.head}>
        <div className={classes["head-wallet"]}>
          <AccountBalanceWalletOutlinedIcon />
          <span>Wallets</span>
        </div>
        <div className={classes["head-total"]}>Total Equity</div>
      </div>
      <div className={classes["wallet-table-head"]}>
        <div className={classes["wallet-table-head-currency"]}>Currency</div>
        <div className={classes["wallet-table-head-balance"]}>Balance</div>
        <div className={classes["wallet-table-head-pending"]}>Pending</div>
        <div className={classes["wallet-table-head-controls"]}></div>
      </div>
      {wallets.length && wallets.map((w) => <Wallet key={w.id} wallet={w} />)}
    </div>
  );
};

export default Wallets;
