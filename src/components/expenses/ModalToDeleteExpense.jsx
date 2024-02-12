/* eslint-disable react/jsx-max-depth */
import { useContext } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import ExpenseContext from '../../contexts/ExpenseContext';
import HomeContext from '../../contexts/HomeContext';

function ModalToDeleteExpense() {
  const { handleDeleteExpense } = useContext(ExpenseContext);
  const { theme } = useContext(HomeContext);
  return (
    <div
      className="modal fade"
      id="deleteExpenseModal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="deleteExpenseModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog position-relative start-50 translate-middle-x">
        <div className="modal-content">
          <div
            className={
              `modal-header text-white bg-${theme === 'light' ? 'primary' : 'dark'}`
            }
          >
            <div className="">
              <h1
                className="modal-title fs-5"
                id="deleteExpenseModalLabel"
              >
                Excluir Despesa
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
            <p className="fw-bold text-muted"> Deseja realmente excluir essa despesa? </p>
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
              onClick={ handleDeleteExpense }
            >
              Excluir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalToDeleteExpense;
