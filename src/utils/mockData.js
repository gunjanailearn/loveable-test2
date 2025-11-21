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
    price: 2456.75,
    change: 32.50,
    changePercent: 1.34
  },
  {
    symbol: 'TCS',
    name: 'Tata Consultancy Services',
    price: 3678.90,
    change: -28.45,
    changePercent: -0.77
  },
  {
    symbol: 'HDFCBANK',
    name: 'HDFC Bank Ltd.',
    price: 1645.30,
    change: 18.75,
    changePercent: 1.15
  },
  {
    symbol: 'INFY',
    name: 'Infosys Ltd.',
    price: 1523.60,
    change: 22.40,
    changePercent: 1.49
  },
  {
    symbol: 'ICICIBANK',
    name: 'ICICI Bank Ltd.',
    price: 945.80,
    change: -12.30,
    changePercent: -1.28
  },
  {
    symbol: 'BHARTIARTL',
    name: 'Bharti Airtel Ltd.',
    price: 1289.45,
    change: 15.60,
    changePercent: 1.22
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
