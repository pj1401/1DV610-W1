const inputSentence = process.argv.slice(2)

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

words = inputSentence.length

// for (let i = 0; i < words; i++) {
  for (const word of inputSentence) {
    for (const char of word) {
      if (char === 'a' || char === 'o' || char === 'i' || char === 'e' || char === 'u' || char === 'y') {
        console.log("\x1b[34m]", char)
      } else {
        console.log("\x1b[33m]", char)
      }
    }
  }
// }