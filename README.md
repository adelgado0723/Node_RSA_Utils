# RSA Encryption Utilities

## About

### **[RSAUtilityGenerator.js](https://github.com/adelgado0723/Node_RSA_Utils/blob/master/RSAUtilityGenerator.js)**

This module wraps the **_node-rsa_** npm module and exports a function that
exposes three functions in a _utilities_ object for generating rsa keys, and
the encryption and decryption of text files:

**generateKeys(dir = "./")**

- Takes a directory argument and generates _pem_ format public and private
  keys there.
- If no _dir_ parameter is provided, it defaults to the current working
  directory.

**encrypt(keyPath, inPath, outPath = "./encrypted.txt")**

- Takes the path to a public key, an input file to be encrypted, and an
  output file where it can place the encrypted data.
- Places encrypted file in the current directory if no _outPath_ is provided.
- Terminates and returns error if no path to the public key is provided in
  _keyPath_.
- Terminates and returns error if no path to the input file is provided in
  _inPath_.

**decrypt(keyPath, inPath, outPath = "./decrypted.txt")**

- Takes the path to a private key, an encrypted input file, and an output
  file where it can place the decrypted data.
- Places decrypted file in the current directory if no _outPath_ is provided.
- Terminates and returns error if no path to the private key is provided in
  _keyPath_.
- Terminates and returns error if no path to the input file is provided in
  _inPath_.

### **[script.js](https://github.com/adelgado0723/Node_RSA_Utils/blob/master/script.js)**

This purpose of this script is to test the RSAUtilityGenerator module and
practice conditionally reading a configuration file based on the environment.

i.e. production or development

As it is written, it expects the existence of a directory called _configs_ in
the same location where it is being run. This _config_ directory should
contain _prod_ and _dev_ folders. Each of these folders should contain a
_.env_ file with the environment variables pertaining to that environment.

#### Behavior

1. Generates a pair of keys in the directory specified in the
   _KEY_FOLDER_PATH_ environment variable
2. Encrypts a text file using the _PUBLIC_KEY_PATH_ environment variable, a
   text file located in the _data_ folder, which resides in the same directory
   as _script.js_, (_./data/test.txt_) and a path for the output file
   (_./test/encrypted.txt_)
3. Decrypts the encrypted file using the _PRIVATE_KEY_PATH_ environment
   variable, an encrypted file located in the _test_ folder, which resides in
   the same directory as _script.js_, (_./test/encrypted.txt_) and a path for
   the output file (_./test/decrypted.txt_)

#### Running

Before running the script, the environment needs to be set int the NODE_ENV
variable.

Windows PowerShell:

```powershell
$env:NODE_ENV = "development"
```

or

```powershell
$env:NODE_ENV = "production"
```

Then the script can be run:

```powershell
node .\script.js
```

In bash, the variable can be set and the script ran with a single command:

```bash
NODE_ENV="development" node ./script.js
```

```bash
NODE_ENV="production" node ./script.js
```
