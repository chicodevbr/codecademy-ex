const greetWorld = (word1, word2) => {
  let greetText = `${word1}, ${word2}!`;
  const titleCase = text => {
    return text.toLowerCase()
      .split(' ')
      .map((word) => {
        return word[0].toUpperCase() + word.slice(1);
      }).join(' ')}
  return titleCase(greetText)

  };
greetWorld('hello', 'world');