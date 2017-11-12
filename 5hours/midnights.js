const fetch = require('node-fetch');

function getConfig () {
  const token = '1b512431cb6d072d2ba10d32793aebab';
  return {token: token};
}

function getTogglAuth() {
  //Note that username is the token in this weird API
  const username = getConfig().token;
  const password = 'api_token';
  return 'Basic' + new Buffer(username + ':' + password).toString('base64');
}

/* Return the first part of today and the first part of tomorrow */
function getMidnights () {
  const lastMidnight = new Date();
  lastMidnight.setHours(0,0,0,0);
  const nextMidnight = new Date();
  nextMidnight.setHours(24,0,0,0);
  return {lastMidnight: lastMidnight.toISOString(), nextMidnight: nextMidnight.toISOString()}
}

/* Triggered by a Google Calendar Zapier Zap, this will send a request to get times from Toggl */
async function sendTogglRequest (endpointUrl, token, midnights) {
  const endpointUrl = 'https://www.toggl.com/api/v8/time_entries?start_date=';
  try {
    const res = await fetch(
      `${endpointUrl}
        ?start_date=${midnights.lastMidnight}
        ?end_date=${midnights.nextMidnight}`,
      {
        headers: {Authorization : getTogglAuth()}
      });
    return await res.json();
  } catch (err) {
    console.error(err);
    return new Error("something went wrong in sendTogglRequest");
  }
}

console.log(sendTogglRequest());

