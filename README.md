# SundsgardenYH

To make `git s` run `setupProject.ps1` in the folder you are currently standing in, add this to `.git/config` in the repo root:

```ini
[alias]
	s = "!f() { root=$(git rev-parse --show-toplevel); powershell -ExecutionPolicy Bypass -File \"$root/setupProject.ps1\" \"$root/$GIT_PREFIX\"; }; f"
```

Then run this from any folder inside the repo:

```powershell
git s
```
