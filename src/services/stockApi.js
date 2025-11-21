// Stock API Service for fetching real Indian stock data

/**
 * Fetch stock data from Yahoo Finance (Free)
 * Note: Yahoo Finance uses .NS suffix for NSE stocks
 */
export const fetchYahooFinanceData = async (symbol) => {
  try {
    const url = `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}.NS?interval=1d`;
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.chart.result && data.chart.result[0]) {
      const result = data.chart.result[0];
      const quote = result.meta;
      const currentPrice = quote.regularMarketPrice;
      const previousClose = quote.previousClose || quote.chartPreviousClose;
      const change = currentPrice - previousClose;
      const changePercent = (change / previousClose) * 100;
      
      return {
        symbol: symbol,
        price: currentPrice,
        change: change,
        changePercent: changePercent,
        currency: quote.currency
      };
    }
    throw new Error('No data found');
  } catch (error) {
    console.error(`Error fetching data for ${symbol}:`, error);
    return null;
  }
};

/**
 * Fetch multiple stocks data
 */
export const fetchMultipleStocks = async (symbols) => {
  const promises = symbols.map(symbol => fetchYahooFinanceData(symbol));
  const results = await Promise.all(promises);
  return results.filter(result => result !== null);
};

/**
 * Fetch index data (NIFTY 50, SENSEX, etc.)
 */
export const fetchIndexData = async (indexSymbol) => {
  try {
    // Index symbols for Yahoo Finance
    const indexMap = {
      'NIFTY50': '^NSEI',      // NIFTY 50
      'SENSEX': '^BSESN',      // SENSEX
      'NIFTYBANK': '^NSEBANK'  // NIFTY BANK
    };
    
    const yahooSymbol = indexMap[indexSymbol] || indexSymbol;
    const url = `https://query1.finance.yahoo.com/v8/finance/chart/${yahooSymbol}?interval=1d`;
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.chart.result && data.chart.result[0]) {
      const result = data.chart.result[0];
      const quote = result.meta;
      const currentPrice = quote.regularMarketPrice;
      const previousClose = quote.previousClose || quote.chartPreviousClose;
      const change = currentPrice - previousClose;
      const changePercent = (change / previousClose) * 100;
      
      return {
        value: currentPrice.toFixed(2),
        change: changePercent >= 0 ? `+${changePercent.toFixed(2)}%` : `${changePercent.toFixed(2)}%`,
        isPositive: changePercent >= 0
      };
    }
    throw new Error('No data found');
  } catch (error) {
    console.error(`Error fetching index data for ${indexSymbol}:`, error);
    return null;
  }
};

/**
 * Fetch historical chart data
 */
export const fetchChartData = async (symbol, range = '1d') => {
  try {
    const rangeMap = {
      '1D': '1d',
      '1W': '5d',
      '1M': '1mo',
      '3M': '3mo',
      '1Y': '1y',
      'ALL': '5y'
    };
    
    const yahooRange = rangeMap[range] || '1d';
    const interval = range === '1D' ? '5m' : '1d';
    
    const url = `https://query1.finance.yahoo.com/v8/finance/chart/^NSEI?range=${yahooRange}&interval=${interval}`;
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.chart.result && data.chart.result[0]) {
      const result = data.chart.result[0];
      const timestamps = result.timestamp;
      const prices = result.indicators.quote[0].close;
      
      return timestamps.map((timestamp, index) => {
        const date = new Date(timestamp * 1000);
        const time = range === '1D' 
          ? `${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`
          : date.toLocaleDateString('en-IN', { day: '2-digit', month: 'short' });
        
        return {
          time: time,
          value: prices[index] ? Number(prices[index].toFixed(2)) : null
        };
      }).filter(item => item.value !== null);
    }
    throw new Error('No chart data found');
  } catch (error) {
    console.error('Error fetching chart data:', error);
    return [];
  }
};

// Indian stock symbols for Yahoo Finance
export const INDIAN_STOCKS = [
  'RELIANCE',
  'TCS',
  'HDFCBANK',
  'INFY',
  'ICICIBANK',
  'BHARTIARTL'
];

export const INDIAN_INDICES = {
  NIFTY50: 'NIFTY 50',
  SENSEX: 'SENSEX',
  NIFTYBANK: 'NIFTY BANK'
};
