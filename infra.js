const fetch = require('node-fetch');
const { exec, spawn } = require('child_process');
const FormData = require('form-data')
//const { promisify } = require('util');

/*
function main() {
  const shell = spawn('python3', ['mfp.py']);
  shell.stdout.pipe(process.stdout);
}
main();
*/

function start() {
  console.log("starting mfp process");
  exec('python3 mfp.py', async (err, stdout, stderr) => {
    try {
      await webhook(stdout);
    } catch (err) {
      console.log(err); 
    }
  });
}

async function webhook(data) {
  console.log("sending webhook");
  let form = new FormData();
  form.append("macros", "500g");
  try {
    const res = await fetch('https://hooks.zapier.com/hooks/catch/590510/i7na8m/', {method : 'POST', body: form });
    const info = await res.json();
    console.log("info from zap", info);
  } catch (err) {
    console.error(err); 
  }
}

start();
