$projectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$pidFile = Join-Path $projectRoot "mobile-server.pid"

if (-not (Test-Path $pidFile)) {
  Write-Output "目前沒有可停止的手機測試伺服器。"
  exit 0
}

$targetPid = Get-Content $pidFile -ErrorAction SilentlyContinue
if ($targetPid) {
  $process = Get-Process -Id $targetPid -ErrorAction SilentlyContinue
  if ($process) {
    Stop-Process -Id $targetPid
  }
}

Remove-Item $pidFile -ErrorAction SilentlyContinue
Write-Output "已停止手機測試伺服器。"
