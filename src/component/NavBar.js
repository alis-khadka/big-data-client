import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="position-absolute start-0 top-0 mt-3 text-center" style={{zIndex: 5}}>
        <Link to="/" className="btn btn-primary ms-5">
          Home
        </Link>
      </div>
      <div className="position-absolute start-0 end-0 top-0 text-center mt-3">
        <Link to="/what-business-to-open" className="btn btn-primary me-5">
          Suitable Business
        </Link>
        <Link to="/overall-economic-activities" className="btn btn-primary">
          Economic Activities
        </Link>
      </div>
    </>
  );
};

export default NavBar;
