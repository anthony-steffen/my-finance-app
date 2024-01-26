/* eslint-disable react/jsx-max-depth */

import { useContext, useState } from 'react';
import { format, parse } from 'date-fns';
import HomeContext from '../contexts/HomeContext';
import ExpenseEditForm from './ExpenseEditForm';

function ModalToEdit() {
  const { selectExpense, hundleEditExpense, expenses } = useContext(HomeContext);
  const [initialStateExpenseToEdit] = useState({
    description: '',
    value: 0,
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

    data.value = +data.value;
    hundleEditExpense(data);
  };

  return (
    <div
      className="modal fade"
      id="editExpenseModal"
      tabIndex="-1"
      aria-labelledby="editExpenseModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <div className="ms-auto">
              <h1
                className="modal-title fs-5"
                id="editExpenseModalLabel"
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
          <div className="modal-body d-flex flex-column align-items-center" />
          <ExpenseEditForm
            onSubmit={ onSubmit }
            expenseSelected={ expenseSelected || initialStateExpenseToEdit }
          />
        </div>
      </div>
    </div>
  );
}
export default ModalToEdit;
