import { NavLink } from "react-router-dom";
import logoMobile from "../../assets/logo-mobile.svg";
import classes from "./navBar.module.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import CopyrightOutlinedIcon from "@mui/icons-material/CopyrightOutlined";
import AltRouteOutlinedIcon from "@mui/icons-material/AltRouteOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";

const NavBar = () => {
  const elements = [
    { to: "/home", name: "Main", icon: <HomeOutlinedIcon /> },
    { to: "/", name: "Margin", icon: <BarChartOutlinedIcon /> },
    { to: "/", name: "Copy-Trading", icon: <CopyrightOutlinedIcon /> },
    { to: "/", name: "Yield", icon: <AltRouteOutlinedIcon /> },
    { to: "/", name: "Contests", icon: <EmojiEventsOutlinedIcon /> },
    { to: "/", name: "Analysis", icon: <InsightsOutlinedIcon /> },
  ];

  return (
    <>
      <div className={classes.logo}>
        <img src={logoMobile} alt="logo-mobile" />
        <span>BTC/USD</span>
      </div>
      <div className={classes["nav-bar"]}>
        <nav>
          {elements.map((e) => (
            <NavLink
              to={e.to}
              key={e.name}
              style={({ isActive }) => {
                return {
                  borderBottom: isActive ? "1px solid white" : "",
                  color: isActive ? "white" : "",
                };
              }}
            >
              {e.icon}
              {e.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
};

export default NavBar;
