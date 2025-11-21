# ⚡ Quick Start Guide

## 🚀 Get Started in 30 Seconds

### Your app is already running!
**Open**: http://localhost:3000

---

## 📋 Essential Commands

### Development
```bash
npm start          # Start dev server (already running!)
npm test           # Run tests
npm run build      # Build for production
```

### Stop the Server
Press `Ctrl + C` in the terminal where it's running

### Restart the Server
```bash
npm start
```

---

## 🎯 Quick Feature Tour

1. **Dark Mode**: Click moon/sun icon in top-right
2. **Chart Timeframes**: Click 1D, 1W, 1M, etc. buttons
3. **Hover Effects**: Hover over any card to see animation
4. **Responsive**: Resize browser to see mobile layout

---

## ✏️ Quick Customizations

### Change Background Color
Edit `src/index.css` line 11:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Add a Stock
Edit `src/App.js`, add after line 35:
```jsx
<StockCard
  symbol="NVDA"
  name="NVIDIA Corp."
  price={495.50}
  change={12.30}
  changePercent={2.55}
/>
```

### Change App Title
Edit `public/index.html` line 11:
```html
<title>Market Mosaic</title>
```

---

## 📁 Key Files

| File | Purpose |
|------|---------|
| `src/App.js` | Main application logic |
| `src/components/` | All UI components |
| `public/index.html` | HTML template |
| `package.json` | Dependencies & scripts |

---

## 🆘 Common Issues

### Port 3000 in use?
React will automatically offer port 3001

### Changes not showing?
Hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)

### Errors in console?
Check the terminal where npm start is running

---

## 🌐 Deploy in 5 Minutes

### Vercel (Easiest)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag 'build' folder to netlify.com/drop
```

---

## 📚 Learn More

- **Full Docs**: See `README.md`
- **Features**: See `FEATURES.md`
- **Deployment**: See `DEPLOYMENT.md`
- **Setup**: See `SETUP_GUIDE.md`

---

## 🎉 You're Ready!

Your Market Mosaic app is:
- ✅ Built and running
- ✅ Fully functional
- ✅ Ready to customize
- ✅ Ready to deploy

**Start exploring at**: http://localhost:3000
