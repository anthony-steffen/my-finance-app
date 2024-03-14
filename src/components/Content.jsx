import React from 'react';
import SwiperCards from './expenses/SwiperCards';
import BillsToPay from './expenses/BillsToPay';
import Income from './incomes/Income';
import OffCanvas from './register/OffCanvas';

function Content() {
  return (
    <div
      className="merda"
      style={ { overflowY: 'scroll', height: '77vh' } }
    >
      <SwiperCards />
      <BillsToPay />
      <Income />
      <OffCanvas />
    </div>
  );
}

export default Content;
