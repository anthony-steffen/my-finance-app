import { useContext } from 'react';
import ExpenseContext from '../../contexts/ExpenseContext';

import '../../styles/components/Lists.css';
import ExpenseCard from './ExpenseCard';

function BillsToPay() {
  const { expenses } = useContext(ExpenseContext);

  return (
    <section className="row pb-4 w-100">
      <h5 className="title text-center mt-3 mb-2">Contas a pagar</h5>
      {expenses.map((expense, index) => (
        <ExpenseCard key={ index } expense={ expense } index={ index } />
      ))}
    </section>
  );
}

export default BillsToPay;
