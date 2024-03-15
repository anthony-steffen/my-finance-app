import React from 'react';
import SwiperCards from './expenses/SwiperCards';
import BillsToPay from './expenses/BillsToPay';
import Income from './incomes/Income';
import OffCanvas from './register/OffCanvas';

function Content() {
  return (
    <div
      className="container-fluid p-0"
    >
      <SwiperCards />
      <BillsToPay />
      <Income />
      <OffCanvas />
    </div>
  );
}

export default Content;
