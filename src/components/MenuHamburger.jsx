/* eslint-disable react/jsx-max-depth */
import { IoMdMenu } from 'react-icons/io';
import FilterTransactions from './register/FilterTransactions';

function MenuHamburger() {
  console.log('MenuHamburger');
  return (
    <div>
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
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Extrato da conta</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body px-0">
          {/* <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="http://">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="http://"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="http://">Action</a></li>
                <li><a className="dropdown-item" href="http://">Another action</a></li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li><a className="dropdown-item" href="http://">Something else here</a></li>
              </ul>
            </li>
          </ul> */}
          <div className="d-flex justify-content-around">
            <p className="d-inline-flex gap-1">
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
            </p>
            <p className="d-inline-flex gap-1">
              <button
                className="btn btn-primary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#typeTransaction"
                aria-expanded="false"
                aria-controls="typeTransaction"
              >
                Tipo da transação
              </button>
            </p>
          </div>
          <div className="collapse" id="collapseExample">
            <div className="col-12 border">
              <div className="row justify-content-center border-bottom">
                <p className="text-center fw-bold my-3">Escolha a data da transação:</p>
              </div>
              <FilterTransactions />
            </div>
          </div>
          <div className="collapse" id="typeTransaction">
            <div className="col-12 border">
              <div className="row justify-content-center border-bottom">
                <p className="text-center fw-bold my-3">Escolha o tipo da transação:</p>
              </div>
              <div className="row justify-content-center">
                <div className="col-12 d-flex justify-content-center">
                  <button
                    type="button"
                    className="btn btn-primary rounded-pill"
                  >
                    Receita
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary rounded-pill"
                  >
                    Despesa
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuHamburger;
