Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$projectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$scriptPath = Join-Path $projectRoot "run-scheduled-update.ps1"
$taskMorning = "MorningRadarAutoSync-0900"
$taskNight = "MorningRadarAutoSync-2200"
$wrapperPath = Join-Path $env:USERPROFILE "morning-radar-update.cmd"

@"
@echo off
powershell.exe -NoProfile -ExecutionPolicy Bypass -WindowStyle Hidden -File "$scriptPath"
"@ | Set-Content -Path $wrapperPath -Encoding ASCII

$taskCommand = $wrapperPath

function Install-Task {
  param(
    [string]$TaskName,
    [string]$StartTime
  )

  $process = Start-Process `
    -FilePath "schtasks.exe" `
    -ArgumentList @("/Create", "/F", "/SC", "DAILY", "/ST", $StartTime, "/TN", $TaskName, "/TR", $taskCommand) `
    -Wait `
    -NoNewWindow `
    -PassThru

  if ($process.ExitCode -ne 0) {
    throw "Failed to create task $TaskName (exit code $($process.ExitCode))."
  }
}

Install-Task -TaskName $taskMorning -StartTime "09:00"
Install-Task -TaskName $taskNight -StartTime "22:00"

Write-Output "Installed scheduled tasks: $taskMorning, $taskNight"
