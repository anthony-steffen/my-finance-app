import { IoIosAdd } from 'react-icons/io';
import { useContext } from 'react';
import HomeContext from '../contexts/HomeContext';

import '../styles/components/ButtonAdd.css';
import 'bootstrap/dist/css/bootstrap.css';
import FormRegister from './FormRegister';

function ButtonAdd() {
  const { setTypeRegister } = useContext(HomeContext);

  const handleTypeIncome = () => {
    setTypeRegister('income');
  };

  const handleTypeExpense = () => {
    setTypeRegister('expense');
  };

  return (
    <section className="container fixed-bottom mb-8 me-2">
      <div className="btn-register-container">
        <span className="text-black">Receita</span>
        <button
          type="button"
          className="btn-inc"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          {' '}
          <IoIosAdd />
        </button>
      </div>
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
        style={ { width: '100vw', height: '100vh' } }
      >
        <div
          className="
          offcanvas-header
          bg-primary
          text-white
          col-12 col-md-12 col-sm-12 col-xl-12
          "
          style={ { height: '10vh' } }
        >
          <div
            style={ { width: '100%', display: 'flex', justifyContent: 'center' } }
          >
            <button
              className="btn btn-success btn-sm btn-income"
              style={ { width: '130px' } }
              type="button"
              onClick={ handleTypeIncome }
            >
              Receita
            </button>
            <button
              className="btn btn-danger btn-sm ms-1 btn-expense"
              style={ { width: '130px' } }
              type="button"
              onClick={ handleTypeExpense }
            >
              Despesa
            </button>
          </div>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>

        <div
          className="
        offcanvas-body
        py-3
        bg-secundary
        d-flex
        flex-column
        justify-content-flex-start
        align-items-center
        "
        >
          <FormRegister />
        </div>
      </div>
    </section>

  );
}

export default ButtonAdd;
