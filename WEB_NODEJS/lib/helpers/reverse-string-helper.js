/**
 * @function reverseString
 * @description It will accepet a string as parameter which will return the reverse.
 * For example: Kenna it will turn as anneK. To create that it will be verified if is
 * a valid string, then it will use the function split which creates an array with each
 * letter, then it will be applied the js function reverse to reverse all array elements
 * and the very last it will join the array creating a string again.
 * @param {String} string
 * @returns A reverse string.
 */
const reverseString = (string) => {
  if (string && string.length > 1) {
    string = string.split('').reverse().join('');
  }
  return string;
};

module.exports = {
  reverseString,
};
