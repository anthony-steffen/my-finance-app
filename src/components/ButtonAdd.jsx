import { IoIosAdd } from 'react-icons/io';
import '../styles/components/ButtonAdd.css';

import 'bootstrap/dist/css/bootstrap.css';

function ButtonAdd() {
  return (
    <div className="container">
      <div className="btn-income-container">
        <span className="text-black">Receita</span>
        <button
          type="button"
          className="btn-inc"
          onClick={ () => console.log('Receita') }
        >
          {' '}
          <IoIosAdd />
        </button>
      </div>
      <div className="btn-expense-container">
        <span className="text-black">Despesa</span>
        <button
          type="button"
          className="btn-exp"
          onClick={ () => console.log('Despesa') }
        >
          {' '}
          <IoIosAdd />
        </button>
      </div>
    </div>

  );
}

export default ButtonAdd;
