const fetch = require('node-fetch');
const { exec, spawn } = require('child_process');
const FormData = require('form-data')
const R = require('ramda');

function startMfp() {
  const child = exec('python3 mfp.py', async (err, stdout, stderr) => {
    try {
      //TODO: Turn to pipe or ramda flow
      console.log("STDOUT from MFP:", stdout)
      await webhook(format(JSON.parse(stdout)));
    } catch (err) {
      console.log("Something whent wrong",err); 
    }
  });
}

/**
 * Deprecated, not currently in use
 */
function getUsDate() {
  const date = new Date(); 
  const month = date.getUTCMonth();
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();
  return month + '/' + day + '/' + year;
}

async function webhook(data) {
  let form = new FormData();
  //TODO: theres gotta be a sick slick way to do this functionally
  for (const key in data) {
    form.append(key, data[key]); 
  }
  try {
    const res = await fetch('https://hooks.zapier.com/hooks/catch/590510/i7na8m/', {method : 'POST', body: form });
    const info = await res.json();
    console.log("info from zap", info);
  } catch (err) {
    console.error(err); 
  }
}

/* formats data to be easier to handle */
//TODO: CURRENTLY NOT IN USE lol just returns input
function format(data) {
  const obj = {
    //TODO: Nice way to assign only if exists?
    date : data.date, //get today's date inside python
    weight : data.weight,
    calories : data.calories,
    protein: data.protein,
    carbohydrates : data.carbohydrates,
    fats : data.fat,
    fiber : data.fiber,
    sodium : data.sodium,
    water : data.water
  }
  console.log("heres what were woring with", data);
  return data;
}

startMfp();


