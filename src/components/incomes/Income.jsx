/* eslint-disable react/jsx-max-depth */
import { useContext } from 'react';
import HomeContext from '../../contexts/HomeContext';

function Income() {
  const { theme } = useContext(HomeContext);
  return (
    <section className="row row-income pb-4 mt-3">
      <h5
        className={ `
        title-income text-${theme === 'light' ? 'dark' : 'white'} 
        mt-3 mb-2 d-flex align-items-center justify-content-center gap-2
        ` }
      >

        Receitas
      </h5>
      <div className="col-xl-4 col-lg-6 mb-1">
        <div
          className="card border border-black border-2"
        >
          <div className="card-body">
            <div className="d-flex align-items-center">
              <div className="ms-3">
                <p className="category fw-bold mb-0">Aluguel</p>
                <p className="value text-muted mb-0">Valor R$:1.000</p>
                <p className="due text-muted mb-0">Vencimento: 16/06/1983</p>
                <span className="badge rounded-pill text-bg-success">Recebido</span>
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
                <span className="badge rounded-pill text-bg-success">Recebido</span>
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
                <span className="badge rounded-pill text-bg-success">Recebido</span>
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
                <span className="badge rounded-pill text-bg-warning">A vencer</span>
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
                <span className="badge rounded-pill text-bg-warning">A vencer</span>
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
                <span className="badge rounded-pill text-bg-danger">Em atraso</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Income;
