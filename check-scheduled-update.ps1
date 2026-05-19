Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$taskNames = @("MorningRadarAutoSync-0900", "MorningRadarAutoSync-2200")

$results = foreach ($taskName in $taskNames) {
  $task = Get-ScheduledTask -TaskName $taskName -ErrorAction Stop
  $info = Get-ScheduledTaskInfo -TaskName $taskName

  [pscustomobject]@{
    TaskName = $task.TaskName
    State = $task.State
    LastRunTime = $info.LastRunTime
    LastTaskResult = $info.LastTaskResult
    NextRunTime = $info.NextRunTime
  }
}

$results
