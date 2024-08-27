import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { FcApproval, FcCancel } from "react-icons/fc";
import useOnlineStatus from "../utils/useOnlineStatus";

const Head = () => {
  const [loginLogoutBtn, setloginLogoutBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online status: {onlineStatus ? <FcApproval /> : <FcCancel />}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>{" "}
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              loginLogoutBtn === "Login"
                ? setloginLogoutBtn("Logout")
                : setloginLogoutBtn("Login");
            }}
          >
            {loginLogoutBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Head;
