const container = document.querySelector(".grid")
const containerStyle = document.querySelector(".grid").style
const button = document.querySelector("#create")
const eraser = document.querySelector("#eraser")
const clear = document.querySelector("#clear")
let value = false;
containerStyle.width = "400px"
containerStyle.height = "400px"
const containerWidth = Number(containerStyle.width.replace("px", ""))


//WHEN CLICKED, ASK A PROMPT AND CREATE A GRID UPON THE VALUE ENTERED
button.addEventListener('click', () => {
    let number = prompt('Enter a number from 1 to 100');
    number = Number(number);
    if(number > 100 || number < 0) {
        alert('Wrong Value');
    } else {
        createGrid(number);
        gridChilds = document.querySelectorAll('.grid-child');
        gridChilds.forEach((child) => {
            child.addEventListener('mouseover', changeColor);
        })}
    })
    
    //CLEAR THE GRID
    clear.addEventListener('click', clearColor)   
    
    // TURN THE ERASER ON/OFF
    eraser.addEventListener('click', () => {
        let gridChilds = document.querySelectorAll('.grid-child');
        if (value === false) {
            value = true;
            gridChilds.forEach((child) => {
                child.addEventListener('mouseover', changeColorToWhite);
            })
        } else if (value === true) {
            value = false;
            gridChilds.forEach((child) => {
            child.removeEventListener('mouseover', changeColorToWhite)
        })
    }})


    
    
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

    function changeColorToWhite(e) {
        e.target.style.backgroundColor = 'white'
    }

    function clearColor() {
        let gridChilds = document.querySelectorAll('.grid-child');
        gridChilds.forEach((child) => {
            child.style.backgroundColor = 'white';
        })    
    }
    

    //DEFAULT SETTINGS WHEN PAGE LOADED
    createGrid(16);
    let gridChilds = document.querySelectorAll('.grid-child');
    gridChilds.forEach((child) => {
        child.addEventListener('mouseover', changeColor);
    })

   

    // CO BRAKUJE:
    // 1. gumka nie działa
    // 2. dodać opcję z stopniowym "zaczernianiem" kafelków
    // 3. dodać tytuł "Etch a sketch" na defaultowym gridzie
    
     
   