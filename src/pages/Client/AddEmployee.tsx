import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

function AddEmployee() {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-success"
        onClick={() => setShowModal(true)}
      >
        Add Client
      </button>

      {showModal && (
        <div
          className="modal fade show"
          tabIndex={-1}
          role="dialog"
          style={{ display: "block" }}
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header justify-content-between bg-light">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Add Client Details
                </h5>
                <button
                  type="button"
                  className="close border border-0"
                  onClick={closeModal}
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {/* Insert modal body content here */}
                <div className="row">
                  
                    <div className="form-group col">
                      <label className="text-secondary">Client ID:</label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        placeholder="Ex: 12-abi"
                      />
                    </div>
                  
                 
                    <div className="form-group col">
                      <label className="text-secondary">Gender:</label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        placeholder="M/F"
                      />
                    
                  </div>
                </div>
                  <div className="row">

                <div className="form-group col">
                  <label className="text-secondary">Date of Birth:</label>
                  <input
                    type="date"
                    className="form-control form-control-sm"
                    placeholder="MM-DD-YYYY"
                    />
                    </div>
                <div className="form-group col">
                  <label className="text-secondary">Date of Joining:</label>
                  <input
                    type="date"
                    className="form-control form-control-sm"
                    placeholder="MM-DD-YYYY"
                    />
                </div>
                    </div>
                    <div className="row">

                <div className="form-group col">
                  <label className="text-secondary">Email:</label>
                  <input
                    type="email"
                    className="form-control form-control-sm"
                    placeholder="example@123.com"
                    />
                </div>
                <div className="form-group col">
                  <label className="text-secondary">Phone Number:</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    maxLength={10}
                    placeholder="000-000-0000"
                    />
                </div>
                    </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={closeModal}
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showModal && <div className="modal-backdrop fade show"></div>}
    </div>
  );
}

export default AddEmployee;
