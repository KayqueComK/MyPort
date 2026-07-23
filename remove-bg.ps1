Add-Type -AssemblyName System.Drawing

$inputPath = "C:\Users\User\.gemini\antigravity\scratch\portfolio\public\kiq-logo.png"
$outputPath = "C:\Users\User\.gemini\antigravity\scratch\portfolio\public\kiq-logo.png"

$orig = [System.Drawing.Bitmap]::FromFile($inputPath)
$bmp = New-Object System.Drawing.Bitmap($orig)
$orig.Dispose()

for ($x = 0; $x -lt $bmp.Width; $x++) {
    for ($y = 0; $y -lt $bmp.Height; $y++) {
        $p = $bmp.GetPixel($x, $y)
        if ($p.R -gt 220 -and $p.G -gt 220 -and $p.B -gt 220) {
            $bmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
        }
    }
}

$bmp.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
Write-Host "Background removed successfully!"
