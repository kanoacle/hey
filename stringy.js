/*jshint esversion:6*/
const stringCheck = (source, find) => {
  if (typeof(source) !== 'string' || typeof(find) !== 'string') {
    return false;
  } else {
    find = find.split('');
    source = (source + source).split('').splice(find[0], find.length);
    for (var i = 0; i < find.length; i++) {
      if (source[i] === find[i]) {
        return true;
      }
      return false;
    }
  }
};
module.exports = stringCheck;
stringCheck('firetruck', 'fir');