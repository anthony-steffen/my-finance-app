/* eslint-disable react/jsx-max-depth */

import { useContext } from 'react';
import ExpenseContext from '../../contexts/ExpenseContext';
import HomeContext from '../../contexts/HomeContext';

function ModalToPay() {
  const { paydDate, setPaydDate, handlePayExpense } = useContext(ExpenseContext);
  const { theme } = useContext(HomeContext);

  return (
    <div
      className="modal fade"
      id="billsToPayModal"
      tabIndex="-1"
      aria-labelledby="billsToPayModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div
            className={
              `modal-header text-white bg-${theme === 'light' ? 'primary' : 'dark'}`
            }
          >
            <div className="">
              <h1
                className="modal-title fs-5"
                id="billsToPayModalLabel"
              >
                Pagar Conta
              </h1>
            </div>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body d-flex flex-column align-items-center">
            <p className="fw-bold"> Quando essa despesa foi paga? </p>
            <input
              type="date"
              className="form-control mb-3 w-50"
              value={ paydDate }
              onChange={ (e) => setPaydDate(e.target.value) }
            />
          </div>
          <div className="modal-footer d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={ handlePayExpense }
            >
              Salvar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalToPay;
