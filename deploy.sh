#!/bin/bash

if [[ $# == 1 ]]; then
		echo "[*] Publishing the Site"
		npm run deploy
		echo "[+] Site Published Successfully..."
		echo "[*] Backing Up the Configuration Files"
		git add . && git commit -m "$1" && git push -u origin code
		echo "[+] Files Backup Completed..."
else
		echo "Usage: $0 'Git Commit Message'"
fi

