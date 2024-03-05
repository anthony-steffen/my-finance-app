/* eslint-disable react/jsx-max-depth */
import { useContext } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import AppContext from '../../contexts/AppContext';

function ModalToDeleteIncome() {
  const { theme, removeIncome } = useContext(AppContext);
  return (
    <div
      className="modal fade"
      id="deleteIncomeModal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="deleteIncomeModalLabel"
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
              <h1
                className="modal-title fs-5"
                id="deleteIncomeModalLabel"
              >
                Excluir Receita
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
            <p className="fw-bold text-muted"> Deseja realmente excluir essa receita? </p>
          </div>
          <div className="modal-footer d-flex justify-content-center">
            <button
              type="button"
              className={
                `btn text-white ${theme === 'light' ? 'btn-primary' : 'glow-on-hover'}`
              }
              //   "btn glow-on-hover text-white"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={ removeIncome }
            >
              Excluir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalToDeleteIncome;
