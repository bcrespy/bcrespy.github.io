console.log(fxhash)
console.log(fxhashValues)
console.log(fxhashValues2)

document.body.innerText+= fxhash + "\n\n"

for (const val of fxhashValues) {
  document.body.innerText+= val  + "\n"
}