import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Parent from "./parent";
import ParentArray from "./parentArray";

ReactDOM.render(
  <React.StrictMode>
    <Parent />
    <hr />
    <ParentArray />
  </React.StrictMode>,
  document.getElementById("root")
);
