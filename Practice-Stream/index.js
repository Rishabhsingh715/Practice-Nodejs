const fs = require('fs');

// File paths
const sourceFilePath = 'C:\\Users\\rsingh\\Downloads\\Rishabh_singh_3YOE.pdf';
const destinationFilePath = 'C:\\Users\\rsingh\\Downloads\\OUTPUT.pdf';

// Create a readable stream to read from the source file
const readableStream = fs.createReadStream(sourceFilePath);

// Create a writable stream to write to the destination file
const writableStream = fs.createWriteStream(destinationFilePath);

// Event handler for 'data' event on the readable stream
readableStream.on('data', (chunk) => {
    console.log('Received chunk of data:', chunk);

    // Write the chunk of data to the writable stream
    writableStream.write(chunk, (err) => {
        if (err) {
            console.error('Error writing to the destination file:', err);
        }
    });
});

// Event handler for 'end' event on the readable stream
readableStream.on('end', () => {
    console.log('File reading completed.');

    // Close the writable stream after all data is written
    writableStream.end(() => {
        console.log('Data has been written to the destination file.');
    });
});

// Event handler for 'error' event on the readable stream
readableStream.on('error', (err) => {
    console.error('Error reading from the source file:', err);
});

// Event handler for 'error' event on the writable stream
writableStream.on('error', (err) => {
    console.error('Error writing to the destination file:', err);
});
