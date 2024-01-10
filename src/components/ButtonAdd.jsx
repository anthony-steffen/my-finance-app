import { IoIosAdd } from 'react-icons/io';
import '../styles/components/ButtonAdd.css';

import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import OffCanvasIncome from './OffCanvasIncome';

function ButtonAdd() {
  const [registerTyype, setRegisterType] = useState('');

  return (
    <section className="container fixed-bottom mb-8 me-2">
      <div className="btn-income-container">
        <span className="text-black">Receita</span>
        <button
          type="button"
          className="btn-inc"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
          onClick={ () => setRegisterType('income') }
        >
          {' '}
          <IoIosAdd />
          <OffCanvasIncome />
        </button>
      </div>
    </section>

  );
}

export default ButtonAdd;
