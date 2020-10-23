import React from "react";
import { Link } from "react-router-dom";

function header(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">

        DashBoard V3

        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
         
          <li className="nav-item">
            <Link className="nav-link" to="/Dashboard/ViewUser">
              View Users <span className="sr-only">(current)</span>{" "}
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/Dashboard/AddUser">
              Add User 
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/Dashboard/AddPatent">
              Add Patent
            </Link>
          </li>

        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default header;
