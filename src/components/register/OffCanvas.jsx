import { IoIosAdd, IoMdClose } from 'react-icons/io';

import { useContext } from 'react';
import ExpenseContext from '../../contexts/ExpenseContext';

import TransactionRegister from './TransactionRegister';
import '../../styles/components/OffCanvas.css';
import 'bootstrap/dist/css/bootstrap.css';

function OffCanvas() {
  const { setTypeRegister } = useContext(ExpenseContext);

  return (
    <section className="fixed-bottom mb-9">
      <div className="btn-register-container d-flex justify-content-end me-2">
        <span className="text-black" />
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
          d-flex flex-row-reverse
          "
          style={ { height: '10vh' } }
        >

          <IoMdClose
            type="button"
            // className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            className="bg-primary text-dark"
            style={ { borderRadius: '50%', width: '40px', height: '40px' } }
          />
          <div
            className="d-flex flex-row w-100 justify-content-center
          align-items-center gap-5"
          >
            <button
              type="button"
              className="btn btn-success border border-1 border-dark"
              onClick={ () => setTypeRegister('income') }
            >
              Receita
            </button>

            <button
              type="button"
              className="btn btn-danger border border-1 border-dark"
              onClick={ () => setTypeRegister('expense') }
            >
              Despesa
            </button>
          </div>
        </div>

        <div
          className=" offcanvas-body bg-secundary p-5"
        >
          <TransactionRegister />
        </div>
      </div>
    </section>

  );
}

export default OffCanvas;
