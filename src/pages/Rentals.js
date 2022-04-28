import React from "react";
import "./Rentals.css";
import { Link, useLocation } from "react-router-dom";
import logo from '../images/airbnbRed.png';
import { ConnectButton } from "web3uikit";

const Rentals = () => {
  const { state: searchFilters } = useLocation();
  return (
    <>
      <div className="topBanner">
        <div>
          <Link to='/'>
            <img className="logo" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="searchReminder"></div>
        <div className="lrContainers">
          <ConnectButton />
        </div>
      </div>
    </>
  );
};

export default Rentals;
