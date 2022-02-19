import classes from "./content.module.css";
import { useContext, useEffect, useState } from "react";

import { AppContext } from "../../context/appContext";

const Content = ({ children }) => {
  const { opendedSideBar } = useContext(AppContext);
  const [className, setClassName] = useState([classes.content]);

  useEffect(() => {
    setClassName(() => [opendedSideBar ? [classes.content] : [classes.closed]]);
  }, [opendedSideBar]);

  return <div className={className.join(" ")}>{children}</div>;
};

export default Content;
