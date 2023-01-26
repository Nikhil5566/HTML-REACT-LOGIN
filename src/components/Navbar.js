import React from "react";
import "./Navbar.css";
import Proptypes from "prop-types";

const Navbar = (props, e) => {
  const submitTodoHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="Nav">
      <div className="Nav-1">{props.logo}</div>
      <div className="Nav-2">
        <ul>
          <li>
            <a href="http://www.google.com">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
          <li>
            <div className="dropdown">
              <button onClick={submitTodoHandler} className="btn">
                Login
              </button>
              <div className="dropdown-menu">
                <form className="login-form">
                  <label for="email">Email</label>
                  <input type="email" name="email" id="email"></input>
                  <label for="password">Password</label>
                  <input type="password" name="password" id="password"></input>
                  <button type="submit"> Login</button>
                </form>
              </div>
            </div>
          </li>
          <li>
            <button className="btn">Sign Up</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
