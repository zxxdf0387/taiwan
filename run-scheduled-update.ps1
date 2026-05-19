Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$projectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$logDir = Join-Path $projectRoot "logs"
$logFile = Join-Path $logDir "scheduled-update.log"
$lockFile = Join-Path $projectRoot ".git\\index.lock"

New-Item -ItemType Directory -Path $logDir -Force | Out-Null

function Write-Log {
  param([string]$Message)
  $timestamp = Get-Date -Format "yyyy/MM/dd HH:mm:ss"
  Add-Content -Path $logFile -Value "[$timestamp] $Message"
}

try {
  Set-Location $projectRoot
  Write-Log "Scheduled update started."

  if (Test-Path $lockFile) {
    $gitProcesses = Get-Process -Name git, git-credential-manager -ErrorAction SilentlyContinue
    if (-not $gitProcesses) {
      Remove-Item $lockFile -Force
      Write-Log "Removed stale .git/index.lock."
    } else {
      Write-Log "Detected active git-related process; keeping existing .git/index.lock."
    }
  }

  node .\scripts\update-huang-data.mjs
  if ($LASTEXITCODE -ne 0) {
    throw "Node update script failed."
  }
  Write-Log "Content update script completed."

  powershell -ExecutionPolicy Bypass -File .\publish-site.ps1 -CommitMessage "Scheduled website sync"
  if ($LASTEXITCODE -ne 0) {
    throw "Publish script failed."
  }
  Write-Log "Publish completed."
} catch {
  Write-Log "Scheduled update failed: $($_.Exception.Message)"
  throw
}
