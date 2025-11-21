import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import MarketOverview from './components/MarketOverview';
import StockCard from './components/StockCard';
import ChartSection from './components/ChartSection';
import NewsSection from './components/NewsSection';
import { fetchMultipleStocks, INDIAN_STOCKS } from './services/stockApi';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Fetch real stock data on component mount
  useEffect(() => {
    const fetchStocks = async () => {
      try {
        setLoading(true);
        const stockData = await fetchMultipleStocks(INDIAN_STOCKS);
        
        // Map with company names
        const stocksWithNames = stockData.map(stock => {
          const nameMap = {
            'RELIANCE': 'Reliance Industries Ltd.',
            'TCS': 'Tata Consultancy Services',
            'HDFCBANK': 'HDFC Bank Ltd.',
            'INFY': 'Infosys Ltd.',
            'ICICIBANK': 'ICICI Bank Ltd.',
            'BHARTIARTL': 'Bharti Airtel Ltd.'
          };
          return {
            ...stock,
            name: nameMap[stock.symbol] || stock.symbol
          };
        });
        
        setStocks(stocksWithNames);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching stocks:', err);
        setError('Failed to fetch stock data. Showing demo data.');
        setLoading(false);
        
        // Fallback to demo data
        setStocks([
          { symbol: 'RELIANCE', name: 'Reliance Industries Ltd.', price: 2456.75, change: 32.50, changePercent: 1.34 },
          { symbol: 'TCS', name: 'Tata Consultancy Services', price: 3678.90, change: -28.45, changePercent: -0.77 },
          { symbol: 'HDFCBANK', name: 'HDFC Bank Ltd.', price: 1645.30, change: 18.75, changePercent: 1.15 },
          { symbol: 'INFY', name: 'Infosys Ltd.', price: 1523.60, change: 22.40, changePercent: 1.49 },
          { symbol: 'ICICIBANK', name: 'ICICI Bank Ltd.', price: 945.80, change: -12.30, changePercent: -1.28 },
          { symbol: 'BHARTIARTL', name: 'Bharti Airtel Ltd.', price: 1289.45, change: 15.60, changePercent: 1.22 }
        ]);
      }
    };

    fetchStocks();
    
    // Refresh data every 5 minutes
    const interval = setInterval(fetchStocks, 5 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className="container">
        {error && (
          <div style={{
            background: 'rgba(239, 68, 68, 0.1)',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            borderRadius: '12px',
            padding: '15px',
            marginBottom: '20px',
            color: '#ef4444',
            textAlign: 'center'
          }}>
            ⚠️ {error}
          </div>
        )}
        
        <MarketOverview />
        
        {loading ? (
          <div style={{
            textAlign: 'center',
            padding: '40px',
            color: darkMode ? '#fff' : '#333',
            fontSize: '18px'
          }}>
            Loading real-time stock data...
          </div>
        ) : (
          <div className="stocks-grid">
            {stocks.map((stock, index) => (
              <StockCard
                key={index}
                symbol={stock.symbol}
                name={stock.name}
                price={stock.price}
                change={stock.change}
                changePercent={stock.changePercent}
              />
            ))}
          </div>
        )}
        
        <ChartSection />
        <NewsSection />
      </div>
    </div>
  );
}

export default App;
