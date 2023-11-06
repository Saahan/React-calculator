import React from "react";
import "./resultdisplay-style.css";

export default function ResultDisplay(props) {
  return (
    <div className="result-display">
      <span className="result-span">{props.display}</span>
    </div>
  );
}
