import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import './StockCard.css';

const StockCard = ({ symbol, name, price, change, changePercent }) => {
  const isPositive = change >= 0;

  return (
    <div className="stock-card">
      <div className="stock-header">
        <div>
          <h3 className="stock-symbol">{symbol}</h3>
          <p className="stock-name">{name}</p>
        </div>
        <div className={`stock-badge ${isPositive ? 'positive' : 'negative'}`}>
          {isPositive ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
        </div>
      </div>
      <div className="stock-price">
        <span className="price-value">₹{price.toFixed(2)}</span>
      </div>
      <div className={`stock-change ${isPositive ? 'positive' : 'negative'}`}>
        <span>{isPositive ? '+' : ''}{change.toFixed(2)}</span>
        <span>({isPositive ? '+' : ''}{changePercent.toFixed(2)}%)</span>
      </div>
    </div>
  );
};

export default StockCard;
