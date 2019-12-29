// Code to connect directly into the machine in cloud.
// To execute the deploy command.

const config = require('../config.json');
var Client = require('ssh2').Client;

var conn = new Client();

conn.on('ready', function() {
  console.log('Client :: ready');
  conn.shell(function(err, stream) {
    if (err) throw err;
    stream.on('close', function() {
      console.log('Stream :: close');
      conn.end();
    }).on('data', function(data) {
      console.log('OUTPUT: ' + data);
    });
    stream.end('sh deploy.sh \n exit \n'); // Start the script to deploy and finish the connection.
  });
}).connect({
  host: config.deploy.host,
  port: config.deploy.port,
  username: config.deploy.user,
  privateKey: require('fs').readFileSync(config.deploy.file)
});
 