module.exports = function reverse (n) {
    let nString = '';
    (n < 0) ? nString =  -n + '' : nString = n + '';
    let result = '';
    for (var i = nString.length - 1; i >= 0; i -= 1) {
     result = result + nString[i];
    }
  return result;
}