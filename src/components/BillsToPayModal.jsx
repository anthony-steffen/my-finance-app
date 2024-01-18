/* eslint-disable react/jsx-max-depth */
import React from 'react';

function BillsToPayModal() {
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#billsToPayModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="billsToPayModal"
        tabIndex="-1"
        aria-labelledby="billsToPayModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="billsToPayModalLabel">Modal title</h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body d-flex flex-column align-items-center">
              <p> Quando essa despesa foi paga? </p>
              <input
                type="date"
                className="form-control mb-3 w-50"
                onChange={ (e) => console.log(e.target.value) }
              />
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <button type="button" className="btn btn-primary">Pagar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BillsToPayModal;
