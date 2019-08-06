import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navba-expand-lg navbar-dark bg-primary justify-content-between d-flex">
        <h1>
          <Link to={"/"} className="text-light">
            CRUD - React, Redux, REST API
          </Link>
        </h1>

        <Link to={"/products/new"} className="btn btn-danger new-post">
          Add product
        </Link>
      </nav>
    );
  }
}
export default Header;
