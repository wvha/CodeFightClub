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
  tests.forEach((test) => {
    box.run(`${code} ${test};`, (output) => {
      console.log(output.result);
    });
  })
}

run(`function fib(a) {
  if (a === 0) {
    return 0;
  }  else if (a === 1) {
    return 1;
  } else if (a > 1) {
    return fib(a-1) + fib(a-2);
  }
}`, ['fib(4)', 'fib(6)']);

module.exports.run = run;
