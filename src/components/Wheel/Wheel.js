import "./Wheel.css";
import React from "react";
import wheel from "../../images/wheel.svg";

function Wheel() {
  return (
    <div className="wheel">
        <img className="wheel__image" src={wheel}/>
        <button className="wheel__button" />
        <img className="wheel__shadow"/>

    </div>
  );
}

export default Wheel;