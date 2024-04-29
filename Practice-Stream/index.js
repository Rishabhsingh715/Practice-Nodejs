const fs = require('fs');

// File path
const filePath = 'C:\\Users\\rsingh\\Downloads\\Rishabh_singh_3YOE.pdf';

// Create a readable stream
const readStream = fs.createReadStream(filePath, { encoding: 'utf8' });

// Event handler for data chunks
readStream.on('data', (chunk) => {
    // Process each chunk of data here
    console.log(chunk);
});

// Event handler for end of file
readStream.on('end', () => {
    console.log('File reading completed.');
});

// Event handler for errors
readStream.on('error', (err) => {
    console.error('Error reading file:', err);
});