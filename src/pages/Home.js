import Header from "../components/Header";
import {Link} from 'react-router-dom'
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { FaUserAlt, FaFileInvoiceDollar,FaCashRegister, FaHistory } from "react-icons/fa";
// import { useDispatch } from "react-redux";

const Home = () => {
  

  return (
    <div>
      <Header/>
      <div
        className="container-fluid p-5"
        style={{ height: "90vh", overflow: "auto" }}
      >
        <div className="row justify-content-center">
        
          <div
            className="card col-4 justify-content-center m-5"
            style={{
              backgroundColor: "#bfbebe",
              height: "25vh",
              cursor: "pointer",
            }}
          >
            <Link to={`/Customers`} style={{color: "#000000", textDecoration: 'none'}}>
            <div className="" style={{ height: "15vh" }}>
              <FaUserAlt size={120}/>
            </div>
            <h5 className="px-3 ">View/Add Customer</h5>
            </Link>
          </div>
          <div
            className="card col-4 justify-content-center m-5"
            style={{
              backgroundColor: "#bfbebe",
              height: "25vh",
              cursor: "pointer",
            }}
          >
            <Link to={`/Mortgages`} style={{color: "#000000", textDecoration: 'none'}}>
            <div className="" style={{ height: "15vh" }}>
              <FaFileInvoiceDollar size={120}/>
            </div>
            <h5 className="px-3 ">View Mortgages</h5>
            </Link>
          </div>
          <div
            className="card col-4 justify-content-center m-5"
            style={{
              backgroundColor: "#bfbebe",
              height: "25vh",
              cursor: "pointer",
            }}
          >
            <Link to={`/Payments`} style={{color: "#000000", textDecoration: 'none'}}>
            <div className="" style={{ height: "15vh" }}>
              <FaCashRegister size={120}/>
            </div>
            <h5 className="px-3 ">Record Payment</h5>
            </Link>
          </div>
          <div
            className="card col-4 justify-content-center m-5"
            style={{
              backgroundColor: "#bfbebe",
              height: "25vh",
              cursor: "pointer",
            }}
          >
            <Link to={`/Home`} style={{color: "#000000", textDecoration: 'none'}}>
            <div className="" style={{ height: "15vh" }}>
              <FaHistory size={120}/>
            </div>
            <h5 className="px-3 ">Transaction History</h5>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
