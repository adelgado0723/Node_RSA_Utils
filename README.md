# RSA Encryption Utilities

## About

[RSAUtilityGenerator.js](https://github.com/adelgado0723/Node_RSA_Utils/blob/master/RSAUtilityGenerator.js)
wraps the **_node-rsa_** npm module and exports a function that exposes three
functions in a _utilities_ object for generating rsa keys, and the encryption
and decryption of text files:

### generateKeys(dir = "./")

- Takes a directory argument and generates _pem_ format public and private
  keys there. If no parameter is provided, it defaults to the current working
  directory.

### encrypt(keyPath, inPath, outPath)

- Takes the path to a public key, an input file to be encrypted, and an
  output file where it can place the encrypted data.

### decrypt(keyPath, inPath, outPath)

## Usage

## Running the Script
