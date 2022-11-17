const fs = require('fs');
const {resolve} = require('path');

// membaca berkas dengan method createReadStream()
const readableStream = fs.createReadStream(resolve(__dirname, 'input.txt'), {
  highWaterMark: 15,
});

// menulis berkas dengan method writable steam
const writableStream = fs.createWriteStream(resolve(__dirname, 'output.txt'));

readableStream.on('readable', () => {
  try{
    writableStream.write(`${readableStream.read()}\n`);
  } catch (error){
    console.log(error);
  }
})

readableStream.on('end', () => {
  console.log('Done');
})
