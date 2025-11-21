# PowerShell Script to Enable Real-Time Data
# Run this script to switch from demo data to real-time Yahoo Finance data

Write-Host "`n================================================" -ForegroundColor Cyan
Write-Host "   Market Mosaic - Enable Real-Time Data" -ForegroundColor Green
Write-Host "================================================`n" -ForegroundColor Cyan

# Backup current App.js
Write-Host "📦 Step 1: Backing up current App.js..." -ForegroundColor Yellow
if (Test-Path "src/App.demo.js") {
    Write-Host "   ⚠️  Backup already exists (App.demo.js)" -ForegroundColor Yellow
} else {
    Copy-Item "src/App.js" "src/App.demo.js"
    Write-Host "   ✅ Backup created: src/App.demo.js" -ForegroundColor Green
}

# Copy real-time version
Write-Host "`n📊 Step 2: Enabling real-time data..." -ForegroundColor Yellow
Copy-Item "src/App.realtime.js" "src/App.js" -Force
Write-Host "   ✅ Real-time version activated!" -ForegroundColor Green

Write-Host "`n🔄 Step 3: Restarting development server..." -ForegroundColor Yellow
Write-Host "   Please stop the current server (Ctrl+C) and run:" -ForegroundColor White
Write-Host "   npm start`n" -ForegroundColor Cyan

Write-Host "================================================" -ForegroundColor Cyan
Write-Host "✅ Real-time data enabled!" -ForegroundColor Green
Write-Host "================================================`n" -ForegroundColor Cyan

Write-Host "📝 Notes:" -ForegroundColor Yellow
Write-Host "   • Data fetches from Yahoo Finance (free)" -ForegroundColor White
Write-Host "   • Updates every 5 minutes automatically" -ForegroundColor White
Write-Host "   • 15-20 minute delay from live market" -ForegroundColor White
Write-Host "   • May have CORS issues (see REAL_DATA_SETUP.md)" -ForegroundColor White

Write-Host "`n🔙 To restore demo data:" -ForegroundColor Yellow
Write-Host "   Copy-Item src/App.demo.js src/App.js -Force`n" -ForegroundColor Cyan

Write-Host "================================================`n" -ForegroundColor Cyan
