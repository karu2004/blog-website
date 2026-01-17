# How to Install Git on Windows

## Method 1: Download from Official Website (Recommended)

### Step 1: Download Git

1. Go to the official Git website: https://git-scm.com/download/win
2. The download should start automatically
3. If not, click **"Click here to download manually"**
4. Download the **64-bit Git for Windows Setup** (latest version)

### Step 2: Install Git

1. **Run the installer** (the `.exe` file you just downloaded)
2. Click **"Next"** on the welcome screen
3. **Choose installation location** (default is fine: `C:\Program Files\Git`)
4. **Select components** - Keep default selections, ensure these are checked:
   - ✅ Windows Explorer integration
   - ✅ Git Bash Here
   - ✅ Git GUI Here
5. **Select Start Menu folder** - Keep default, click Next
6. **Choose default editor** - Select your preferred editor (VS Code recommended if installed)
7. **Adjust PATH environment** - Select **"Git from the command line and also from 3rd-party software"** (recommended)
8. **Choose HTTPS transport backend** - Use the OpenSSL library (default)
9. **Configure line ending conversions** - Select **"Checkout Windows-style, commit Unix-style"**
10. **Choose terminal emulator** - Use MinTTY (default)
11. **Choose default behavior of `git pull`** - Default is fine
12. **Choose credential helper** - Git Credential Manager (default)
13. **Configure extra options** - Keep defaults
14. Click **"Install"**
15. Click **"Finish"** when done

### Step 3: Verify Installation

1. Open **PowerShell** or **Command Prompt**
2. Type: `git --version`
3. You should see something like: `git version 2.43.0.windows.1`

## Method 2: Using Winget (Windows Package Manager)

If you have Windows 11 or Windows 10 with winget installed:

```powershell
winget install --id Git.Git -e --source winget
```

## Method 3: Using Chocolatey

If you have Chocolatey installed:

```powershell
choco install git
```

## Post-Installation: Configure Git

After installing Git, configure your identity:

```bash
# Set your name
git config --global user.name "Your Name"

# Set your email (use your GitHub email)
git config --global user.email "your.email@example.com"

# Verify configuration
git config --list
```

## Quick Test

Open PowerShell in your project directory and try:

```bash
cd c:\Users\bkarunya\Downloads\Blog-Website
git --version
git init
```

If these commands work, Git is installed successfully! ✅

## Troubleshooting

### "git is not recognized" error

If you get this error after installation:

1. **Close and reopen** PowerShell/Command Prompt
2. If still not working, **restart your computer**
3. Check if Git is in PATH:
   - Search for "Environment Variables" in Windows
   - Check if `C:\Program Files\Git\cmd` is in the PATH variable
   - If not, add it manually

### Need to add Git to PATH manually?

1. Press `Win + X` → System
2. Click **"Advanced system settings"**
3. Click **"Environment Variables"**
4. Under "System variables", find **"Path"**
5. Click **"Edit"**
6. Click **"New"**
7. Add: `C:\Program Files\Git\cmd`
8. Click **"OK"** on all dialogs
9. Restart PowerShell

## Next Steps After Installation

Once Git is installed, you can proceed with uploading your code to GitHub:

1. ✅ Git installed
2. Configure Git with your name and email (see above)
3. Follow the commands in [QUICKSTART.md](./QUICKSTART.md)

## Download Link

**Direct download**: https://git-scm.com/download/win

---

**Estimated installation time**: 5-10 minutes
