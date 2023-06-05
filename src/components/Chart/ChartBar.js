import React from "react";

import "./ChartBar.css";

export default function ChartBar(props) {
  let barFillHeight = "0%";

  if (props.max > 0) {
    barFillHeight = Math.round((props.values / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
}
