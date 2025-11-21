# PowerShell Script to Set Up Git Identity

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "   Git Identity Setup" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "Let's set up your Git identity for commits." -ForegroundColor Yellow
Write-Host ""

# Get user email
$email = Read-Host "Enter your email address (for Git commits)"

# Get user name
$name = Read-Host "Enter your name (for Git commits)"

Write-Host ""
Write-Host "Setting up Git configuration..." -ForegroundColor Yellow

# Configure Git
git config --global user.email "$email"
git config --global user.name "$name"

Write-Host ""
Write-Host "✅ Git identity configured!" -ForegroundColor Green
Write-Host ""
Write-Host "Your Git is now set up with:" -ForegroundColor Cyan
Write-Host "  Email: $email" -ForegroundColor White
Write-Host "  Name: $name" -ForegroundColor White
Write-Host ""

Write-Host "Now committing your code..." -ForegroundColor Yellow
git commit -m "Indian stock market app with real current prices"

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "✅ Code committed and ready to push!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
