import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// react CircularBar is used in rating i.e round circle around tha rating

import "./style.scss";

const CircleRating = ({ rating }) => {
  return (
    <div className="circleRating">
      <CircularProgressbar
        value={rating}
        maxValue={10}
        text={rating}
        styles={buildStyles({
          pathColor: rating < 5 ? "red" : rating < 7 ? "orange" : "green",
        })}
      />
    </div>
  );
};

export default CircleRating;
