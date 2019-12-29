# Code to help me commit faster
## Terminal
## > sh commit.sh "Message"

# !/bin/bash
git add .
git commit -m "$1"
git push origin master:master

## comment this line if you don't want to send into the server.
node server/deploy.js 
