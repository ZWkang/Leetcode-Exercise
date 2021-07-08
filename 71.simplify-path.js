/**
 * @param {string} path
 * @return {string}
 */
// 6-1
var simplifyPath = function(path) {
  var pathStack = path.split("/").filter(Boolean);
  var resStack = [];

  for (var i = 0; i < pathStack.length; i++) {
    if (pathStack[i] === ".") {
      continue;
    } else if (pathStack[i] === "..") {
      resStack.pop();
    } else {
      resStack.push(pathStack[i]);
    }
  }
  return "/" + resStack.join("/");
};
