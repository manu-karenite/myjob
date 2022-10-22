import React from "react";
import styles from "../../CSS/Company/Home.module.css";
import Marquee from "react-fast-marquee";
import CompanyHome from "../../Assets/Images/company_home.jpg";
import { Link } from "react-router-dom";
const marqueeObject = {
  fontSize: "45px",
  fontFamily: "prompt",
  fontWeight: "bold",
  backgroundColor: "#e87a5d",
  color: "#382466",
};

const joinButton = {
  width: "500px",
  backgroundColor: "#382466",
  color: "#fff",
  textDecoration: "none",
  marginTop: "10px",
  padding: "10px 60px",
  borderRadius: "5px",
};

const loginButton = {};
const Home = () => {
  return (
    <div className={styles.parentDiv}>
      <Marquee pauseOnHover={true} style={marqueeObject}>
        Everyone belongs here! Hire Best of Candidates.
      </Marquee>
      <div className={styles.homeOuter}>
        <div className={styles.left}>
          <img
            src={CompanyHome}
            alt="Hero Images"
            className={styles.heroImage}
          />
        </div>
        <div className={styles.right}>
          <div className={styles.one}>
            <span className={styles.custom}>myjob</span> provides Best
            Experience <br />
            for companies to roll out <br />
            <span className={styles.custom}>
              job advertisements
              <br />
            </span>{" "}
            & accept <br />
            <span className={styles.custom}>candidate applications</span>,<br />{" "}
            with exciting features
            <br /> & detailed insights.
          </div>
          <div className={styles.two}>
            <Link to="/company/register" style={joinButton}>
              Join Now
            </Link>
          </div>
          <div className={styles.three}>
            Already Registered?{" "}
            <Link to="/company/login" style={loginButton}>
              Login Here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
