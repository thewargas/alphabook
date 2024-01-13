import "./Main.css";
import React from "react";
import Wheel from "../Wheel/Wheel";
import balls from "../../images/balls.svg";
import woman from "../../images/woman.svg";
import coinFirst from "../../images/coin-first.svg";
import coinSecond from "../../images/coin-second.svg";
import coinThird from "../../images/coin-third.svg";
import snow from "../../images/snow.svg";
import Methods from "../Methods/Methods";


function Main() {
  return (
    <main className="main">
      <img className="main__balls" src={balls}/>
      <img className="main__balls main__balls_type_left" src={balls}/>
      <img className="main__woman" src={woman}/>
      <h1 className="main__title">spin to win</h1>
      <Wheel />
      <div className="main__coins">
      <button className="main__button">join us now
      <img className="main__snow" src={snow}/>
      </button>
        <img className="main__coin main__coin_type_first" src={coinFirst}/>
        <img className="main__coin main__coin_type_second" src={coinFirst}/>
        <img className="main__coin main__coin_type_third" src={coinSecond}/>
        <img className="main__coin main__coin_type_fourth" src={coinSecond}/>
        <img className="main__coin main__coin_type_fifth" src={coinThird}/>
      </div>
      <Methods />
    </main>
  );
}

export default Main;
