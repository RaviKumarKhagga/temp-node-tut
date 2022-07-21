/*os module*/
// const os = require('os')

// // info about current user
// const user = os.userInfo()
// console.log(user)

// // method returns the system uptime in seconds 
// console.log(`The System Uptime is ${os.uptime()} seconds`)

// const currentOS ={
//     name : os.type(),
//     release : os.release(),
//     totalMemory : os.totalmem(),
//     freeMempry : os.freemem(),
//     ostmpdir : os.tmpdir(),
//     endianness : os.endianness(),
//     hostname : os.hostname(),
//     platform : os.platform(),
//     upTime : os.uptime()
// }

// console.log(currentOS)

/*--------------------------------------------------------------------*/

/*PATH Module*/
// const path = require('path')

// console.log(path.sep)

// const filePath = path.join('/Contet','/subfolder','test.txt')
// console.log(filePath)

// const base = path.basename(filePath)
// console.log(base)

// const absolute = path.isAbsolute(__dirname, 'content', 'subfolder', 'text.txt')
// console.log(absolute)

/*****************************************************************************************/

/* FS Module*/

// const { readFileSync, writeFileSync, writeSync } = require('fs')

// const first = readFileSync('./Content/first.txt', 'utf8')
// const second = readFileSync('./Content/second.txt', 'utf8')

// writeFileSync(
//     './Content/result-sync.txt', 
//     `Here is the result : ${first}, ${second}`,
//     {flag : 'a'}
//     )

/*******************************************************************************/

/*FS-sync*/

// const { readFile, writeFile } = require('fs')

// readFile('./Content/first.txt', 'utf8', (err, result) =>{
//     if(err){
//         console.log(err)
//         return
//     }
//     const first = result;

//     readFile('./Content/second.txt', 'utf8', (err, result) =>{
//         if(err){
//             console.log(err)
//             return
//         }
//         const second = result;

//         writeFile(
//             './Content/result-async.txt',
//             `Here is the result : ${first}, ${second}`,
//             (err, result) => {
//                 if(err){
//                     console.log(err);
//                     return;
//                 }
//                 console.log(result);
//             })
//     })
// })

/******************************************************************************/

