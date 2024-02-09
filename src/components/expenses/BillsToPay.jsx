import { useContext } from 'react';
import ExpenseContext from '../../contexts/ExpenseContext';
import HomeContext from '../../contexts/HomeContext';

import '../../styles/components/Lists.css';
import ExpenseCard from './ExpenseCard';

function BillsToPay() {
  const { expenses } = useContext(ExpenseContext);
  const { theme } = useContext(HomeContext);

  return (
    <section className="row row-expense pb-4 pt-3">
      <h5
        className={ `
        title-expense text-${theme === 'light' ? 'dark' : 'white'} 
        mt-3 mb-2 d-flex align-items-center justify-content-center gap-2
        ` }
      >

        Contas a pagar
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
