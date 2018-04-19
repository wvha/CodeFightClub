const ToyProblemSchema = ({
  title: { type: String, unique: true },
  funcName: String,
  initialCode: String,
  tests: [
    {
      input: String,
      expected: String
    }
  ]
});



///////////////////////////////////////////////////////////////////
//////                ADD THESE TO YOUR DATABASE             //////
///////////////////////////////////////////////////////////////////



db.toyproblems.insert({
  "title" : "Add numbers",
  "body" : "Return the result of adding two numbers.",
  "funcName" : "add",
  "initialCode" : "function add(a, b) {\n\n}",
  "tests" : [
    {
      "input" : "1, 2",
      "expected" : "3"
    },
    {
      "input" : "6, 8",
      "expected" : "14"
    },
    {
      "input" : "12, 24",
      "expected" : "36"
    }
  ]
})

db.toyproblems.insert({
  "title" : "nthFibonacci",
  "body" : "Write a function that accepts a number, n, and returns the nth Fibonacci number. Use a recursive solution to this problem.",
  "funcName" : "nthFibonacci",
  "initialCode" : "function nthFibonacci(n) {\n\n}",
  "tests" : [
    {
      "input" : "3",
      "expected" : "2"
    },
    {
      "input" : "4",
      "expected" : "3"
    },
    {
      "input" : "5",
      "expected" : "5"
    },
    {
      "input" : "6",
      "expected" : "8"
    },
    {
      "input" : "7",
      "expected" : "13"
    }
  ]
})

db.toyproblems.insert({
  "title" : "Balanced Parens",
  "body" : "Write a function that takes a string of text and returns true if the parentheses are balanced and false otherwise.",
  "funcName" : "balancedParens",
  "initialCode" : "function balancedParens(input) {\n\n}",
  "tests" : [
    {
      "input" : "'('",
      "expected" : "false"
    },
    {
      "input" : "'()'",
      "expected" : "true"
    },
    {
      "input" : "')('",
      "expected" : "false"
    },
    {
      "input" : "'(())'",
      "expected" : "true"
    }
  ]
})

db.toyproblems.insert({
  "title" : "LongestRun",
  "body" : "Write a function that, given a string, Finds the longest run of characters and returns an array containing the start and end indices of that run. If there are two runs of equal length, return the first one. For example: longestRun('abbbcc') // [1, 3] longestRun('aabbc')  // [0, 1] longestRun('abcd')   // [0, 0] Try your function with long, random strings to make sure it handles large inputs well.",
  "funcName" : "longestRun",
  "initialCode" : "function longestRun(string) {\n\n}",
  "tests" : [
    {
      "input" : "'abbbcc'",
      "expected" : "[ 1, 3 ]"
    },
    {
      "input" : "'aabbc'",
      "expected" : "[ 0, 1 ]"
    },
    {
      "input" : "'abcd'",
      "expected" : "[ 0, 0 ]"
    }
  ]
})
