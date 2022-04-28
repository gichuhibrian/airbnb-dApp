import React from "react";
import "./Home.css";
import bgImage from "../images/frontpagebg.png";
import logo from '../images/airbnb.png';
import { ConnectButton, Select, DatePicker, Input } from "web3uikit";

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
      <div className="tabContent">
        <div className="searchFields">
          <div className="inputs">
            Location
            <Select 
              defaultOptionIndex={0}
              onChange={(data) => console.log(data.label)}
              options={[
                {
                  id: "ny",
                  label: "New York",
                },
                {
                  id: "la",
                  label: "Los Angeles",
                },
                {
                  id: "ch",
                  label: "Chicago",
                },
                {
                  id: "sf",
                  label: "San Francisco",
                }
              ]}
            />
          </div>
          <div className="vl" />

          <div className="inputs">
            Check In
            <DatePicker 
              id="checkIn"
              onChange={(event) => console.log(event.date)}
            />
          </div>
          <div className="vl" />

          <div className="inputs">
            Check Out
            <DatePicker 
              id="checkOut"
              onChange={(event) => console.log(event.date)}
            />
          </div>
          <div className="vl" />

          <div className="inputs">
            Guests
            <Input 
              value={2}
              name="AddGuests"
              type="number"
              onChange={(event) => console.log(Number(event.target.value))}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
