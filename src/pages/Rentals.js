import React from "react";
import "./Rentals.css";
import { Link, useLocation } from "react-router-dom";

const Rentals = () => {
  const { state: searchFilters } = useLocation();
  return (
    <>
     <Link to="/"> Home </Link>
     {
        searchFilters && 
        <div>
          {searchFilters.destination}
        </div>
     }
    </>
  );
};

export default Rentals;
