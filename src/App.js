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
        {/* NOTE: Showing current market prices (updated from live data). For auto-refresh, see REAL_DATA_SETUP.md */}
        <div className="stocks-grid">
          <StockCard
            symbol="RELIANCE"
            name="Reliance Industries Ltd."
            price={1546.60}
            change={-2.50}
            changePercent={-0.16}
          />
          <StockCard
            symbol="TCS"
            name="Tata Consultancy Services"
            price={3150.60}
            change={5.80}
            changePercent={0.18}
          />
          <StockCard
            symbol="HDFCBANK"
            name="HDFC Bank Ltd."
            price={998.05}
            change={-10.80}
            changePercent={-1.07}
          />
          <StockCard
            symbol="INFY"
            name="Infosys Ltd."
            price={1545.00}
            change={8.50}
            changePercent={0.55}
          />
          <StockCard
            symbol="ICICIBANK"
            name="ICICI Bank Ltd."
            price={1369.50}
            change={-13.50}
            changePercent={-0.98}
          />
          <StockCard
            symbol="BHARTIARTL"
            name="Bharti Airtel Ltd."
            price={2162.70}
            change={4.40}
            changePercent={0.20}
          />
        </div>
        <ChartSection />
        <NewsSection />
      </div>
    </div>
  );
}

export default App;
