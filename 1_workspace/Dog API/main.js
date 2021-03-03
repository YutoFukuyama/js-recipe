const imageElement = document.getElementById("dog")

fetch("https://dog.ceo/api/breeds/image/random")
  .then((res) =>{
    return res.json()
  })
  .then((data) =>{
    imageElement.src = data.message
  })