param(
  [string]$CommitMessage = "Automated site update"
)

$projectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $projectRoot

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

git push origin main
if ($LASTEXITCODE -ne 0) {
  Write-Error "Git push failed."
  exit 1
}

Write-Output "Publish completed."
