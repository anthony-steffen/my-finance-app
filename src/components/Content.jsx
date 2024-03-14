import React from 'react';
import SwiperCards from './expenses/SwiperCards';
import BillsToPay from './expenses/BillsToPay';
import Income from './incomes/Income';
import OffCanvas from './register/OffCanvas';

function Content() {
  return (
    <div
      className="d-flex flex-column justify-content-start align-items-center"
      style={ { overflowY: 'scroll', height: '76vh' } }
    >
      <SwiperCards />
      <BillsToPay />
      <Income />
      <OffCanvas />
    </div>
  );
}

export default Content;
