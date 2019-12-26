# Code to help me commit faster
## Terminal
## > sh commit.sh "Message"

# !/bin/bash
git add .
git commit -m "$1"
git push origin master:master
