/* eslint-disable react/jsx-max-depth */
import { useContext } from 'react';
import HomeContext from '../contexts/HomeContext';

import '../styles/components/Lists.css';
// import ExpenseBadge from './ExpenseBadge';
// import ExpenseDetails from './ExpenseDetails';
import ExpenseCard from './ExpenseCard';

function BillsToPay() {
  const { expenses } = useContext(HomeContext);

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
