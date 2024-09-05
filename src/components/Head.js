import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { FcApproval, FcCancel, FcFeedIn } from "react-icons/fc";

import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Head = () => {
  const [loginLogoutBtn, setloginLogoutBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  // subscribing to the store using selector Read Operation
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between  bg-pink-200 shadow-lg  hover:bg-gray-300 sm:bg-blue-100 lg:bg-gray-100">
      <div className="logo-container">
        <img className="w-40" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="flex p-6 m-6">
          <li className=" flex px-4 p-2">
            Online status: {onlineStatus ? <FcApproval /> : <FcCancel />}
          </li>
          <li className="px-4 p-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 p-2">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 p-2">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 p-2">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 p-2 ">
            <Link to="/cart">
              {cartItems.length} <FcFeedIn />
            </Link>
          </li>
          <button
            className="px-4 "
            onClick={() => {
              loginLogoutBtn === "Login"
                ? setloginLogoutBtn("Logout")
                : setloginLogoutBtn("Login");
            }}
          >
            {loginLogoutBtn}
          </button>
          <li className="px-4 p-2">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Head;
