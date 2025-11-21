import React from 'react';
import { Newspaper, Clock } from 'lucide-react';
import './NewsSection.css';

const NewsSection = () => {
  const news = [
    {
      title: 'IT Stocks Rally on Strong Q4 Results and US Demand',
      source: 'Economic Times',
      time: '2 hours ago',
      category: 'Technology',
    },
    {
      title: 'RBI Maintains Repo Rate at 6.5%, Focuses on Inflation',
      source: 'Business Standard',
      time: '4 hours ago',
      category: 'Economy',
    },
    {
      title: 'Tata Motors Reports Record EV Sales in January',
      source: 'Moneycontrol',
      time: '6 hours ago',
      category: 'Automotive',
    },
    {
      title: 'Reliance Industries Plans Major Green Energy Expansion',
      source: 'Mint',
      time: '8 hours ago',
      category: 'Energy',
    },
  ];

  return (
    <div className="news-section">
      <div className="news-header">
        <Newspaper size={24} />
        <h2>Latest Market News</h2>
      </div>
      <div className="news-grid">
        {news.map((item, index) => (
          <div key={index} className="news-card">
            <span className="news-category">{item.category}</span>
            <h3 className="news-title">{item.title}</h3>
            <div className="news-meta">
              <span className="news-source">{item.source}</span>
              <span className="news-time">
                <Clock size={14} />
                {item.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
