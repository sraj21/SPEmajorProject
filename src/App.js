import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home";
import Customers from "./pages/Customers";
import Mortgages from "./pages/Mortgages";
import Payments from "./pages/Payments";
import Transactions from "./pages/Transactions";
import { LoggedInUserContext } from "./context/LoggedInUserContext";
import { useContext, useEffect, useState } from "react";

function App() {
  // const [loggedinUser, setLoggedinUser] = useState({
  //   token: null,
  //   user: {},
  //   role: null,
  // });

  // const loggedInUser = loggedinUser.user;
  // useEffect(() => {
  //   console.log("userdetails", loggedinUser);
  // }, [loggedinUser]);

  return (
    // <LoggedInUserContext.Provider value={{ loggedinUser, setLoggedinUser }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Customers" element={<Customers />} /> Customers
          <Route path="/Mortgages" element={<Mortgages />} /> Mortgages
          <Route path="/Payments" element={<Payments />} /> Payments
          {/* <Route path="*" element={<Home />} /> */}
        </Routes>
      </Router>
    // </LoggedInUserContext.Provider>
  );
}

export default App;
