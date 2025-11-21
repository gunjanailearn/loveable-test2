import React from 'react';
import { TrendingUp, TrendingDown, Activity } from 'lucide-react';
import './MarketOverview.css';

const MarketOverview = () => {
  const indices = [
    { name: 'NIFTY 50', value: '21,894.35', change: '+1.2%', isPositive: true },
    { name: 'SENSEX', value: '72,426.64', change: '+0.9%', isPositive: true },
    { name: 'NIFTY BANK', value: '46,785.25', change: '-0.4%', isPositive: false },
  ];

  return (
    <div className="market-overview">
      <div className="overview-header">
        <Activity size={24} />
        <h2>Market Overview</h2>
      </div>
      <div className="indices-grid">
        {indices.map((index, i) => (
          <div key={i} className="index-card">
            <div className="index-info">
              <h3 className="index-name">{index.name}</h3>
              <p className="index-value">{index.value}</p>
            </div>
            <div className={`index-change ${index.isPositive ? 'positive' : 'negative'}`}>
              {index.isPositive ? <TrendingUp size={20} /> : <TrendingDown size={20} />}
              <span>{index.change}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketOverview;
