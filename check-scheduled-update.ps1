Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$taskName = "MorningRadarAutoSync"
$task = Get-ScheduledTask -TaskName $taskName -ErrorAction Stop
$info = Get-ScheduledTaskInfo -TaskName $taskName

[pscustomobject]@{
  TaskName = $task.TaskName
  State = $task.State
  LastRunTime = $info.LastRunTime
  LastTaskResult = $info.LastTaskResult
  NextRunTime = $info.NextRunTime
}
