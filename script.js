const container = document.querySelector(".grid")
const containerStyle = document.querySelector(".grid").style
const button = document.querySelector("#create")
const eraser = document.querySelector("#eraser")
const clear = document.querySelector("#clear")
let value = false;
containerStyle.width = "500px"
containerStyle.height = "500px"
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
                eraser.style.backgroundColor = "deeppink";
            })
        } else if (value === true) {
            value = false;
            gridChilds.forEach((child) => {
            child.removeEventListener('mouseover', changeColorToWhite)
            eraser.style.backgroundColor = "pink";
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

    // FOR NUMERATING THE GRID CHILDREN
    // for (let i = 0; i < gridChilds.length; i++) {
    //     gridChilds[i].textContent = `${i}`
    // }

    gridChilds[0].style.backgroundColor = "indigo"     //E
    gridChilds[1].style.backgroundColor = "indigo"     //E
    gridChilds[2].style.backgroundColor = "indigo"     //E
    gridChilds[16].style.backgroundColor ="indigo"     //E
    gridChilds[32].style.backgroundColor = "indigo"    //E
    gridChilds[33].style.backgroundColor = "indigo"    //E
    gridChilds[34].style.backgroundColor = "indigo"    //E
    gridChilds[48].style.backgroundColor = "indigo"    //E
    gridChilds[64].style.backgroundColor = "indigo"    //E
    gridChilds[65].style.backgroundColor = "indigo"    //E
    gridChilds[66].style.backgroundColor = "indigo"    //E
    gridChilds[4].style.backgroundColor = "indigo"     //T
    gridChilds[5].style.backgroundColor = "indigo"     //T
    gridChilds[6].style.backgroundColor = "indigo"     //T
    gridChilds[21].style.backgroundColor = "indigo"    //T
    gridChilds[37].style.backgroundColor = "indigo"    //T
    gridChilds[53].style.backgroundColor = "indigo"    //T
    gridChilds[69].style.backgroundColor = "indigo"    //T
    gridChilds[8].style.backgroundColor = "indigo"     //C
    gridChilds[9].style.backgroundColor = "indigo"     //C
    gridChilds[10].style.backgroundColor = "indigo"    //C
    gridChilds[24].style.backgroundColor = "indigo"    //C
    gridChilds[40].style.backgroundColor = "indigo"    //C
    gridChilds[56].style.backgroundColor = "indigo"    //C
    gridChilds[72].style.backgroundColor = "indigo"    //C
    gridChilds[73].style.backgroundColor = "indigo"    //C
    gridChilds[74].style.backgroundColor = "indigo"    //C
    gridChilds[12].style.backgroundColor = "indigo"    //H
    gridChilds[28].style.backgroundColor = "indigo"    //H
    gridChilds[44].style.backgroundColor = "indigo"    //H
    gridChilds[60].style.backgroundColor = "indigo"    //H
    gridChilds[76].style.backgroundColor = "indigo"    //H
    gridChilds[45].style.backgroundColor = "indigo"    //H
    gridChilds[46].style.backgroundColor = "indigo"    //H
    gridChilds[47].style.backgroundColor = "indigo"    //H
    gridChilds[15].style.backgroundColor = "indigo"    //H
    gridChilds[31].style.backgroundColor = "indigo"    //H
    gridChilds[63].style.backgroundColor = "indigo"    //H
    gridChilds[79].style.backgroundColor = "indigo"    //H
    gridChilds[100].style.backgroundColor = "deeppink"   //A
    gridChilds[101].style.backgroundColor = "deeppink"   //A
    gridChilds[102].style.backgroundColor = "deeppink"   //A
    gridChilds[103].style.backgroundColor = "deeppink"   //A
    gridChilds[119].style.backgroundColor = "deeppink"   //A
    gridChilds[135].style.backgroundColor = "deeppink"   //A
    gridChilds[151].style.backgroundColor = "deeppink"   //A
    gridChilds[150].style.backgroundColor = "deeppink"   //A
    gridChilds[149].style.backgroundColor = "deeppink"   //A
    gridChilds[148].style.backgroundColor = "deeppink"   //A
    gridChilds[132].style.backgroundColor = "deeppink"   //A
    gridChilds[116].style.backgroundColor = "deeppink"   //A
    gridChilds[152].style.backgroundColor = "deeppink"   //A
    gridChilds[177].style.backgroundColor = "crimson"  //S
    gridChilds[176].style.backgroundColor = "crimson"  //S
    gridChilds[192].style.backgroundColor = "crimson"  //S
    gridChilds[208].style.backgroundColor = "crimson"  //S
    gridChilds[209].style.backgroundColor = "crimson"  //S
    gridChilds[225].style.backgroundColor = "crimson"  //S
    gridChilds[241].style.backgroundColor = "crimson"  //S
    gridChilds[240].style.backgroundColor = "crimson"  //S
    gridChilds[179].style.backgroundColor = "crimson"   //K
    gridChilds[195].style.backgroundColor = "crimson"   //K
    gridChilds[211].style.backgroundColor = "crimson"   //K
    gridChilds[227].style.backgroundColor = "crimson"   //K
    gridChilds[243].style.backgroundColor = "crimson"   //K
    gridChilds[181].style.backgroundColor = "crimson"   //K
    gridChilds[197].style.backgroundColor = "crimson"   //K
    gridChilds[212].style.backgroundColor = "crimson"   //K
    gridChilds[229].style.backgroundColor = "crimson"   //K
    gridChilds[245].style.backgroundColor = "crimson"   //K
    gridChilds[184].style.backgroundColor = "crimson"   //T
    gridChilds[185].style.backgroundColor = "crimson"   //T
    gridChilds[200].style.backgroundColor = "crimson"   //T
    gridChilds[216].style.backgroundColor = "crimson"   //T
    gridChilds[232].style.backgroundColor = "crimson"   //T
    gridChilds[248].style.backgroundColor = "crimson"   //T
    gridChilds[183].style.backgroundColor = "crimson"   //T
    gridChilds[202].style.backgroundColor = "crimson"   //C
    gridChilds[218].style.backgroundColor = "crimson"   //C
    gridChilds[234].style.backgroundColor = "crimson"   //C
    gridChilds[251].style.backgroundColor = "crimson"   //C
    gridChilds[252].style.backgroundColor = "crimson"   //C
    gridChilds[187].style.backgroundColor = "crimson"   //C
    gridChilds[188].style.backgroundColor = "crimson"   //C
    gridChilds[186].style.backgroundColor = "violet"   //C  EDGES (WITH T)
    gridChilds[250].style.backgroundColor = "violet"   //C  EDGES (WITH T)
    gridChilds[191].style.backgroundColor = "violet"   //H   
    gridChilds[207].style.backgroundColor = "violet"   //H   
    gridChilds[223].style.backgroundColor = "violet"   //H   
    gridChilds[239].style.backgroundColor = "violet"   //H
    gridChilds[189].style.backgroundColor = "violet"   //H   
    gridChilds[205].style.backgroundColor = "violet"   //H
    gridChilds[222].style.backgroundColor = "violet"   //H   
    gridChilds[221].style.backgroundColor = "violet"   //H
    gridChilds[237].style.backgroundColor = "violet"   //H
    gridChilds[253].style.backgroundColor = "violet"   //H
    gridChilds[255].style.backgroundColor = "violet"   //H
console.log(title)

// for (let i = 0; i < title.length; i++) {
//         title[i].style.backgroundColor = randomColor()
//     }



    // CO BRAKUJE:
    // 1. dodać opcję z stopniowym "zaczernianiem" kafelków
    // 2. dodać tytuł "Etch a sketch" na defaultowym gridzie
    
     
   