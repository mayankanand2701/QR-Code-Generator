const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Function to generate QR code for the provided text or link
async function generateQR() {
    try {
        // Function to get user input from the command line
        function getUserInput(question) {
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });

            return new Promise((resolve, reject) => {
                rl.question(question, (answer) => {
                    rl.close();
                    resolve(answer);
                });
            });
        }

        // Function to check if directory exists, if not, create it
        function ensureDirectoryExists(directory) {
            if (!fs.existsSync(directory)) {
                fs.mkdirSync(directory, { recursive: true });
            }
        }

        // Get input from the user
        const userInput = await getUserInput('Enter the text or URL to Generate QR Code : ');
        if (!userInput) {
            throw new Error('No text or link provided. Please provide a text or link to generate a QR Code.');
        }

        // Generate QR code
        const folderName = 'Generated QR';
        const folderPath = path.join(__dirname, folderName);
        ensureDirectoryExists(folderPath);
        const filename = 'qr.png';
        const filePath = path.join(folderPath, filename);
        
        // Generate QR Code and save it as an image file
        return new Promise((resolve, reject) => {
            QRCode.toFile(filePath, userInput, (err) => {
                if (err) {
                    reject(err);
                } else {
                    console.log(`QR Code Generated Successfully and saved at ${filePath}`);
                    resolve(filePath);
                }
            });
        });

    } catch (error) {
        console.error('Error generating QR code:', error.message);
    }
}

// Exporting the function
module.exports = generateQR;

// for testing that is working properly
// generateQR();
