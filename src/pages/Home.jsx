// Home.jsx
import React from 'react';
import HomeProvider from '../contexts/HomeProvider';
import ExpenseProvider from '../contexts/ExpenseProvider';
import Content from '../components/Content';

function Home() {
  return (
    <div className="home-container">
      <HomeProvider>
        <ExpenseProvider>
          <Content />
        </ExpenseProvider>
      </HomeProvider>
    </div>
  );
}

export default Home;
