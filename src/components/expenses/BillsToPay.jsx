import { useContext } from 'react';
import ExpenseContext from '../../contexts/ExpenseContext';
import HomeContext from '../../contexts/HomeContext';

import '../../styles/components/Lists.css';
import ExpenseCard from './ExpenseCard';
import Avatar from '../../assets/pb02.png';

function BillsToPay() {
  const { expenses } = useContext(ExpenseContext);
  const { theme } = useContext(HomeContext);

  if (expenses.length === 0) {
    return (
      <div
        className="card text-center bg-light mt-4 col-xl-7 mx-auto"
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
    <section className="row row-expense py-3 mt-4 bg-light">
      <h5
        className="text-danger mb-2 ms-3 fw-bold"
        style={ {
          width: '90%',
          margin: 'auto',
          textDecoration: 'underline',
          textUnderlineOffset: '0.5rem',
          textShadow: '1px 1px 0px black',
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
