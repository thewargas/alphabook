import "./Logo.css";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import hat from "../../images/hat.svg";

function Logo() {
  return (
    <Link to="/" className="logo">
      <img className="logo__image" src={logo} alt="Логотип ALPHABOOK" />
      <img className="logo__hat-image" src={hat} alt="Шапка санты" />
    </Link>
  );
}

export default Logo;
