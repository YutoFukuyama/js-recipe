const display = document.getElementById("display")
const input = document.getElementById("input")
const button = document.getElementById("button")
const button2 = document.getElementById("button2")

let money=0

button.onclick = function(){
    money += Number(input.value)
    console.log(money)
}

button2.onclick = function(){

}