import React from "react";
import Link_4240CC from "../../Components/Buttons/Link_4240CC.js";
import styles from "../../CSS/Company/Login.module.css";
import LogoWhite from "../../Assets/Images/whitelogo.svg";
import Button_4240CC from "../../Components/Buttons/Button_4240CC.js";
import { toast } from "react-hot-toast";
import { validateEmail } from "../../Utilities/functions.js";
import { companyLogin } from "../../API/Company/auth.js";
const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const loginHandler = () => {
    if (email === "") {
      toast.error("Please enter an Email Address");
      return;
    }
    const result = validateEmail(email);
    if (result === null) {
      toast.error("Please enter a valid email address");
      return;
    }
    if (password === "") {
      toast.error("Please enter your Password");
      return;
    }

    companyLogin(email, password)
      .then((res) => toast.success(res.body))
      .catch((err) => {
        toast.error(
          err?.response?.data !== undefined
            ? err?.response?.data
            : "Error Handling Requests. Please Try again after some time."
        );
        setEmail("");
        setPassword("");
      });
  };
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
              <Link_4240CC text="New Here? Join Us" to="/company/register" />
            </div>
          </div>
        </div>
        <div className={styles.inner_level1_right}>
          <div className={styles.inner_level1_right_top}>
            <div className={styles.title}>Login</div>
            <div className={styles.not_title}>
              <form>
                <input
                  type="email"
                  className={styles.inputField}
                  placeholder="Company Email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <br />
                <input
                  type="password"
                  className={styles.inputField}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </form>
            </div>
          </div>
          <div className={styles.inner_level1_right_bottom}>
            <Button_4240CC func={loginHandler} text="Login" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
