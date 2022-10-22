import React from "react";
import styles from "../../CSS/Navbar/NavBar.module.css";
import logo from "../../Assets/Images/logo.png";
import { Link } from "react-router-dom";

const stylesheetObject = {
  color: "#382466",
  backgroundColor: "#ec8e79",
  padding: "10px",
  margin: "5px",
  borderRadius: "3px",
  textDecoration: "none",
  fontWeight: "bold",
};
const NavBar = () => {
  return (
    <div className={styles.parent}>
      <div>
        <Link to="/company">
          <img src={logo} alt="logo" className={styles.logoimg} />
        </Link>
      </div>
      <div className={styles.links}>
        <Link style={stylesheetObject} to="/company/login">
          Login
        </Link>
        {/* </div>
      <div> */}
        <Link style={stylesheetObject} to="/company/register">
          Join Us
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
