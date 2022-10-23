import React from "react";
const styleObject = {
  backgroundColor: "#2520e3",
  fontFamily: "Montserrat",
  color: "#FFFFFF",
  fontSize: "20px",
  borderRadius: "25px",
  // border: "1px solid #000000",

  textDecoration: "none",
  textAlign: "center",
  padding: "15px 5px",
  cursor: "pointer",
};
const Button_4240CC = (props) => {
  return (
    <div style={styleObject}>
      <input
        style={{
          backgroundColor: "#2520e3",
          color: "#FFFFFF",
          fontSize: "20px",
          border: "none",
          cursor: "pointer",
        }}
        type="button"
        onClick={props.func}
        value={props?.text}
      />
    </div>
  );
};

export default Button_4240CC;
