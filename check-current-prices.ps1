# PowerShell Script to Check Current Real Prices
# This fetches actual current prices from Yahoo Finance

Write-Host ""
Write-Host "================================================" -ForegroundColor Cyan
Write-Host "   Fetching Current Indian Stock Prices" -ForegroundColor Green
Write-Host "================================================" -ForegroundColor Cyan
Write-Host ""

$stocks = @(
    @{Symbol="RELIANCE"; Name="Reliance Industries"},
    @{Symbol="TCS"; Name="Tata Consultancy Services"},
    @{Symbol="HDFCBANK"; Name="HDFC Bank"},
    @{Symbol="INFY"; Name="Infosys"},
    @{Symbol="ICICIBANK"; Name="ICICI Bank"},
    @{Symbol="BHARTIARTL"; Name="Bharti Airtel"}
)

Write-Host "Fetching real-time prices from Yahoo Finance..." -ForegroundColor Yellow
Write-Host ""

foreach ($stock in $stocks) {
    try {
        $symbol = $stock.Symbol
        $name = $stock.Name
        $url = "https://query1.finance.yahoo.com/v8/finance/chart/$symbol.NS?interval=1d"
        $response = Invoke-RestMethod -Uri $url -Method Get -ErrorAction Stop
        
        $currentPrice = $response.chart.result[0].meta.regularMarketPrice
        $previousClose = $response.chart.result[0].meta.chartPreviousClose
        $change = $currentPrice - $previousClose
        $changePercent = ($change / $previousClose) * 100
        
        $color = if ($change -ge 0) { "Green" } else { "Red" }
        $arrowChar = if ($change -ge 0) { "UP" } else { "DOWN" }
        
        Write-Host "$symbol " -NoNewline -ForegroundColor White
        Write-Host "($name)" -ForegroundColor Gray
        Write-Host "  Price: Rs.$($currentPrice.ToString('N2'))" -ForegroundColor Cyan
        Write-Host "  Change: $arrowChar Rs.$($change.ToString('N2')) ($($changePercent.ToString('N2'))%)" -ForegroundColor $color
        Write-Host ""
        
    } catch {
        Write-Host "$($stock.Symbol) - ERROR fetching data" -ForegroundColor Red
        Write-Host "  Error: $($_.Exception.Message)" -ForegroundColor Yellow
        Write-Host ""
    }
    
    Start-Sleep -Milliseconds 500
}

Write-Host "================================================" -ForegroundColor Cyan
Write-Host "Price check complete!" -ForegroundColor Green
Write-Host "================================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "Note: These are real prices from Yahoo Finance" -ForegroundColor Yellow
Write-Host "Data may have 15-20 minute delay from live market" -ForegroundColor White
Write-Host ""
