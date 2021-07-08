/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  var stack = [];

  for (var i = 0; i < tokens.length; i++) {
    var token = parseInt(tokens[i], 10);
    if (token === token) {
      stack.push(token);
    } else {
      var left = stack.pop();
      var right = stack.pop();
      switch (tokens[i]) {
        case "+":
          stack.push(left + right);
          break;
        case "-":
          stack.push(right - left);
          break;

        case "/":
          stack.push(parseInt(right / left));
          break;
        case "*":
          stack.push(left * right);
          break;
        default:
          break;
      }
    }
  }
  if (stack.length !== 1) {
    return false;
  }
  return stack.pop();
};
