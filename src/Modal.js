import "./FormStyle.css";

export default function Modal({ visible, errorMsg = null }) {
  if (visible) {
    return (
      <div className="modal">
        <div className="modal-content">
          <h2 style={{ color: errorMsg ? "red" : "green" }}>
            {" "}
            {errorMsg !== null
              ? errorMsg
              : "the form has been submitted successfully"}
          </h2>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}
