import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import MarketOverview from './components/MarketOverview';
import StockCard from './components/StockCard';
import ChartSection from './components/ChartSection';
import NewsSection from './components/NewsSection';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className="container">
        <MarketOverview />
        <div className="stocks-grid">
          <StockCard
            symbol="RELIANCE"
            name="Reliance Industries Ltd."
            price={2456.75}
            change={32.50}
            changePercent={1.34}
          />
          <StockCard
            symbol="TCS"
            name="Tata Consultancy Services"
            price={3678.90}
            change={-28.45}
            changePercent={-0.77}
          />
          <StockCard
            symbol="HDFCBANK"
            name="HDFC Bank Ltd."
            price={1645.30}
            change={18.75}
            changePercent={1.15}
          />
          <StockCard
            symbol="INFY"
            name="Infosys Ltd."
            price={1523.60}
            change={22.40}
            changePercent={1.49}
          />
          <StockCard
            symbol="ICICIBANK"
            name="ICICI Bank Ltd."
            price={945.80}
            change={-12.30}
            changePercent={-1.28}
          />
          <StockCard
            symbol="BHARTIARTL"
            name="Bharti Airtel Ltd."
            price={1289.45}
            change={15.60}
            changePercent={1.22}
          />
        </div>
        <ChartSection />
        <NewsSection />
      </div>
    </div>
  );
}

export default App;
