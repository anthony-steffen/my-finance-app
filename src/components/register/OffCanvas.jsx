import { IoIosAdd, IoMdClose } from 'react-icons/io';

import TransactionRegister from './TransactionRegister';
import '../../styles/components/OffCanvas.css';
import 'bootstrap/dist/css/bootstrap.css';

function OffCanvas() {
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
          d-flex
          justify-content-between
          "
          style={ { height: '10vh' } }
        >
          <h3 className="d-flex w-100 justify-content-center"> Registro de Transações</h3>
          <div>
            <IoMdClose
              type="button"
              // className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              className="text-danger"
              style={ { borderRadius: '50%', width: '35px', height: '35px' } }
            />
          </div>
        </div>

        <div
          className=" offcanvas-body bg-secundary w-100 ps-0
          pe-0 d-flex flex-column align-items-center"
        >
          <TransactionRegister />
        </div>
      </div>
    </section>

  );
}

export default OffCanvas;
