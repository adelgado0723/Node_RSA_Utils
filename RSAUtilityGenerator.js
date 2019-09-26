const fs = require("fs");
const NodeRSA = require("node-rsa");
const path = require("path");

module.exports = function getRSAUtils() {
  const utilities = {
    generateKeys,
    encrypt,
    decrypt
  };
  return utilities;

  function generateKeys(dir = "./") {
    const key = new NodeRSA().generateKeyPair();
    const publicKey = key.exportKey("public");
    const privateKey = key.exportKey("private");

    /* Using all synchronous operations */

    // Opening and writing public key to a file
    // (Creating file if it doesn't exist)
    fs.openSync(path.join(dir, "/public.pem"), "w");
    fs.writeFileSync(path.join(dir, "public.pem"), publicKey, "utf-8");

    // Opening and writing private key to a file
    // (Creating file if it doesn't exist)
    fs.openSync(path.join(dir, "/private.pem"), "w");
    fs.writeFileSync(path.join(dir, "/private.pem"), privateKey, "utf-8");
  }

  function encrypt(keyPath, inPath, outPath) {
    const inFile = fs.readFileSync(inPath, "utf8");
    const publicKeyFile = fs.readFileSync(keyPath, "utf8");
    const key = new NodeRSA(publicKeyFile, "public");

    var encrypted = key.encrypt(inFile, "base64", "utf-8");
    fs.openSync(outPath, "w");
    fs.writeFileSync(outPath, encrypted, "utf-8");
  }

  function decrypt(keyPath, inPath, outPath) {
    const inFile = fs.readFileSync(inPath, "utf8");
    const privateKeyFile = fs.readFileSync(keyPath, "utf8");
    const key = new NodeRSA(privateKeyFile, "private");

    var decrypted = key.decrypt(inFile);
    fs.openSync(outPath, "w");
    fs.writeFileSync(outPath, decrypted, "utf-8");
  }
};
