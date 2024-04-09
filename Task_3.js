const fs = require('fs');

fs.readFile('data.txt', 'utf8', (error, data) => {
    if (error) {
        console.error('Error reading file:', error);
        return;
    }
    const wordCount = data.trim().split(/\s+/).length;
    console.log('Total word count:', wordCount);
});
