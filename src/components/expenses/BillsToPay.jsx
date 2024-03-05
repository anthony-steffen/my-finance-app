import { useContext } from 'react';
import AppContext from '../../contexts/AppContext';

import '../../styles/components/Lists.css';
import ExpenseCard from './ExpenseCard';
import Avatar from '../../assets/pb02.png';

function BillsToPay() {
  const { expenses, theme } = useContext(AppContext);

  if (expenses.length === 0) {
    return (
      <div
        className="card text-center bg-light mt-3 col-xl-7 mx-auto"
      >
        <div
          className="img-container"
        >
          <img
            src={ Avatar }
            className="col-12 col-md-6 col-xl-3 mx-auto d-block mb-1 rounded-3"
            alt="..."
          />
        </div>
        <div className={ `card-body bg-${theme} py-3 px-2 mb-1 rounded-3` }>
          <h5
            className={
              `card-title text-center text-${theme === 'light' ? 'dark' : 'light'}`
            }
          >
            Vencimentos, e agora?
          </h5>
          <p className={ `text-${theme === 'light' ? 'dark' : 'light'}` }>
            Ajudamos você a lembrar de todas as suas contas.
            Adicione-as e fique tranquilo.
          </p>
        </div>
      </div>
    );
  }
  return (
    <section
      className="row row-expense py-3 mt-4 bg-light"
      style={ {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: '100%',
        margin: 'auto',
      } }
    >
      <h5
        className={ `
        text-danger d-flex align-items-center mb-1
        justify-content-start ms-3 fw-bold
        ` }
        style={ {
          width: '90%',
          margin: 'auto',
          textDecoration: 'underline',
          textUnderlineOffset: '0.5rem',
        } }
      >

        Contas a Pagar
      </h5>
      {expenses.map((expense, index) => (
        <ExpenseCard
          key={ index }
          expense={ { ...expense, value: expense.value.toString() } }
          index={ index }
        />
      ))}
    </section>
  );
}

export default BillsToPay;
