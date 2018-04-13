const Sandbox = require('sandbox');
const box = new Sandbox();

var execute = function(code) {
  return new Promise((resolve) => {
    box.run(`${code}`, (output) => {
      console.log('output of running code: ' + output.result);
      resolve(output.result);
    });
  });
};

var run = function(code, tests) {
  console.log('inside run...');
  console.log('code:  ' + code);
  tests.forEach((test) => {
    box.run(`${code} ${test}`, (output) => {
      console.log(output.result);
    });
  })
}


module.exports.run = run;
module.exports.execute = execute;
