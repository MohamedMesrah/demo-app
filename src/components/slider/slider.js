import classes from "./slider.module.css";
import src1 from "../../assets/competition@2x.png";
import src2 from "../../assets/cov@2x.png";
import src3 from "../../assets/referral@2x.png";
import { useEffect, useState } from "react";
import Button from "../shared/button/button";

const Slider = () => {
  let initial = [
    {
      src: src1,
      title: "Join Contest & Win $$!",
      desc: "No deposit required",
      btn: "Join",
    },
    {
      src: src2,
      title: "Copy The Best Traders",
      desc: "& profit together!",
      btn: "Join",
    },
    {
      src: src3,
      title: "Invite Friends",
      desc: "& get extra income!",
      btn: "Get paid",
    },
  ];
  const [srcIndex, setSrcIndex] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setSrcIndex((oldIndex) => (oldIndex + 1) % initial.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  });

  const handleImageSelect = (index) => {
    setSrcIndex(index);
  };

  return (
    <div className={classes.slider}>
      <img src={initial[srcIndex].src} alt="slider-image" />
      <div
        className={classes.dot1}
        style={{ backgroundColor: srcIndex == 0 ? "#fff" : "transparent" }}
        onClick={() => handleImageSelect(0)}
      ></div>
      <div
        className={classes.dot2}
        style={{ backgroundColor: srcIndex == 1 ? "#fff" : "transparent" }}
        onClick={() => handleImageSelect(1)}
      ></div>
      <div
        className={classes.dot3}
        style={{ backgroundColor: srcIndex == 2 ? "#fff" : "transparent" }}
        onClick={() => handleImageSelect(2)}
      ></div>
      <div className={classes.content}>
        <h2>{initial[srcIndex].title}</h2>
        <div>{initial[srcIndex].desc}</div>
        <Button success="true">{initial[srcIndex].btn}</Button>
      </div>
    </div>
  );
};

export default Slider;
