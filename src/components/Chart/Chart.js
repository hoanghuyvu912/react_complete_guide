import React from "react";

import ChartBar from "./ChartBar";

import "./Chart.css";

export default function Chart(props) {
  return (
    <div className="chart">
      {props.dataPoints.map((e) => {
        return (
          <ChartBar
            key={e.label}
            value={e.value}
            maxValue={null}
            label={e.label}
          />
        );
      })}
    </div>
  );
}
