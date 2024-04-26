let x=0;
let y=0;

let xspeed;
let yspeed;

let ricardo;

let isPlaying = false

function all() {
    console.log("starting animation")
    setup();
    draw();
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

function stopPlaying() {
    isPlaying = false
}

async function setup() {
    isPlaying = true

    xspeed = 10;
    yspeed = 10;
    let image = document.getElementById("img")
    image.style.position = "absolute"
    while(isPlaying) {
        console.log(xspeed)
        if (x>500 && y>500) {
            xspeed = -xspeed
            yspeed = -yspeed
        } else if (x<0 && y<0) {
            xspeed = -xspeed
            yspeed = -yspeed
        }

        x+=xspeed
        y+=yspeed
        image.style.left= x+ "px"
        image.style.top= y+ "px"
        await sleep(100);
    }
}

// function draw(){
//     background(2,2,2)
//     image(ricardo, x, y ,80, 60); 

//     x = x + xspeed;
//     y = y + yspeed;

//     if (x + 80 ===width || x===0) {
//         xspeed = xspeed * -1;
//     }
    

//     if (y + 60 === height) {
//         yspeed = yspeed * -1;
//     }
// } 