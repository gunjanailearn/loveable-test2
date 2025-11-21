// Mock data utility for development
// Replace with real API calls in production

export const generateMockChartData = (timeframe) => {
  const dataPoints = {
    '1D': 14,
    '1W': 7,
    '1M': 30,
    '3M': 90,
    '1Y': 365,
    'ALL': 1000
  };

  const points = dataPoints[timeframe] || 14;
  const basePrice = 21894.35; // NIFTY 50 base price
  const data = [];

  for (let i = 0; i < points; i++) {
    const randomChange = (Math.random() - 0.5) * 200; // Larger range for Indian indices
    const value = basePrice + randomChange;
    
    let time;
    if (timeframe === '1D') {
      const hour = 9 + Math.floor(i * 0.45);
      const minute = Math.floor((i % 2.2) * 27);
      time = `${hour}:${minute.toString().padStart(2, '0')}`;
    } else {
      time = `Day ${i + 1}`;
    }

    data.push({ time, value: Number(value.toFixed(2)) });
  }

  return data;
};

export const mockStocks = [
  {
    symbol: 'RELIANCE',
    name: 'Reliance Industries Ltd.',
    price: 1546.60,
    change: -2.50,
    changePercent: -0.16
  },
  {
    symbol: 'TCS',
    name: 'Tata Consultancy Services',
    price: 3150.60,
    change: 5.80,
    changePercent: 0.18
  },
  {
    symbol: 'HDFCBANK',
    name: 'HDFC Bank Ltd.',
    price: 998.05,
    change: -10.80,
    changePercent: -1.07
  },
  {
    symbol: 'INFY',
    name: 'Infosys Ltd.',
    price: 1545.00,
    change: 8.50,
    changePercent: 0.55
  },
  {
    symbol: 'ICICIBANK',
    name: 'ICICI Bank Ltd.',
    price: 1369.50,
    change: -13.50,
    changePercent: -0.98
  },
  {
    symbol: 'BHARTIARTL',
    name: 'Bharti Airtel Ltd.',
    price: 2162.70,
    change: 4.40,
    changePercent: 0.20
  }
];

export const mockNews = [
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

export const mockIndices = [
  { name: 'NIFTY 50', value: '21,894.35', change: '+1.2%', isPositive: true },
  { name: 'SENSEX', value: '72,426.64', change: '+0.9%', isPositive: true },
  { name: 'NIFTY BANK', value: '46,785.25', change: '-0.4%', isPositive: false },
];
