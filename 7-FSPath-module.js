const path = require('path')

console.log(path.sep)

const filePath = path.join('/Contet','/subfolder','test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.isAbsolute(__dirname, 'content', 'subfolder', 'text.txt')
console.log(absolute)