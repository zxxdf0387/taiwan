param(
  [string]$CommitMessage = "Automated site update"
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$projectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $projectRoot

git rev-parse --is-inside-work-tree | Out-Null

git add -A

git diff --cached --quiet
if ($LASTEXITCODE -eq 0) {
  Write-Output "No changes to publish."
  exit 0
}

git commit -m $CommitMessage
if ($LASTEXITCODE -ne 0) {
  Write-Error "Git commit failed."
  exit 1
}

$pushSucceeded = $false

for ($attempt = 1; $attempt -le 3; $attempt++) {
  git push origin main
  if ($LASTEXITCODE -eq 0) {
    $pushSucceeded = $true
    break
  }

  if ($attempt -lt 3) {
    Write-Warning "Git push failed on attempt $attempt. Fetching and rebasing before retry."
    git fetch origin main
    if ($LASTEXITCODE -ne 0) {
      Write-Error "Git fetch failed while recovering from push failure."
      exit 1
    }

    git pull --rebase origin main
    if ($LASTEXITCODE -ne 0) {
      Write-Error "Git pull --rebase failed while recovering from push failure."
      exit 1
    }

    Start-Sleep -Seconds 2
  }
}

if (-not $pushSucceeded) {
  Write-Error "Git push failed after 3 attempts."
  exit 1
}

$publishedCommit = git rev-parse --short HEAD
Write-Output "Publish completed. Commit $publishedCommit is now on origin/main."
