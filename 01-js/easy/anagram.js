/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/
function isAnagram(str1, str2) {
  // Remove any non-word characters and convert to lowercase
  const cleanStr1 = str1.toLowerCase();
  const cleanStr2 = str2.toLowerCase();
  // Check if the length of the two cleaned strings are equal
  if (cleanStr1.length !== cleanStr2.length) {
      return false;
  }
  // Convert strings to arrays, sort them, and then compare
  const sortedStr1 = cleanStr1.split('').sort().join('');
  const sortedStr2 = cleanStr2.split('').sort().join('');
  // Return true if the sorted strings are equal, indicating they are anagrams
  return sortedStr1 === sortedStr2;
}

module.exports = isAnagram;
