import { NavLink } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import classes from "./sideBar.module.css";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import { AppContext } from "../../context/appContext";

const SideBar = () => {
  const { opendedSideBar, dispatch } = useContext(AppContext);
  const [className, setClassName] = useState([classes["side-bar"]]);
  const elements = [
    { to: "/home", name: "Dashboard", icon: <DashboardOutlinedIcon /> },
    { to: "/", name: "Referrals", icon: <PeopleAltOutlinedIcon /> },
    { to: "/", name: "Reports", icon: <SummarizeOutlinedIcon /> },
    { to: "/", name: "Settings", icon: <SettingsOutlinedIcon /> },
  ];

  useEffect(() => {
    setClassName(() =>
      opendedSideBar
        ? [classes["side-bar"]]
        : [classes["side-bar"], classes["side-bar-close"]]
    );
  }, [opendedSideBar]);

  const handleSideBarToggle = () => {
    dispatch({ type: "SET_SIDEBAR", opendedSideBar: !opendedSideBar });
  };

  return (
    <div className={className.join(" ")}>
      <nav>
        {elements.map((e) => (
          <NavLink
            to={e.to}
            key={e.name}
            style={({ isActive }) => {
              return {
                color: isActive ? "#469ddd" : "",
              };
            }}
          >
            <span className={classes.icon}>{e.icon}</span>
            <span className={!opendedSideBar ? classes["side-bar-names"] : ""}>
              {e.name}
            </span>
          </NavLink>
        ))}
        <div
          className={classes["toggle-side-bar"]}
          onClick={handleSideBarToggle}
        >
          <ArrowBackIosOutlinedIcon
            fontSize="12"
            style={{
              transform: !opendedSideBar ? "rotate(180deg)" : "",
              transition: "transform 0.5s",
            }}
          />
          {opendedSideBar && <span>Hide Menu</span>}
        </div>
      </nav>
    </div>
  );
};

export default SideBar;
