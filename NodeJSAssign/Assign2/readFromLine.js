const readline = require('node:readline');
const { stdin: input, 
    stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

rl.question('Please Enter Your Name:  ', (answer) => {

  console.log(`Hello ${answer}`);

  rl.close();
});