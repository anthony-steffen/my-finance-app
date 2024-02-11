import { useContext } from 'react';
import ExpenseContext from '../../contexts/ExpenseContext';
// import HomeContext from '../../contexts/HomeContext';

import '../../styles/components/Lists.css';
import ExpenseCard from './ExpenseCard';
// import Avatar from '../../assets/inc02.png';

function BillsToPay() {
  const { expenses } = useContext(ExpenseContext);
  // const { theme } = useContext(HomeContext);

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
