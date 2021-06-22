#!/bin/bash

green="\e[1;32m"
yellow="\e[1;33m"
reset="\e[0m"

if [[ $# == 1 ]]; then
		echo -e "[$yellow*$reset] Publishing the Site"
		npm run deploy
		echo -e "[$green+$reset] Site Published Successfully..."
		echo -e "[$yellow*$reset] Backing Up the Configuration Files"
		git add . && git commit -m "$1" && git push -u origin code
		echo -e "[$green+$reset] Files Backup Completed..."
else
		echo -e "Usage: $green$0$reset 'Git Commit Message'"
fi

