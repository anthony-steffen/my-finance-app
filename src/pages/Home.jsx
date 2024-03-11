// Home.jsx
import AppProvider from '../contexts/AppProvider';
import Header from '../components/Header';
import SwiperCards from '../components/expenses/SwiperCards';
import BillsToPay from '../components/expenses/BillsToPay';
import Income from '../components/incomes/Income';
import OffCanvas from '../components/register/OffCanvas';
import Footer from '../components/footer/Footer';

import '../styles/components/ToggleTheme.css';

function Home() {
  return (
    <div className="home-container" style={ { backgroundColor: '#3c3c3c' } }>
      <AppProvider>
        <Header />
        <SwiperCards />
        <BillsToPay />
        <Income />
        <OffCanvas />
        <Footer />
      </AppProvider>
    </div>
  );
}

export default Home;
