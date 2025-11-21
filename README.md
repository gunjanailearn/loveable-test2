# Market Mosaic - Indian Stock Market

A modern, responsive React web application for tracking Indian stock market data, stock performance, and financial news.

## Features

- **Real-time Market Overview**: Track major Indian indices (NIFTY 50, SENSEX, NIFTY BANK)
- **Stock Cards**: Display top Indian stocks (Reliance, TCS, HDFC Bank, Infosys, ICICI Bank, Bharti Airtel)
- **Interactive Charts**: Visualize NIFTY 50 performance with different timeframes
- **Latest News**: Stay updated with Indian financial market news
- **Dark Mode**: Toggle between light and dark themes
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Indian Currency**: All prices displayed in ₹ (INR)

## Tech Stack

- React 18
- Recharts (for data visualization)
- Lucide React (for icons)
- CSS3 with modern styling

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
market-mosaic-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Header.css
│   │   ├── MarketOverview.js
│   │   ├── MarketOverview.css
│   │   ├── StockCard.js
│   │   ├── StockCard.css
│   │   ├── ChartSection.js
│   │   ├── ChartSection.css
│   │   ├── NewsSection.js
│   │   └── NewsSection.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Features in Detail

### Market Overview
Displays real-time data for major Indian market indices (NIFTY 50, SENSEX, NIFTY BANK) with color-coded positive/negative changes.

### Stock Cards
Interactive cards showing top Indian stocks:
- **Reliance Industries** - India's largest conglomerate
- **TCS** - Leading IT services company
- **HDFC Bank** - Major private sector bank
- **Infosys** - Global IT consulting leader
- **ICICI Bank** - Leading private bank
- **Bharti Airtel** - Major telecom operator

Each card displays:
- Stock symbol and company name
- Current price in ₹ (INR)
- Price change and percentage change
- Visual indicators for gains/losses

### Chart Section
- Interactive line chart showing NIFTY 50 performance
- Multiple timeframe options (1D, 1W, 1M, 3M, 1Y, ALL)
- Trading hours: 9:15 AM to 3:30 PM IST
- Responsive design that adapts to screen size

### News Section
- Latest Indian market news from leading sources
- Sources: Economic Times, Business Standard, Moneycontrol, Mint
- Categorized by topic (Technology, Economy, Automotive, Energy)
- Timestamp showing when news was published

## Customization

### Adding More Indian Stocks
Edit `src/App.js` and add more `<StockCard>` components with your desired NSE/BSE stocks. Popular additions:
- Wipro, HCL Tech (IT sector)
- SBI, Axis Bank (Banking)
- ITC, HUL (FMCG)
- L&T, Adani Group stocks

### Changing Color Scheme
Modify the gradient colors in `src/index.css` and `src/App.css` to customize the theme.

### Adding Real Data
To integrate real Indian market data, you can use:
- **NSE/BSE APIs** - Official exchange APIs
- **Yahoo Finance** - Free with Indian stock symbols (e.g., RELIANCE.NS)
- **Alpha Vantage** - Supports NSE stocks
- **Groww/Zerodha Kite APIs** - For real-time data
- Use WebSocket for real-time updates
- Implement data fetching in `useEffect` hooks

Example for fetching Indian stocks:
```javascript
// Fetch RELIANCE from NSE
fetch('https://query1.finance.yahoo.com/v8/finance/chart/RELIANCE.NS')
```

## Future Enhancements

- Real-time data integration with financial APIs
- User authentication and personalized watchlists
- Portfolio tracking and management
- Advanced charting with technical indicators
- Push notifications for price alerts
- Export data to CSV/PDF

## License

MIT License - feel free to use this project for learning and development purposes.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
