const container = document.querySelector(".grid")
const containerStyle = document.querySelector(".grid").style
const button = document.querySelector(".button")
containerStyle.width = "400px"
containerStyle.height = "400px"
const containerWidth = Number(containerStyle.width.replace("px", ""))


//Select the newly created grids

button.addEventListener('click', () => {
    let number = prompt('Enter a number from 1 to 100');
    number = Number(number);
    if(number > 100 || number < 0) {
        alert('Wrong Value')
    } else {
        createGrid(number);
        gridChilds = document.querySelectorAll('.grid-child');
        gridChilds.forEach((child) => {
            child.addEventListener('mouseover', changeColor);
        })}
    })
    
    
    
    
    //FUNCTIONS 
    
    //Create a grid with a given number of squares (number x number)
    function createGrid(number) {
        container.innerHTML = ""
        for (let i = 0; i < number * number; i++) {
            const gridChild = document.createElement('div');
            gridChild.classList.add('grid-child');
            gridChild.style.width = `${containerWidth / number}px`;
            container.appendChild(gridChild); 
        }
    }
    
    function randomColor() {
        return '#' + Math.floor(Math.random()*16777215).toString(16)
    }
    
    function changeColor(e) {
        e.target.style.backgroundColor = randomColor()
    }
    
    createGrid(16);
    let gridChilds = document.querySelectorAll('.grid-child');
    gridChilds.forEach((child) => {
        child.addEventListener('mouseover', changeColor);
    })
    
    