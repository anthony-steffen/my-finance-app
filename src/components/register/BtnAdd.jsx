import React from 'react';
import { IoIosAdd } from 'react-icons/io';

function BtnAdd() {
  return (
    <div style={ { position: 'fixed', bottom: '20vh', right: '0.8rem' } }>
      <button
        type="button"
        className="bg-primary rounded-circle d-flex
          justify-content-center align-items-center text-white border
          border-white border-1 fs-3"
        style={ { width: '40px', height: '40px' } }
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        {' '}
        <IoIosAdd />
      </button>
    </div>
  );
}

export default BtnAdd;
