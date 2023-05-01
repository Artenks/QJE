let numTries = 0;
const startTime = window.performance.now();

async function getCohortId() {
  try {
	if (document.interestCohort) {
	  const interestCohort = await document.interestCohort();
	  console.log('document.interestCohort():', interestCohort);
	  Log('id', interestCohort.id + '.');
	  Log('ver', interestCohort.version + '.');
	  const elapsed = Math.round(window.performance.now() - startTime) / 1000;
	  Log('time', `Completed in ${elapsed} seconds.`);
	  }
	else {
	  Log('id', 'not supported by this browser');
	  Log('ver', 'not supported by this browser');
	  }
	clearInterval(intervalID);
	}
  catch(error) {
	console.log(error);
	++numTries;
	if (numTries > 10) {
	  Log('id', 'not available.');
	  Log('ver', 'not available.');
	  clearInterval(intervalID);
	  }
	}
  }

function Log(id, txt) { document.getElementById(id).innerHTML = txt; }

const intervalID = setInterval(getCohortId, 100);

if (document.getElementById('permissionsPolicy'))	// If element presents
   Log('permissionsPolicy', document.permissionsPolicy !== undefined ? 'is supported' : 'is undefined');