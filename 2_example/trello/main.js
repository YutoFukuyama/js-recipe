const input = document.getElementById("text")
const button = document.getElementById("button")
const display = document.getElementById("display")
let todos=[]
todos=JSON.parse(localStorage["todo"])
console.log(todos)
for(i=0;i<todos.length;i++){
    const card=document.createElement("div")
    card.textContent=todos[i]
    display.append(card)
}

button.onclick = function(){
    
    if(input.value === ""){
    
    }else{
        const card=document.createElement("div")
        //const deleteButton=document.createElement("button")
        card.textContent = input.value
        display.append(card)
        todos.push(input.value)
        console.log(todos)
        localStorage["todo"]=JSON.stringify(todos)
        input.value = ""
    }
}