import React from "react";
import "./Rentals.css";
import { Link, useLocation } from "react-router-dom";
import logo from '../images/airbnbRed.png';
import { ConnectButton, Icon } from "web3uikit";

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
        <div className="searchReminder">
          <div className="filter">
            {searchFilters.destination}
          </div>
          <div className="vl" />

          <div className="filter">
            {`
              ${searchFilters.checkIn.toLocaleString("default", {month: "short",})}
              ${searchFilters.checkIn.toLocaleString("default", {day: "2-digit",})}
              -
              ${searchFilters.checkOut.toLocaleString("default", {month: "short",})}
              ${searchFilters.checkOut.toLocaleString("default", {day: "2-digit",})}
            `}
          </div>
          <div className="vl" />

          <div className="filter">
            {searchFilters.guests} {`${searchFilters.guests === 1 ? "Guest" : "Guests"}`}
          </div>
          <div className="searchFiltersIcon">
            <Icon fill="#fff" name="filter" size={24} svg="search"/>
          </div>
        </div>
        <div className="lrContainers">
          <ConnectButton />
        </div>
      </div>
    </>
  );
};

export default Rentals;
