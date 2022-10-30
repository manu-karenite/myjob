import axios from "axios";
const companyLogin = async (email, password) => {
  const result = await axios({
    method: "POST",
    url: `${process.env.REACT_APP_BACKEND_URL}/company/login`,
    data: { email, password },
  });
  return result;
};

const companyRegister = async (email, name) => {
  const result = await axios({
    method: "POST",
    url: `${process.env.REACT_APP_BACKEND_URL}/company/register`,
    data: { email, name },
  });
  return result;
};

export { companyLogin, companyRegister };
