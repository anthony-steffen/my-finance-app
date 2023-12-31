import { IoMdMenu } from 'react-icons/io';
import logo from '../assets/logo.png';

import '../styles/components/Header.css';

function Header() {
  return (
    <nav className="navbar bg-primary sticky-top w-100">
      <div
        className="container-fluid"
        style={ {
          display: 'flex',
          flexDirection: 'row-reverse',
          justifyContent: 'space-between',
        } }
      >
        <img src={ logo } alt="logo" style={ { width: '80px' } } />
        <div className="navbar-title-container text-white">
          <h3 className="navbar-title mb-0">
            Saldo da conta:
          </h3>
          <span className="navbar-value">R$ 0,00</span>
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
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
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
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex mt-3" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
