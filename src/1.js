const crypto = require('crypto');



const {publicKey, privateKey} = crypto.generateKeyPairSync('rsa', {
    modulusLength: 1024,
    publicKeyEncoding: {
        type: 'spki',
        format: 'pem',
    },
    privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem',
        
    }
});

function encryptString (msg, publicKey) {
    const cypier = crypto.publicEncrypt(
         publicKey, Buffer.from(msg));
    return cypier;
}
function decryptString(cypier, publicKey) {
    const decrypted = crypto.privateDecrypt({
        key:publicKey,
        passphrase:''
        },
         Buffer.from(cypier));
    return decrypted;
}

var msg= "Hello";
console.log(publicKey.toString('base64'));
console.log(privateKey.toString('base64'));

var cypier = encryptString(msg,publicKey);
console.log(cypier.toString('base64'));

var msg2 = decryptString(cypier, privateKey);
console.log(msg2.toString('ascii'));