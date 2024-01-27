import SwiperCards from '../components/expenses/SwiperCards';

import Header from '../components/Header';
import Footer from '../components/Footer';
import OffCanvas from '../components/register/OffCanvas';
// import CarouselBillsToPay from '../components/CarouselBillsToPay';

import '../styles/pages/Home.css';
import 'bootstrap/dist/css/bootstrap.css';
import BillsToPay from '../components/expenses/BillsToPay';
import Income from '../components/incomes/Income';

import HomeProvider from '../contexts/HomeProvider';
import ExpenseProvider from '../contexts/ExpenseProvider';

function Home() {
  return (
    <div className="home-container">
      <HomeProvider>
        <ExpenseProvider>
          <Header />
          <SwiperCards />
          <BillsToPay />
          <Income />
          <OffCanvas />
          <Footer />
        </ExpenseProvider>
      </HomeProvider>
    </div>

  );
}

export default Home;
