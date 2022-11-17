// Ansynchronous

// const fs = require('fs');
// const {resolve} = require('path');

// const fileReadCallBack = (erorr, data) => {
//   if(erorr){
//     console.log('Gagal membaca berkas');
//     return;
//   }
//   console.log(data);
// }

// fs.readFile(resolve(__dirname, 'notes.txt'), 'utf-8', fileReadCallBack);

// Synchronous
/*
const fs = require('fs');
const {resolve} = require('path')
const data = fs.readFileSync(resolve(__dirname, 'notes.txt'), 'UTF-8');
console.log(data);
*/

