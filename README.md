# QR-Code-Generator
It is a simple, fast, and customizable npm package for QR code generation in JavaScript for provided text or URLs and save them as image files.

## Installation
To install our-qr-generator, you need to have Node.js installed on your system. Then, you can follow these steps : 

- Navigate to the directory where you want to use the package.
- Initialize npm by running ( in your terminal ) :
  ```javascript
  npm init
  ```
- Install the package by running ( in your terminal ) : 
  ```javascript
  npm install our-qr-generator   
  ```

## Usage

After installing the package, you can use it in your Node.js projects by requiring it.Write the below code under your index.js( or as your file name ) file.

```javascript
const generateQR = require('our-qr-generator');

generateQR().catch(error => {
    console.error('Error:', error.message);
});
```

Then run the below command ( in your terminal ) :
  ```javascript
  node index.js   
  ```
When you run this code, it will prompt you to enter the text or URL for which you want to generate a QR code. After providing the input, the QR code will be generated and saved in a folder named "Generated QR" in the current directory.

## License
This package is licensed under the Apache 2.0 License.
  
