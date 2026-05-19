Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$projectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$scriptPath = Join-Path $projectRoot "run-scheduled-update.ps1"
$taskName = "MorningRadarAutoSync"
$userId = "$env:USERDOMAIN\$env:USERNAME"

$action = New-ScheduledTaskAction -Execute "powershell.exe" -Argument "-NoProfile -ExecutionPolicy Bypass -WindowStyle Hidden -File `"$scriptPath`""
$triggerMorning = New-ScheduledTaskTrigger -Daily -At 9:00AM
$triggerNight = New-ScheduledTaskTrigger -Daily -At 10:00PM
$settings = New-ScheduledTaskSettingsSet -StartWhenAvailable -ExecutionTimeLimit (New-TimeSpan -Minutes 30)
$principal = New-ScheduledTaskPrincipal -UserId $userId -LogonType S4U -RunLevel Limited

Register-ScheduledTask `
  -TaskName $taskName `
  -Action $action `
  -Trigger @($triggerMorning, $triggerNight) `
  -Settings $settings `
  -Principal $principal `
  -Force | Out-Null

Write-Output "Installed scheduled task: $taskName"
