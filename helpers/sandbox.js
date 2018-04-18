const Sandbox = require('sandbox');
const box = new Sandbox();

var execute = function(code) {
  return new Promise((resolve) => {
    box.run(`${code};`, (output) => {
      console.log('output of running code: ' + output.result);
      resolve(output.result);
    });
  });
};

// var tests = [ {input: '5, 6', expected: '11'}, {input: '3, 4', expected: '8'} ];
// var solution = 'function add(a, b) { return a + b; }';
// var funcName = 'add';
// var status;
// var testRes = [];

// tests.forEach((test) => {
//   execute(`${solution} ${funcName}(${test.input})`)
//   .then((data) => {
//     console.log(data);
//     if (data !== test.expected) {
//       status = 'fail';
//     } else {
//       status = 'pass';
//     }
//     testRes.push({input: test.input, expected: test.expected, actual: data, status: status});
//     console.log(testRes);
//   });
// });

module.exports.execute = execute;

// [ { input: '5, 6', actual: '30', expected: '11'}, { input: '3, 4', actual: '12', expected: '7'} ]
