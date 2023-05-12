import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  addPayment,
  deletePayment,
  updatePaymentState,
} from "../reducers/paymentReducer";

function AddContentForm() {
  const dispatch = useDispatch();

  //form data
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [paymentAdded, setPaymentAdded] = useState(false);

  //enabe or disable button

  const addToList = () => {
    const data = {
      amount: amount,
      date: date,
    };
    dispatch(updatePaymentState(data));
    setPaymentAdded(true);
  };

  return (
    <>
      <div className="row">
        <div className="col-12 col-md mb-4">
          Amount
          <input
            type="text"
            id="amount"
            className="form-control"
            placeholder="Amount"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            required
          />
        </div>
        <div className="col-4 col-md mb-4">
          Date
          <input
            type="text"
            id="date"
            className="form-control"
            placeholder="YYYY-MM-DD"
            value={date}
            onChange={(event) => setDate(event.target.value)}
            required
          />
        </div>
      </div>
      <div className="text-end pt-1">
        {paymentAdded ? (
          <>
            <button
              className="btn btn-sm btn-success"
              type="button"
              onClick={() => {
                addToList();
              }}
              disabled={true}
            >
              ADDED
            </button>
            <i className="row text-danger text-center">
              Please click on save changes to save the data
            </i>
          </>
        ) : (
          <button
            className="btn btn-sm btn-secondary"
            type="button"
            onClick={() => {
              addToList();
            }}
          >
            ADD
          </button>
        )}
      </div>
    </>
  );
}

export default AddContentForm;
