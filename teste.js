// const crypto = require('crypto');
const config = require('./config');

// function encryptPass(password) {
//     const secret = config.hash.secret;
//     const hash = crypto.createHmac('sha256', secret)
//                 .update(password)
//                 .digest('hex');
//     return hash
// }

// function decryptPass(password) {
//     const secret = config.hash.secret;
//     const hash = crypto.createHmac('sha256', secret)
//                 .update(password)
//                 .digest('hex');
//     return hash
// }

// const hash = encryptPass("teste");
// const hash2 = decryptPass(hash);

// console.log(password, hash2)

const crypto = require('crypto');
const algorithm = config.hash.algorithm;
const key = Buffer.from(config.hash.key, 'utf8');
const salt = crypto.randomBytes(16);

function encrypt(text) {
 let cipher = crypto.createCipheriv(algorithm, key, salt);
 let encrypted = cipher.update(text);
 encrypted += cipher.final('hex');
 return { salt: salt.toString('hex'), encryptedData: encrypted.toString('hex') };
}

function decrypt(text) {
 let salt = Buffer.from(text.salt, 'hex');
 let encryptedText = Buffer.from(text.encryptedData, 'hex');
 let decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), salt);
 let decrypted = decipher.update(encryptedText);
 decrypted = Buffer.concat([decrypted, decipher.final()]);
 return decrypted.toString();
}

var hw = "Mi7qi9mv@"
var hw = encrypt(hw);
console.log(hw);
console.log(decrypt(hw));
