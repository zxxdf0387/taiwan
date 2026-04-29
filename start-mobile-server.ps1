$projectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$serverScript = Join-Path $projectRoot "server.js"
$nodePath = (Get-Command node).Source
$pidFile = Join-Path $projectRoot "mobile-server.pid"
$outLog = Join-Path $projectRoot "server.out.log"
$errLog = Join-Path $projectRoot "server.err.log"

if (Test-Path $pidFile) {
  $existingPid = Get-Content $pidFile -ErrorAction SilentlyContinue
  if ($existingPid) {
    $existing = Get-Process -Id $existingPid -ErrorAction SilentlyContinue
    if ($existing) {
      Write-Output "手機測試伺服器已在執行：http://127.0.0.1:4173"
      exit 0
    }
  }
}

[System.IO.File]::WriteAllText($outLog, "")
[System.IO.File]::WriteAllText($errLog, "")

$startInfo = New-Object System.Diagnostics.ProcessStartInfo
$startInfo.FileName = $nodePath
$startInfo.Arguments = "`"$serverScript`""
$startInfo.WorkingDirectory = $projectRoot
$startInfo.UseShellExecute = $false
$startInfo.CreateNoWindow = $true
$startInfo.RedirectStandardOutput = $true
$startInfo.RedirectStandardError = $true

$process = New-Object System.Diagnostics.Process
$process.StartInfo = $startInfo
$null = $process.Start()

Start-Sleep -Milliseconds 500

if (-not $process.HasExited) {
  $process.StandardOutput.ReadToEndAsync() | Out-Null
  $process.StandardError.ReadToEndAsync() | Out-Null
}

Set-Content -Path $pidFile -Value $process.Id

Write-Output "已在背景啟動手機測試伺服器：http://127.0.0.1:4173"
