const path = require("path");
let configPath = "";

switch (process.env.NODE_ENV) {
  case "production":
    configPath = path.join(__dirname, "\\configs\\prod\\.env");
    break;

  case "development":
    configPath = path.join(__dirname, "\\configs\\dev\\.env");
    break;

  default:
    console.log("No valid environment specified");
    return;
}

require("dotenv").config({ path: configPath });

const RSAUtilityGenerator = require("./RSAUtilityGenerator");
const utils = RSAUtilityGenerator();

utils.generateKeys(process.env.KEY_FOLDER_PATH);

utils.encrypt(
  process.env.PUBLIC_KEY_PATH,
  path.normalize("./data/test.txt"),
  path.normalize("./test/encrypted.txt")
);

utils.decrypt(
  process.env.PRIVATE_KEY_PATH,
  path.normalize("./test/encrypted.txt"),
  path.normalize("./test/decrypted.txt")
);
