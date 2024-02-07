import { useContext } from 'react';
import ExpenseContext from '../../contexts/ExpenseContext';

import '../../styles/components/Lists.css';
import ExpenseCard from './ExpenseCard';

function BillsToPay() {
  const { expenses } = useContext(ExpenseContext);

  return (
    <section className="row pb-4 ps-2 pe-2">
      <h5 className="title text-center mt-3 mb-2">Contas a pagar</h5>
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
