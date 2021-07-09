const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const display = document.getElementById("display")
const reset = document.getElementById("reset")

let count = 0

button1.onclick = function() {
  count -= 1
  display.textContent = count
}

button2.onclick = function() {
  count *= 2
  display.textContent = count
}

reset.onclick = function() {
  count = 0
  display.textContent = count
}
