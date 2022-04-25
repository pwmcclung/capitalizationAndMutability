function capitalizeWord(word) {
  let newWordCap = word[0].toUpperCase();
  let newWordEnd = word.slice(1,)
  let newWord = newWordCap + newWordEnd
  return newWord;
  
}
