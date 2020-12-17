const fs = require('fs');

fs.rename('testfile.txt', 'testfile2.txt', (err) => {
    if (err) throw err;
    console.log('File Renamed!');
});