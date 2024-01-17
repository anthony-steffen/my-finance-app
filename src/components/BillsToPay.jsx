/* eslint-disable react/jsx-max-depth */

import '../styles/components/Lists.css';

import { useContext } from 'react';
import HomeContext from '../contexts/HomeContext';

function BillsToPay() {
  const { expenses } = useContext(HomeContext);
  console.log(expenses);
  return (
    <div className="row pb-4 w-100">
      <h5 className="title text-center mt-3 mb-2">Contas a pagar</h5>
      <div className="col-xl-4 col-lg-6 mb-1">
        <div className="card">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <div className="ms-3">
                <p className="category fw-bold mb-0">Aluguel</p>
                <p className="value text-muted mb-0">Valor R$:1.000</p>
                <p className="due text-muted mb-0">Vencimento: 16/06/1983</p>
                <span className="badge rounded-pill text-bg-danger">Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-6 mb-1">
        <div className="card">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <div className="ms-3">
                <p className="category fw-bold mb-0">Aluguel</p>
                <p className="value text-muted mb-0">Valor R$:1.000</p>
                <p className="due text-muted mb-0">Vencimento: 16/06/1983</p>
                <span className="badge rounded-pill text-bg-danger">Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-6 mb-1">
        <div className="card">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <div className="ms-3">
                <p className="category fw-bold mb-0">Aluguel</p>
                <p className="value text-muted mb-0">Valor R$:1.000</p>
                <p className="due text-muted mb-0">Vencimento: 16/06/1983</p>
                <span className="badge rounded-pill text-bg-danger">Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-6 mb-1">
        <div className="card">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <div className="ms-3">
                <p className="category fw-bold mb-0">Aluguel</p>
                <p className="value text-muted mb-0">Valor R$:1.000</p>
                <p className="due text-muted mb-0">Vencimento: 16/06/1983</p>
                <span className="badge rounded-pill text-bg-danger">Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-6 mb-1">
        <div className="card">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <div className="ms-3">
                <p className="category fw-bold mb-0">Aluguel</p>
                <p className="value text-muted mb-0">Valor R$:1.000</p>
                <p className="due text-muted mb-0">Vencimento: 16/06/1983</p>
                <span className="badge rounded-pill text-bg-danger">Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-6 mb-1">
        <div className="card">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <div className="ms-3">
                <p className="category fw-bold mb-0">Aluguel</p>
                <p className="value text-muted mb-0">Valor R$:1.000</p>
                <p className="due text-muted mb-0">Vencimento: 16/06/1983</p>
                <span className="badge rounded-pill text-bg-danger">Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BillsToPay;
