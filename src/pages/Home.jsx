import SwiperCards from '../components/SwiperCards';

import Header from '../components/Header';
import Footer from '../components/Footer';
import OffCanvas from '../components/OffCanvas';
// import CarouselBillsToPay from '../components/CarouselBillsToPay';

import '../styles/pages/Home.css';
import 'bootstrap/dist/css/bootstrap.css';
import BillsToPay from '../components/BillsToPay';
import Income from '../components/Income';

import HomeProvider from '../contexts/HomeProvider';

function Home() {
  return (
    <div className="home-container">
      <HomeProvider>
        <Header />
        <SwiperCards />
        {/* <CarouselBillsToPay /> */}
        <BillsToPay />
        <Income />
        <OffCanvas />
        <Footer />
      </HomeProvider>
    </div>

  );
}

export default Home;
