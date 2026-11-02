param (
    [Parameter(Mandatory=$true)]
    [ValidateSet("1", "2", "3", "lead")]
    [string]$Role
)

switch ($Role) {
    "1" {
        git config user.name "Nguyen Van A (Backend Lead)"
        git config user.email "nguyenvana.dev@gmail.com"
        Write-Host "Da chuyen danh tinh sang: THÀNH VIÊN 1 - Nguyen Van A (Backend Lead)" -ForegroundColor Cyan
    }
    "2" {
        git config user.name "Tran Thi B (Mobile Lead)"
        git config user.email "tranthib.flutter@gmail.com"
        Write-Host "Da chuyen danh tinh sang: THÀNH VIÊN 2 - Tran Thi B (Mobile Lead)" -ForegroundColor Green
    }
    "3" {
        git config user.name "Le Van C (QA & AI Dev)"
        git config user.email "levanc.ai@gmail.com"
        Write-Host "Da chuyen danh tinh sang: THÀNH VIÊN 3 - Le Van C (QA & AI Dev)" -ForegroundColor Magenta
    }
    "lead" {
        git config user.name "MinhELY1402"
        git config user.email "minhely1402@gmail.com"
        Write-Host "Da chuyen danh tinh sang: TRUONG NHOM - MinhELY1402 (Repo Owner)" -ForegroundColor Yellow
    }
}

Write-Host "Hien tai git dang ghi nhan:" -ForegroundColor Gray
git config user.name
git config user.email
