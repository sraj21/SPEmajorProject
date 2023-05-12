// import avatar from "../assets/avatar.png";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light my-navbar mx-2 rounded"
        style={{ backgroundColor: "#d8d9d8" }}
      >
        <div className="container justify-content-start px-5">
          {" "}
          <div className="navbar-brand">
            Debtly: Mortgage Management System{" "}
          </div>
        </div>
        <div className="container justify-content-end px-5">
          <Link
            to={`/`}
            style={{ color: "#000000", textDecoration: "none" }}
          >
            Home {' '}
            <FaHome size={30}/>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
