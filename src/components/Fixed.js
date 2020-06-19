import React from "react";

const Fixed = (props) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        height: "800px",
        borderTop: "2px solid black",
        marginTop: "10px",
      }}
      className="Fixed"
    >
      {props.children}
    </div>
  );
};
export default Fixed;
