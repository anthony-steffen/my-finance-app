/* eslint-disable react/jsx-max-depth */
import { useContext, useState } from 'react';
import { format, parse } from 'date-fns';
import { AiOutlineClose } from 'react-icons/ai';
import IncomeEditForm from './IncomeEditForm';
import AppContext from '../../contexts/AppContext';

function ModalToEditIncome() {
  const { categories, theme, selectIncome, editIncome, incomes } = useContext(AppContext);

  const [initialStateIncomeToEdit] = useState({
    description: '',
    value: '',
    paymentMethod: '',
    category: '',
    subCategory: '',
    payer: '',
    receiver: '',
    date: format(new Date(), 'dd/MM/yyyy'),
  });
  const incomeSelected = incomes[selectIncome];

  const onSubmit = (data) => {
    // Formata a data para novamente para ser salva no padrão'PT-BR'
    data.date = format(parse(data.date, 'yyyy-MM-dd', new Date()), 'dd/MM/yyyy');
    const formatValue = parseFloat(data.value).toFixed(2);
    data.value = formatValue;
    // data.value = +data.value;
    editIncome(data);
  };

  return (
    <div
      className="modal fade"
      id="editIncomeModal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="editIncomeModalLabel"
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
                id="editIncomeModalLabel"
              >
                Editar Receita
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
            <IncomeEditForm
              onSubmit={ onSubmit }
              incomeSelected={ incomeSelected || initialStateIncomeToEdit }
              categories={ categories }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ModalToEditIncome;
