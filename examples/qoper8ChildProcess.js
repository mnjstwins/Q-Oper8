var childProcess = require('qoper8').childProcess;

// Define your method that will process each incoming action
// Go wild with synchronous code to your heart's content!

var actionMethod = function(action) {
  var result = "method completed for " + process.pid + " at " + new Date().toLocaleTimeString();
  return result;
};

childProcess.handler(actionMethod);
