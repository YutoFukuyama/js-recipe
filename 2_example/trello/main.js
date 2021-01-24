const input = document.getElementById("text")
const button = document.getElementById("button")
const display = document.getElementById("display")

button.onclick = function(){
    
    if(input.value === ""){
    
    }else{
        const card=document.createElement("div")
        card.textContent = input.value
        display.append(card)
        input.value = ""
    }
}