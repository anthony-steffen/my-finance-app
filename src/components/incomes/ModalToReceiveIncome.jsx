/* eslint-disable react/jsx-max-depth */

import { useContext } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import IncomeContext from '../../contexts/IncomeContext';
import HomeContext from '../../contexts/HomeContext';

function ModalToReceiveIncome() {
  const { receivedDate, setReceivedDate, receiveIncome } = useContext(IncomeContext);
  const { theme } = useContext(HomeContext);

  return (
    <div
      className="modal fade"
      id="IncomeToReceiveModal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="IncomeToReceiveModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog m-auto">
        <div className="modal-content">
          <div
            className={
              `modal-header text-white bg-${theme === 'light' ? 'primary' : 'dark'}`
            }
          >
            <div className="">
              <h1 className="modal-title fs-5" id="IncomeToReceiveModalLabel">
                Pagar Conta
              </h1>
            </div>
            <AiOutlineClose
              type="button"
              style={ { fontSize: '1.5rem', color: 'red' } }
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body d-flex flex-column align-items-center">
            <p className="fw-bold"> Quando essa despesa foi paga? </p>
            <input
              type="date"
              className="form-control mb-3 w-50"
              value={ receivedDate }
              onChange={ (e) => setReceivedDate(e.target.value) }
            />
          </div>
          <div className="modal-footer d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={ receiveIncome }
            >
              Salvar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalToReceiveIncome;
