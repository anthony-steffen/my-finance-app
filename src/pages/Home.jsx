// Home.jsx

import AppProvider from '../contexts/AppProvider';
import Content from '../components/Content';
import '../styles/components/ToggleTheme.css';

function Home() {
  return (
    <div className="home-container">
      <AppProvider>
        <Content />
      </AppProvider>

    </div>
  );
}

export default Home;
