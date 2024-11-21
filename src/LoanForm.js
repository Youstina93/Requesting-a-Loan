import "./FormStyle.css";
import Modal from "./Modal";
import { useState } from "react";
export default function LoanForm() {
  const [errorMessage, setErrorMsg] = useState(null);
  const [visibleModel, setVisibleModel] = useState(false);
  const [formInputs, setFormInputs] = useState({
    name: "",
    phone: "",
    age: "",
    isEmployee: false,
    salary: "",
  });
  function submitForm(event) {
    event.preventDefault();
    setErrorMsg(null);
    if (formInputs.age < 18 || formInputs.age > 100) {
      setErrorMsg("The Age Is Not Allowed");
    } else if (formInputs.phone.length < 10 || formInputs.phone.length > 12) {
      setErrorMsg("The Phone Number Format Is Incorrect");
    }

    setVisibleModel(true);
  }

  function handleDivClick() {
    if (visibleModel) {
      setVisibleModel(false);
    }
  }
  const btnDisabled =
    formInputs.name === "" || formInputs.phone === "" || formInputs.age === "";

  return (
    <div className="flex" onClick={handleDivClick}>
      <form>
        <h1>Requesting a Loan</h1>
        <hr></hr>
        <label>Name:</label>
        <input
          type="text"
          value={formInputs.name}
          onChange={(event) => {
            setFormInputs({ ...formInputs, name: event.target.value });
          }}
        ></input>
        <label>Phone Number:</label>
        <input
          type="phone"
          value={formInputs.phone}
          onChange={(event) => {
            setFormInputs({ ...formInputs, phone: event.target.value });
          }}
        ></input>
        <label>Age:</label>
        <input
          type="number"
          value={formInputs.age}
          onChange={(event) => {
            setFormInputs({ ...formInputs, age: event.target.value });
          }}
        ></input>
        <label>Are You An Employee?</label>
        <input
          type="checkbox"
          checked={formInputs.isEmployee}
          onChange={(event) => {
            setFormInputs({ ...formInputs, isEmployee: event.target.checked });
          }}
        ></input>{" "}
        <br></br>
        <label>Salary</label>
        <select
          value={formInputs.salary}
          onChange={(event) => {
            setFormInputs({ ...formInputs, salary: event.target.value });
          }}
        >
          <option>Less Than 500$</option>
          <option>Between 500$ and 2000$</option>
          <option>Above 2000$</option>
        </select>
        <button
          className={btnDisabled ? "disabled" : ""}
          disabled={btnDisabled}
          onClick={submitForm}
          type="submit"
        >
          Submit
        </button>
      </form>
      <Modal errorMsg={errorMessage} visible={visibleModel} />
    </div>
  );
}
