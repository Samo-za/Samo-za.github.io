function convert(event){
  const someUserInput = document.getElementById("price")
  if (!someUserInput) {
    alert("Input some price first 😀")
    return null
  }
  const euroValue = +someUserInput.value
  const hrkValue = toHRK(euroValue)
  displayResult(hrkValue)
}

function toHRK(euro){
  return euro * 7.53450;
}
toHRK()

function displayResult(someValue){
  const displayResultScreen = document.getElementById("result")
  displayResultScreen.innerHTML = "The price of product is: " + someValue.toFixed(2) + " kn"
}
displayResult(0)