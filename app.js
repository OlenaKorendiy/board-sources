const board = document.querySelector('#board')
const colors = ['#1874a5', '#ebb678', '#e07b39', '#69bdd2','#80391e', '#cce7e8','#1c100b', '#44bcd8']
const SQUARES_NUMBER = 500

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')


    square.addEventListener('mouseover', setColor)
    square.addEventListener('mouseleave', removeColor)

    board.append(square)
}
function setColor(event) {
    const element = event.target
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor(event) {
    const element = event.target
    element.style.backgroundColor = 'white'
    
}
function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
} 
