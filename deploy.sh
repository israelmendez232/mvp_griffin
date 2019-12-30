# Code to assist on deployment of the app.

## Terminal:
## > sh deploy.sh

# !/bin/bash
## SETTING UP THE ENVIROMENT:
echo "===> Starting with the CD process."
forever stopall
npm install -g npm@latest
npm install -g forever

## GETTING THE FRONT READY
cd client/
npm install
npm run-script build
rm -r ../server/src/build
mv -f build ../server/src/

## RUN THE SERVER
cd ../server/
npm install
npx sequelize db:migrate
npm run server
sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-ports 4000
echo "===> Done with the CD process!"
