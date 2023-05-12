import Header from "../components/Header";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import Accordion from "react-bootstrap/Accordion";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import AddMortgageForm from "../components/AddMortgageForm";
import { addMortgageURL, fetchMortgagesURL } from "../assets/URLs";
import { updateMortgageState } from "../reducers/mortgageReducer";
// import { updateMortgageListState } from "../reducers/MortgageListReducer";

const Mortgages = () => {
  const dispatch = useDispatch();
  //   const [name, setName] = useState("");
  const mortgage = useSelector((state) => state.mortgage.value);
  const [cid, setCid] = useState("");
  //   const mortgageList = useSelector((state) => state.mortgageList.value);
  //   const [query, setQuery] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addMortgage = async () => {
    console.log("adding Mortgage", mortgage);
    const request = new Request(`${addMortgageURL}/${cid}`, {
      method: "POST",
      body: JSON.stringify(mortgage),
      headers: {
        "Content-Type": "application/json",
      },
      //   headers: {
      //     "Content-Type": "application/json",
      //     Authorization: token,
      //     "ngrok-skip-browser-warning": "69420",
      //   },
    });
    await fetch(request)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));

    handleClose();
    dispatch(updateMortgageState([]));
  };

  //   useEffect(() => {
  //     fetchMortgageList();
  //   }, []);

  //   async function fetchMortgageList() {
  //     await axios
  //       .get(`${fetchMortgagesURL}`)
  //       .then((response) => {
  //         console.log("My Mortgages", response.data);
  //         dispatch(updateMortgageListState(response.data));
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }
  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Mortgage</Modal.Title>
        </Modal.Header>
        <form className="p-3">
          <input
            type="text"
            id="cid"
            className="form-control"
            placeholder="Enter Customer ID"
            value={cid}
            onChange={(event) => setCid(event.target.value)}
            required
          />
        </form>
        <Modal.Body>
          <form className="">
            <AddMortgageForm />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addMortgage}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Header />
      <div
        className="container-fluid mt-3"
        style={{ overflow: "auto", height: "80%" }}
      >
        <div className="row">
          <div className="col-3">
            <input
              className="search__input"
              type="text"
              placeholder="Search Mortgage"
              //   onChange={(event) => setQuery(event.target.value)}
            />
          </div>

          <button
            className="btn btn-sm btn-secondary col-3"
            onClick={handleShow}
          >
            Add Mortgage
          </button>
        </div>

        {/* <div className="row m-3 align-items-center">
          {MortgageList
            ?.filter((cust) => {
              if (query === "") {
                return cust;
              } else if (
                cust.firstName.toLowerCase().includes(query.toLowerCase())
              ) {
                return cust;
              } else if (
                cust.lastName.toLowerCase().includes(query.toLowerCase())
              ) {
                return cust;
              }
            })
            .map((cust, index) => (
              <div key={index}>
                <Accordion>
                  <Accordion.Item eventKey={index}>
                    <Accordion.Header>
                      <div
                        key={cust?.id}
                        className="col-12 row align-items-center justify-content-between p-2 my-2"
                      >
                        <div className="col-12 row align-items-center justify-content-between p-2 my-2">
                          <div className="col-sm-2">
                            <b>
                              {cust?.firstName} {cust?.lastName}
                            </b>
                          </div>
                          <div className="col-sm-2">
                            <b>
                              Mortgage id: {cust?.id} 
                            </b>
                          </div>
                        </div>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="row justify-content-center">
                        <div className="col-md-3 col-sm-6 col-12 mt-2 justify-content-center">
                          <b>Contact: </b>
                          {cust?.contact}{" "}
                        </div>
                        <div className="col-md-3 col-sm-6 col-12 mt-2 justify-content-center">
                          <b>Email: </b>
                          {cust?.email}{" "}
                        </div>

                        <div className="col-md-3 col-sm-6 col-12 mt-2 justify-content-center">
                          <b>Address: </b>
                          {Mortgage?.address} {" "}
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            ))}
        </div> */}
      </div>
    </div>
  );
};
export default Mortgages;
