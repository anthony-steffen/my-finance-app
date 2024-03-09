/* eslint-disable react/jsx-max-depth */
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import { useContext } from 'react';
import FilterTransactions from './register/FilterTransactions';
import AppContext from '../contexts/AppContext';

function MenuHamburger() {
  const { typeRegister, setTypeRegister } = useContext(AppContext);
  console.log(typeRegister);
  return (
    <div className="d-flex flex-column justify-content-between">
      <div className="text-white text-center">
        Relatórios
      </div>
      <button
        className="toggle-button"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
        aria-label="Toggle navigation"
        style={ { border: 'none' } }
      >
        <IoMdMenu size="clamp(2rem, 2vw, 3rem)" color="white" />
      </button>
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        data-bs-backdrop="static"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        style={ { width: '420px' } }
      >
        <div
          className="offcanvas-header fixed"
          style={ { paddingLeft: '30%' } }
        >
          <h5
            className="offcanvas-title"
            id="offcanvasNavbarLabel"
          >
            Extrato da conta
          </h5>
          <IoMdClose
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            className="text-danger"
            style={ { width: '30px', height: '35px' } }
          />
        </div>

        <div className="d-flex justify-content-around my-3">
          <div className="d-inline-flex gap-1">
            <button
              className="btn btn-primary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Data da transação
            </button>
          </div>
          <div className="d-inline-flex gap-1">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-primary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Tipo da transação
              </button>
              <div className="dropdown-menu">
                <button
                  className="dropdown-item"
                  type="button"
                  value="expense"
                  onClick={ (e) => setTypeRegister(e.target.value) }
                >
                  Despesa
                </button>
                <button
                  className="dropdown-item"
                  type="button"
                  value="income"
                  onClick={ (e) => setTypeRegister(e.target.value) }
                >
                  Receita
                </button>
                <button
                  className="dropdown-item"
                  type="button"
                  value=""
                  onClick={ (e) => setTypeRegister(e.target.value) }
                >
                  Tudo
                </button>

              </div>
            </div>
          </div>
        </div>
        <div className="col-12 border collapse" id="collapseExample">
          <div className="justify-content-center border w-100">
            <p className="text-center fw-bold my-3">
              Escolha o intervalo de dias, mêses ou anos.
            </p>
          </div>
          <FilterTransactions />
        </div>
      </div>
    </div>
  );
}

export default MenuHamburger;
