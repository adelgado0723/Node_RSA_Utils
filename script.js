let configPath = "";

switch (process.env.NODE_ENV) {
  case "production":
    configPath = __dirname + "\\configs\\prod\\.env";
    break;

  case "development":
    configPath = __dirname + "\\configs\\dev\\.env";
    break;

  default:
    console.log("No valid environment specified");
    return;
}

require("dotenv").config({ path: configPath });

// Giving minimist an array of arguments
// excluding node executable path and file path
const argv = require("minimist")(process.argv.slice(2));

const fs = require("fs");

const NodeRSA = require("node-rsa");
const generateKeys = require("./KeyGenerator");

generateKeys(process.env.KEY_FOLDER_PATH);

const file = fs.readFileSync("data/" + argv.file, "utf8");
const publicKeyFile = fs.readFileSync(process.env.PUBLIC_KEY_PATH, "utf8");
const privateKeyFile = fs.readFileSync(process.env.PRIVATE_KEY_PATH, "utf8");

const publicKey = new NodeRSA(publicKeyFile, "public");
const privateKey = new NodeRSA(privateKeyFile, "private");

encrypt(publicKey, file);

const encryptedFile = fs.readFileSync("test/encrypted.txt", "utf8");
decrypt(privateKey, encryptedFile);

function encrypt(key, file) {
  var encrypted = key.encrypt(file, "base64", "utf-8");
  fs.openSync("test/encrypted.txt", "w");
  fs.writeFileSync("test/encrypted.txt", encrypted, "utf-8");
}
function decrypt(key, file) {
  var decrypted = key.decrypt(file);
  fs.openSync("test/decrypted.txt", "w");
  fs.writeFileSync("test/decrypted.txt", decrypted, "utf-8");
}
