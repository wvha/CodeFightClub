import $ from 'jquery';

test('should trigger warning if all forms are not filled out', () => {
  let badProblem = {
    title: 'Hello',
    body: 'body',
    code: 'this',
    tests: 'not a real test',
    params: 'parameters',
  };

  let invalid = ['Missing'];

  if (badProblem.title === '') {
      invalid.push('title');
  }
  if (badProblem.body === '') {
      invalid.push('prompt');
  }
  if (badProblem.code === '') {
      invalid.push('function name');
  }
  if (badProblem.tests === '') {
      invalid.push('valid JSON-parsable test');
  }
  if (badProblem.params === '') {
      invalid.push('parameters');
  }

  expect(invalid.length).toBe(1);

});