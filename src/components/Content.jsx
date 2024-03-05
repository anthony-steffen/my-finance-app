import { useContext } from 'react';
import Header from './Header';
import SwiperCards from './expenses/SwiperCards';
import BillsToPay from './expenses/BillsToPay';
import Income from './incomes/Income';
import OffCanvas from './register/OffCanvas';
import Footer from './footer/Footer';

import AppContext from '../contexts/AppContext';
import '../styles/components/ToggleTheme.css';

function Content() {
  const { theme } = useContext(AppContext);
  return (
    <div className={ `${theme}-theme` }>
      <Header />
      <SwiperCards />
      <BillsToPay />
      <Income />
      <OffCanvas />
      <Footer />
    </div>
  );
}

export default Content;
