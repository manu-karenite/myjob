import React from "react";
import Link_4240CC from "../../Components/Buttons/Link_4240CC.js";
import styles from "../../CSS/Company/Login.module.css";
import LogoWhite from "../../Assets/Images/whitelogo.svg";
import Button_4240CC from "../../Components/Buttons/Button_4240CC.js";
import { toast } from "react-hot-toast";
import { validateEmail } from "../../Utilities/functions.js";
import { companyRegister } from "../../API/Company/auth.js";
import ReCAPTCHA from "react-google-recaptcha";

const Register = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [verified, setVerified] = React.useState(false);

  const loginHandler = () => {
    if (verified === false) {
      toast("Please Verify the Captcha to Continue");
      return;
    }
    if (name === "" || name.length < 3) {
      toast.error("Please enter a Valid Company Name of minimum 3 characters");
      return;
    }
    if (email === "") {
      toast.error("Email Address is mandatory");
      return;
    }
    const result = validateEmail(email);
    if (result === null) {
      toast.error("Please enter a valid email address");
      return;
    }
    console.log("data sending");
    companyRegister(email, name)
      .then((res) => toast.success(res.data))
      .catch((err) => {
        toast.error(
          err?.response?.data !== undefined
            ? err?.response?.data
            : "Error Handling Requests. Please Try again after some time."
        );
      });
  };
  function onChange(value) {
    if (value !== null || value !== undefined) {
      setVerified(true);
    }
  }

  return (
    <div className={styles.outer}>
      <div className={styles.inner_level1}>
        <div className={styles.inner_level1_left}>
          <div className={styles.inner_leve1_left_outer}>
            <div className={styles.top}>
              <img src={LogoWhite} alt="logo" />
              <span>
                my<b>JOB</b>
              </span>
            </div>
            <div className={styles.middle}>
              <div className={styles.middle_one}>
                Start Your Journey with us.
              </div>
              <div className={styles.middle_two}>
                Discover and hire best fit for your company.
              </div>
            </div>

            <div className={styles.bottom}>
              <Link_4240CC text="Already a Member? Login" to="/company/login" />
            </div>
          </div>
        </div>
        <div className={styles.inner_level1_right}>
          <div className={styles.inner_level1_right_top}>
            <div className={styles.title}>Register</div>
            <div className={styles.title1}>
              Set up your account on <b>myJOB</b>
              <br /> to start hiring best of candidates.
            </div>
            <div className={styles.not_title}>
              <form>
                <input
                  type="text"
                  className={styles.inputField}
                  placeholder="Name of Company"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />

                <br />
                <input
                  type="email"
                  className={styles.inputField}
                  placeholder="Enter Company email-address"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <br />
                <br />
                <center>
                  <ReCAPTCHA
                    sitekey={process.env.REACT_APP_CLIENT_RECAPCTHA}
                    onChange={onChange}
                  />
                </center>
              </form>
            </div>
          </div>

          <div className={styles.inner_level1_right_bottom}>
            <Button_4240CC func={loginHandler} text="SignUp" theme="dark" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
