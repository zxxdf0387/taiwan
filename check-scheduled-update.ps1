Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$results = Get-ScheduledTask |
  Where-Object { $_.TaskName -like "MorningRadarAutoSync-*" } |
  Sort-Object TaskName |
  ForEach-Object {
  $task = $_
  $info = Get-ScheduledTaskInfo -TaskName $task.TaskName

  [pscustomobject]@{
    TaskName = $task.TaskName
    State = $task.State
    LastRunTime = $info.LastRunTime
    LastTaskResult = $info.LastTaskResult
    NextRunTime = $info.NextRunTime
  }
  }

$results
