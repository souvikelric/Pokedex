import React from "react";
import "./App.css";

const GenChooser = (props) => {
  return (
    <div>
      <div className="Choose">Choose Generation</div>
      <div onClick={props.change} className="Gen">
        1
      </div>
      <div onClick={props.change} className="Gen">
        2
      </div>
      <div onClick={props.change} className="Gen">
        3
      </div>
    </div>
  );
};

export default GenChooser;
