import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Logo from "../img/logo.png";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="links">
          <ul>
            <li>
              <a href="/?cat=art">Art</a>
            </li>
            <li>
              <a href="/?cat=science">Science</a>
            </li>
            <li>
              <a href="/?cat=technology">Technology</a>
            </li>
            <li>
              <a href="/?cat=cinema">Cinema</a>
            </li>
            <li>
              <a href="/?cat=design">Design</a>
            </li>
            <li>
              <a href="/?cat=food">Food</a>
            </li>

            {/* <span>{currentUser?.username}</span> */}
            {/* {currentUser ? (
              <span onClick={logout}>
                <ul>
                  <li>Logout</li>
                </ul>
              </span>
            ) : (
              <Link className="link" to="/login">
                Login
              </Link>
            )} */}
          </ul>
          {currentUser ? (
            <span onClick={logout}>
              <ul>
                <li>Logout</li>
              </ul>
            </span>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}
          {currentUser && (
            <span className="write">
              <Link className="link" to="/write">
                Write
              </Link>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
