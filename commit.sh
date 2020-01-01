# Code to help me commit faster
## Terminal
## > sh commit.sh "Message"

# !/bin/bash
git add .
git commit -m "$1" -m "$2"
git push origin master:master

# ## comment this line if you don't want to send into the server.
# cd server/
# node deploy.js 
# echo "Remember to visit http://griffingram.com/ to see if it's everything ok!"
