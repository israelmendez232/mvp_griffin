# Code to assist on deployment of the app.

## Terminal:
## > sh deploy.sh

# !/bin/bash
## SETTING UP THE ENVIROMENT:
forever stopall
npm install -g npm@latest
npm install -g forever
cd mvp_griffin/
git pull origin master

## GETTING THE FRONT READY
cd client/
npm install
npm run-script build
rm -r ../server/src/build
mv -f build ../server/src/
rm -r build

## RUN THE SERVER
cd ../server/
npm install
npm run server
sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-ports 4000
