// ExpenseList.jsx

import '../styles/components/ExpenseList.css';

function ExpenseList() {
  return (
    <section className="expense-container mt-1 mb-0">
      <h5 className="expense-title">Despesas Recentes</h5>
      <ul className="list-group list-group-light">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <img
              src="https://mdbootstrap.com/img/new/avatars/8.jpg"
              alt=""
              style={ { width: '45px', height: '45px' } }
              className="rounded-circle"
            />
            <div className="ms-3">
              <p className="fw-bold mb-1">John Doe</p>
              <p className="text-muted mb-0">john.doe@gmail.com</p>
            </div>
          </div>
          <span className="badge rounded-pill badge-danger">Active</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <img
              src="https://mdbootstrap.com/img/new/avatars/6.jpg"
              className="rounded-circle"
              alt=""
              style={ { width: '45px', height: '45px' } }
            />
            <div className="ms-3">
              <p className="fw-bold mb-1">Alex Ray</p>
              <p className="text-muted mb-0">alex.ray@gmail.com</p>
            </div>
          </div>
          <span className="badge rounded-pill badge-primary">Onboarding</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <img
              src="https://mdbootstrap.com/img/new/avatars/7.jpg"
              className="rounded-circle"
              alt=""
              style={ { width: '45px', height: '45px' } }
            />
            <div className="ms-3">
              <p className="fw-bold mb-1">Kate Hunington</p>
              <p className="text-muted mb-0">kate.hunington@gmail.com</p>
            </div>
          </div>
          <span className="badge rounded-pill badge-warning">Awaiting</span>
        </li>
      </ul>
    </section>
  );
}

export default ExpenseList;
