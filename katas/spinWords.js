function spinWords(testString){
  let returnString = "";

  testString.split(' ').forEach(s => {
    if (s.length >= 5) {
      let spunWord = [s.length];

      for (let i = 0; i < s.length; i++) {
        spunWord[s.length - i - 1] = s[i];
      }

      returnString = returnString.concat(spunWord.join(''), ' ');
    }
    else {
      returnString = returnString.concat(s, ' ');
    }
  });

  return returnString.trim();
}

export default spinWords;