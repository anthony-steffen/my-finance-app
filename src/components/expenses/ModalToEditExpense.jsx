/* eslint-disable react/jsx-max-depth */
import { useContext, useState } from 'react';
import { format, parse } from 'date-fns';
import { AiOutlineClose } from 'react-icons/ai';
import AppContext from '../../contexts/AppContext';
import ExpenseEditForm from './ExpenseEditForm';

function ModalToEditExpense() {
  const {
    selectExpense,
    hundleEditExpense,
    expenses,
    categories,
    theme } = useContext(AppContext);

  const [initialStateExpenseToEdit] = useState({
    description: '',
    value: '',
    paymentMethod: '',
    category: '',
    subCategory: '',
    payer: '',
    receiver: '',
    date: format(new Date(), 'dd/MM/yyyy'),
  });
  const expenseSelected = expenses[selectExpense];

  const onSubmit = (data) => {
    // Formata a data para novamente para ser salva no padrão'PT-BR'
    data.date = format(parse(data.date, 'yyyy-MM-dd', new Date()), 'dd/MM/yyyy');
    const formatValue = parseFloat(data.value).toFixed(2);
    data.value = formatValue;
    // data.value = +data.value;
    hundleEditExpense(data);
  };

  return (
    <div
      className="modal fade"
      id="editExpenseModal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="editExpenseModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog m-auto">
        <div className="modal-content border border-2 border-dark">
          <div
            className={
              `modal-header text-white bg-${theme === 'light' ? 'primary' : 'dark'}`
            }
          >
            <div className="">
              <h1
                className="modal-title fs-5"
                id="editExpenseModalLabel"
              >
                Editar Conta
              </h1>
            </div>
            <AiOutlineClose
              type="button"
              style={ { fontSize: '1.5rem', color: 'red' } }
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body d-flex flex-column align-items-center py-1">
            <ExpenseEditForm
              onSubmit={ onSubmit }
              expenseSelected={ expenseSelected || initialStateExpenseToEdit }
              categories={ categories }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ModalToEditExpense;
