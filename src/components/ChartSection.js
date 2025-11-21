import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { BarChart3 } from 'lucide-react';
import './ChartSection.css';

const ChartSection = () => {
  const [timeframe, setTimeframe] = useState('1D');

  const data = [
    { time: '09:15', value: 21820.50 },
    { time: '09:45', value: 21845.30 },
    { time: '10:15', value: 21802.75 },
    { time: '10:45', value: 21878.90 },
    { time: '11:15', value: 21895.45 },
    { time: '11:45', value: 21856.20 },
    { time: '12:15', value: 21889.65 },
    { time: '12:45', value: 21871.30 },
    { time: '13:15', value: 21903.85 },
    { time: '13:45', value: 21925.40 },
    { time: '14:15', value: 21912.75 },
    { time: '14:45', value: 21889.20 },
    { time: '15:15', value: 21894.35 },
    { time: '15:30', value: 21901.80 },
  ];

  const timeframes = ['1D', '1W', '1M', '3M', '1Y', 'ALL'];

  return (
    <div className="chart-section">
      <div className="chart-header">
        <div className="chart-title">
          <BarChart3 size={24} />
          <h2>Market Performance</h2>
        </div>
        <div className="timeframe-buttons">
          {timeframes.map((tf) => (
            <button
              key={tf}
              className={`timeframe-btn ${timeframe === tf ? 'active' : ''}`}
              onClick={() => setTimeframe(tf)}
            >
              {tf}
            </button>
          ))}
        </div>
      </div>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="time" stroke="#999" />
            <YAxis stroke="#999" domain={['auto', 'auto']} />
            <Tooltip
              contentStyle={{
                background: 'rgba(30, 30, 46, 0.9)',
                border: 'none',
                borderRadius: '8px',
                color: '#fff',
              }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#10b981"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartSection;
