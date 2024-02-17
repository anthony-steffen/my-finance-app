import HomeProvider from '../contexts/HomeProvider';
import ExpenseProvider from '../contexts/ExpenseProvider';
import IncomeProvider from '../contexts/IncomeProvider';
import Content from '../components/Content';
import '../styles/components/ToggleTheme.css';

function Home() {
  return (
    <div className="home-container">
      <HomeProvider>
        <IncomeProvider>
          <ExpenseProvider>
            <Content />
          </ExpenseProvider>
        </IncomeProvider>
      </HomeProvider>
    </div>
  );
}

export default Home;
