import SwiperCards from '../components/SwiperCards';

import '../styles/pages/Home.css';
import Header from '../components/Header';
import 'bootstrap/dist/css/bootstrap.css';

function Home() {
  return (
    <div className="home-container">
      <Header />
      <SwiperCards />
    </div>

  );
}

export default Home;
