import { writeFile } from 'node:fs';


const data = 'Hello Node.js';
writeFile('message.txt', data, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});