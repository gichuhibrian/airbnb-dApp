import React from "react";
import "./Home.css";
import bgImage from "../images/frontpagebg.png";
import logo from '../images/airbnb.png';
import { ConnectButton } from "web3uikit";

const Home = () => {

  return (
    <>
      <div className="container" style={{backgroundImage: `url(${bgImage})`}}>
        <div className="containerGradinet"></div>
      </div>
      <div className="topBanner">
        <div>
          <img className="logo" src={logo} alt="logo" />
        </div>
        <div className="tabs">
          <div className="selected">Places To Stay</div>
          <div>Experiences</div>
          <div>Online Experiences</div>
        </div>
        <div className="lrContainers">
          <ConnectButton />
        </div>
      </div>
    </>
  );
};

export default Home;
