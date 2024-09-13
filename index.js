const inputSentenceForm = document.querySelector('#inputSentence')
const formInput = inputSentenceForm.querySelector('input')

inputSentenceForm.addEventListener('submit', (event) => sentenceHandler(event))

function sentenceHandler (event) {
  event.preventDefault()
  console.log(formInput.value)
  const inputSentence = formInput.value.split(' ')
  let longestWord = 'a'
  // Counting section
  for (const word of inputSentence) {
    if (word.length >= longestWord.length) {
      longestWord = word
    }
  }

  console.log(`longest word is ${longestWord}`)
  console.log('-----------------------------------------------------------------')
  // Sorting section
  inputSentence.sort((a, b) => {
    return b.length - a.length
  })

  console.log(inputSentence)
  console.log('-----------------------------------------------------------------')
  // console.log("\x1b[34m]", "Color text")

  // const words = inputSentence.length
  for (const word of inputSentence) {
    for (const char of word) {
      if (char === 'a' || char === 'o' || char === 'i' || char === 'e' || char === 'u' || char === 'y') {
        console.log("\x1b[34m]", char)
      } else {
        console.log("\x1b[33m]", char)
      }
    }
  }

  document.querySelector('#outputText').textContent = longestWord
}
