import Container from "../container/container";
import Content from "../content/content";
import Fund from "../fund/fund";
import NavBar from "../navBar/navBar";
import SideBar from "../sideBar/sideBar";
import Slider from "../slider/slider";
import Wallets from "../wallets/wallets";
import classes from "./home.module.css";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import GroupWorkOutlinedIcon from "@mui/icons-material/GroupWorkOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import CopyrightOutlinedIcon from "@mui/icons-material/CopyrightOutlined";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import Modal from "../modal/modal";
import depositSrc from "../../assets/deposit.png";
import Button from "../shared/button/button";

const Home = () => {
  const wallets = [
    {
      id: 1,
      currency: "Bitcoin",
      balance: "0",
      pending: "-",
      icon: <MonetizationOnOutlinedIcon color="primary" />,
    },
    {
      id: 2,
      currency: "Ethereum",
      balance: "0",
      pending: "-",
      icon: <GroupWorkOutlinedIcon color="purple" />,
    },
    {
      id: 3,
      currency: "Tether USD",
      balance: "0",
      pending: "-",
      icon: <CurrencyExchangeOutlinedIcon color="warning" />,
    },
    {
      id: 4,
      currency: "USD coin",
      balance: "0",
      pending: "-",
      icon: <AttachMoneyOutlinedIcon color="secondary" />,
    },
    {
      id: 5,
      currency: "Covesting",
      balance: "0",
      pending: "-",
      icon: <CopyrightOutlinedIcon color="primary" />,
    },
  ];

  return (
    <div className={classes.home}>
      <Modal>
        <Container className={classes.modal}>
          <span>Fund your account</span>
          <div className={classes["modal-head"]}>
            Make a deposit and start trading!
          </div>
          <div className={classes["modal-img"]}>
            <img src={depositSrc} alt="deposit-image" />
          </div>
          <div className={classes["modal-desc"]}>
            To start trading with leverage and access all the platform&quot;s
            features, you will first need to make a deposit to your personal
            Wallet.
          </div>
          <Button
            style={{
              display: "flex",
              justifyContent: "space-around",
              margin: "0 auto",
            }}
          >
            Deposit
          </Button>
        </Container>
      </Modal>
      <NavBar />
      <SideBar />
      <Content>
        <Container>
          <Fund />
        </Container>
        <Container className={classes.slider}>
          <Slider />
        </Container>

        <div className={classes.row}>
          <Container>
            <Wallets wallets={wallets} />
          </Container>
          <Container>
            <Fund />
          </Container>
        </div>

        <div className={classes.row}>
          <Container>
            <Wallets wallets={wallets} />
          </Container>
          <Container>
            <Fund />
          </Container>
        </div>
      </Content>
    </div>
  );
};

export default Home;
