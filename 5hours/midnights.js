//This is used in the "Run Javascript" step of the 5-hour zap
const lastMidnight = new Date();
lastMidnight.setHours(0,0,0,0);
const nextMidnight = new Date();
nextMidnight.setHours(24,0,0,0);
return {lastMidnight: lastMidnight.toISOString(), nextMidnight: nextMidnight.toISOString()}
