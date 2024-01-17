import { IoIosAdd, IoMdClose } from 'react-icons/io';

import '../styles/components/ButtonAdd.css';
import 'bootstrap/dist/css/bootstrap.css';
import TransactionRegister from './TransactionRegister';

function ButtonAdd() {
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
            >
              Receita
            </button>

            <button
              type="button"
              className="btn btn-danger border border-1 border-dark"
            >
              Despesa
            </button>
          </div>
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
          <TransactionRegister />
        </div>
      </div>
    </section>

  );
}

export default ButtonAdd;
