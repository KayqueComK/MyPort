Add-Type -AssemblyName System.Drawing

$filePath = "C:\Users\User\.gemini\antigravity\scratch\portfolio\public\kiq-logo.png"
$orig = [System.Drawing.Bitmap]::FromFile($filePath)
$bmp = New-Object System.Drawing.Bitmap($orig.Width, $orig.Height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.DrawImage($orig, 0, 0)
$g.Dispose()
$orig.Dispose()

$rect = New-Object System.Drawing.Rectangle(0, 0, $bmp.Width, $bmp.Height)
$data = $bmp.LockBits($rect, [System.Drawing.Imaging.ImageLockMode]::ReadWrite, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$bytes = New-Object byte[] ($data.Stride * $bmp.Height)
[System.Runtime.InteropServices.Marshal]::Copy($data.Scan0, $bytes, 0, $bytes.Length)

for ($i = 0; $i -lt $bytes.Length; $i += 4) {
    $b = $bytes[$i]
    $g = $bytes[$i+1]
    $r = $bytes[$i+2]
    if ($r -gt 220 -and $g -gt 220 -and $b -gt 220) {
        $bytes[$i+3] = 0
    }
}

[System.Runtime.InteropServices.Marshal]::Copy($bytes, 0, $data.Scan0, $bytes.Length)
$bmp.UnlockBits($data)
$bmp.Save($filePath, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
Write-Host "Transparent PNG created successfully!"
