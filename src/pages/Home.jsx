import SwiperCards from '../components/SwiperCards';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ButtonAdd from '../components/ButtonAdd';

import '../styles/pages/Home.css';
import 'bootstrap/dist/css/bootstrap.css';
import ExpenseList from '../components/ExpenseList';
import BillsToPay from '../components/BillsToPay';

import HomeProvider from '../contexts/HomeProvider';

function Home() {
  return (
    <div className="home-container">
      <HomeProvider>
        <Header />
        <SwiperCards />
        <ExpenseList />
        <BillsToPay />
        <ButtonAdd />
        <Footer />
      </HomeProvider>
    </div>

  );
}

export default Home;
