const path = require('path');

console.log(path.sep);

const filePath = path.join('/2.2+Native+Modules','message.txt')
console.log(filePath);

const base = path.basename(filePath)
console.log(base);

const absolute = path.resolve(__dirname, '2.2+Native+Modules', 'message.txt')
console.log(absolute);
