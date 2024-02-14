import { IoIosAdd, IoMdClose } from 'react-icons/io';

import { useContext } from 'react';
import HomeContext from '../../contexts/HomeContext';

import TransactionRegister from './TransactionRegister';

function OffCanvas() {
  const { theme } = useContext(HomeContext);
  return (
    <div className="mb-5 fixed-bottom">
      <div className="d-flex justify-content-end align-items-center me-3 mb-5 pb-4">
        <button
          type="button"
          className="bg-primary rounded-circle d-flex
          justify-content-center align-items-center text-white border
          border-white border-1 fs-3"
          style={ { width: '40px', height: '40px' } }
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
          className={ `
          offcanvas-header d-flex justify-content-between text-white
          ${theme === 'light' ? 'bg-primary' : 'bg-dark'}
          ` }
          style={ { height: '10vh' } }
        >
          <h3 className="d-flex w-100 justify-content-center"> Registro de Transações</h3>
          <div>
            <IoMdClose
              type="button"
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
    </div>

  );
}

export default OffCanvas;
