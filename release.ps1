# Get current version
$currentVersion = (Get-Content package.json) -join "`n" | ConvertFrom-Json | Select -ExpandProperty "version"

if ([String]::IsNullOrWhiteSpace($currentVersion)) {
	Write-Host "Current version not found." -ForegroundColor Red
	exit 1
}

$versionParts = $currentVersion.TrimEnd("*-").Split(".")
$currentMajor = [Convert]::ToInt32($versionParts[0])
$currentMinor = [Convert]::ToInt32($versionParts[1])
$currentPatch = [Convert]::ToInt32($versionParts[2])

Write-Host "Current version: $currentVersion" -ForegroundColor Yellow

# Bump version
Write-Host "Which part of the version to bump (major|minor|patch)?"

$toBump = Read-Host

if ($toBump -eq "major") {
	$currentMajor++
	$currentMinor = 0
	$currentPatch = 0
}
elseif ($toBump -eq "minor") {
	$currentMinor++
	$currentPatch = 0
}
elseif($toBump -eq "patch") {
	$currentPatch++
}
else {
	Write-Host "$toBump is not a valid part of the version number." -ForegroundColor Red
	exit 1
}

$newVersion = "$currentMajor.$currentMinor.$currentPatch";

Write-Host "New version: $newVersion" -ForegroundColor Yellow

Write-Host "Enter the new version to confirm release."

$confirmedVersion = Read-Host

if ($confirmedVersion -ne $newVersion) {
	Write-Host "Incorrect version. Release canceled" -ForegroundColor Red
	exit 1
}

# Update package.json and create release-commit and tag
npm version $newVersion -m "Release %s"



# Push release-commit and tag
git push origin master
git push origin $tag