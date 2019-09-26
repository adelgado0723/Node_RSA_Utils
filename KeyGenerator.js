const fs = require("fs");
const NodeRSA = require("node-rsa");

module.exports = function(dir = "./") {
  // Giving minimist an array of arguments
  // excluding node executable path and file path
  // const argv = require("minimist")(process.argv.slice(2));
  // const file = fs.readFileSync("data/" + argv.file, "utf8");

  const key = new NodeRSA().generateKeyPair();
  const publicKey = key.exportKey("public");
  const privateKey = key.exportKey("private");

  /* Using all synchronous operations */

  // Opening and writing public key to a file
  // (Creating file if it doesn't exist)
  fs.openSync(`${dir}/public.pem`, "w");
  fs.writeFileSync(`${dir}/public.pem`, publicKey, "utf-8");

  // Opening and writing private key to a file
  // (Creating file if it doesn't exist)
  fs.openSync(`${dir}/private.pem`, "w");
  fs.writeFileSync(`${dir}/private.pem`, privateKey, "utf-8");
};
