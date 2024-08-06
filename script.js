//game constants
let inputDir = {x: 0,y: 0};
const foodSound = new Audio('food.mp3');
const gameOver = new Audio('gameover.mp3');
const moveSound = new Audio('directions.mp3');
const musicSound = new Audio('bgmusic.mp3');
let speed=8;
let lastPaintTime = 0;
let snakeArr = [{x : 13 , y : 15}
]   
let food = {x : 3 , y : 3};
// game function

//looped animation for the game
function main(ctime){
    window.requestAnimationFrame(main);
    musicSound.play();
    // console.log(ctime)
    if((ctime-lastPaintTime)/1000<1/speed){
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
}

function isCollide(snake){
    //if you bump into yourself
    for(let i = 1;i<snakeArr.length;i++){
        if(snake[i].x===snake[0].x && snake[i].y===snake[0].y){
            return true;
        }
    }
        //if you bump into wall
        if(snake[0].x>=18 || snake[0].x<=0 || snake[0].y>=18 || snake[0].y<=0){
            return true;
        }
}

function gameEngine(){

    //if snake eaten the food increment the score and regenerate the food
    if(snakeArr[0].y === food.y && snakeArr[0].x === food.x){
        foodSound.play();
        score+=1;
        scoreBox.innerHTML = "score :" +score;
        snakeArr.unshift({x:snakeArr[0].x+inputDir.x,y:snakeArr[0].y+inputDir.y});
        let a= 2;
        let b = 16;
        food = {x:Math.round(a+(b-a)* Math.random()),y:Math.round(a+(b-a)* Math.random())}
    }
    //if the snake collide
    if(isCollide(snakeArr)){
        gameOver.play();
        musicSound.pause();
        inputDir = {x: 0,y: 0};
        alert("The game is over. Press Enter to play again!!!")
        snakeArr = [{x : 13 , y : 15}];
        musicSound.play();
        score =0;
    }

    
        //move the snake 
    for(let i = snakeArr.length-2;i>=0; i--){
        
        snakeArr[i+1] = {...snakeArr[i]};
    }
        snakeArr[0].x +=inputDir.x; 
        snakeArr[0].y +=inputDir.y;

    // part 1 display the snake and food 
    board.innerHTML = ""; 
    snakeArr.forEach((e,index)=>{
        snakeElement = document.createElement('div');       
        snakeElement.style.gridRowStart =  e.y; 
        snakeElement.style.gridColumnStart = e.x;
       
        if(index ===0){

            snakeElement.classList.add('head');
        }
        else{
            snakeElement.classList.add('snake');
        }
        

        board.appendChild(snakeElement);
    })
        foodElement = document.createElement('div');
        foodElement.style.gridRowStart =  food.y; 
        foodElement.style.gridColumnStart = food.x;
        foodElement.classList.add('food');
        board.appendChild(foodElement);

    // part 2 : update the snake array and food



}





//main logic 
window.requestAnimationFrame(main);
window.addEventListener('keydown',e=>{
    inputDir ={x:0,y:1}//the game will start on any clicking event
    moveSound.play();
    switch(e.key){
        case 'ArrowUp':
            console.log("ArrowUp")
            inputDir.x= 0;
            inputDir.y = -1;
            break;
        case 'ArrowDown':
            console.log("ArrowDown")
            inputDir.x= 0;
            inputDir.y = 1;
            break;
        case 'ArrowLeft':
            console.log("ArrowLeft")
            inputDir.x= -1;
            inputDir.y = 0;
            break;
        case 'ArrowRight':
            console.log("ArrowRight")
            inputDir.x= 1;
            inputDir.y = 0;
            default:
            break;

    }


})