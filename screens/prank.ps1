# Function to send text to Notepad
Function SendTextToNotepad {
    $notepad = Get-Process | Where-Object { $_.MainWindowTitle -like "Untitled - Notepad" }
    if ($notepad) {
        [System.Runtime.Interopservices.Marshal]::BringToFront($notepad.MainWindowHandle)
        [System.Windows.Forms.SendKeys]::SendWait("Hello, World!")
    } else {
        Write-Host "Notepad not found."
    }
}

# Start Notepad

# Loop to send text every 3 seconds
while ($true) {
    Start-Process notepad.exe
    
    # Maximize Notepad window
    $notepad = Get-Process | Where-Object { $_.MainWindowTitle -like "Untitled - Notepad" }
    if ($notepad) {
        $notepad.MainWindowHandle | ForEach-Object {
            (New-Object -ComObject Shell.Application).Windows() | Where-Object { $_.HWND -eq $_ } | ForEach-Object {
                $_.InvokeVerb("Maximize")
            }
        }
    }
    SendTextToNotepad
    Start-Sleep -Seconds 30
}
