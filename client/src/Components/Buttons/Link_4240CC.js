import React from "react";
import { Link } from "react-router-dom";
const styleObject = {
  backgroundColor: "#2520e3",
  fontFamily: "Montserrat",
  color: "#FFFFFF",
  fontSize: "20px",
  borderRadius: "25px",
  // border: "1px solid #000000",
  cursor: "pointer",
  textDecoration: "none",
  textAlign: "center",
  padding: "15px 5px",
};
const Link_4240CC = (props) => {
  return (
    <div style={styleObject}>
      <Link to={props?.to} style={{ color: "#fff", textDecoration: "none" }}>
        {props?.text}
      </Link>
    </div>
  );
};

export default Link_4240CC;
