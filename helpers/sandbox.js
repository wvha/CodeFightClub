const Sandbox = require('sandbox');
const box = new Sandbox();

var execute = function(code, tests) {
  return new Promise((resolve) => {
    box.run(`${code} ${tests};`, (output) => {
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

// [ { input: '5, 6', actual: '30', expected: '11'}, { input: '3, 4', actual: '12', expected: '7'} ]
