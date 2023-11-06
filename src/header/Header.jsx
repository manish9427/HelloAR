import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="header">
        <Link to="/fakestore">FakeStore</Link>&nbsp;
        <Link to="/todoapp">TodoApp</Link>&nbsp;
        <Link to="/counter">Counter</Link>&nbsp;
        <Link to="/timer">Timer</Link>
      </div>
    </header>
  );
}

export default Header;
