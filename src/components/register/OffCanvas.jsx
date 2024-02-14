import { IoMdClose } from 'react-icons/io';

import { useContext } from 'react';
import HomeContext from '../../contexts/HomeContext';

import TransactionRegister from './TransactionRegister';
import BtnAdd from './BtnAdd';

function OffCanvas() {
  const { theme } = useContext(HomeContext);
  return (
    <section style={ { position: 'fixed', bottom: '17vh', right: '1rem' } }>
      {/* <div> */}
      <BtnAdd />
      {/* </div> */}

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
    </section>

  );
}

export default OffCanvas;
