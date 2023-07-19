const button = document.querySelector("button")
const body = document.querySelector("body")
const color = ['green','red','gray','yellow','pink','purple']
body.style.backgroundColor='blue'
button.addEventListener('click',changeB)
function changeB(){
    const colorIndex = parseInt(Math.random()*color.length)
    body.style.backgroundColor = color[colorIndex]
}

