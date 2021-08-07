let col_1;
let sound, img;

function preload(){
  sound = loadSound('3.mp3');
  img = loadImage('bg1.jpg');
}

function setup() {

					
  //other game functionality 
  
  col_1 = color(2, 150, 2);
  let col_7 = color(232, 93, 0,200);
  let col_8 = color(2, 217, 2);
  let col_9 = color(201, 140, 255);
  let col_10 = color(0,0,0,0);
  
  createCanvas(windowWidth, windowHeight);
	
	//sentence
	
	let sentence = createP('It’s great to sing karaoke alone in my living room, except for when I can hear my neighbor’s rock music. He also won’t clean up all the dove shit.  ');
	sentence.position(width/4,height/2);
	sentence.style('color','white');
	sentence.style('font-family','Helvetica');
	sentence.style('font-size','2em');
  
  let guess = createInput('');
  guess.position(width/12,height/12);
  guess.style('background-color','black');
  guess.style('font-family','Monaco');
  guess.style('color',col_9);
  
  let guess_button = createButton('checK');
  guess_button.position(guess.x+width/5,guess.y+height/200);
  
  guess_button.style('background-color','white');
  
  guess_button.mousePressed(checkMessage);
  
   guess_button.style('color',col_7);
  
   let check_message = createP('');
  check_message.position(guess.x,guess.y+height/10);

check_message.style('font-size','1em');
  
  check_message.style('font-family','Monaco');
  
    check_message.style('color',col_9);
  
  let auditory_task = createP('lnaciqesueinnot');
  
  auditory_task.position(width/2,height/2);
  
  auditory_task.style('color',col_10);
  
  let hint_button = createButton('Play hint...');
  hint_button.position(3*width/4,3*height/4);
  hint_button.mousePressed(playSound);
  
  function checkMessage (){
   if(/inconsequential/i.test(guess.value())==true){
    check_message.html('Yes!');
    }else{
      check_message.html('No! I also bet that you\'ve never had neon purple belly button lint.');
    }
    
  }
  
  function playSound (){
  if(!sound.isPlaying()){
    sound.play();
    sound.jump(195);
    hint_button.html('Discontinue hint!');
  }else{
    sound.stop();
    hint_button.html('Play hint...');
  }

}
//clock 
 function displayClock() {
    let h = hour();
    let m = minute();
	 	let offset = floor(random(6));
    let c = createElement("time", abs(h-offset) + ":" + (m+offset));
    c.style("color", "rgba(220,220,220,5)");
    c.style("font-family", "Monaco");
    c.position(random(width), random(height));
    if (m < 10) {
      c.html(
        abs(h-offset) + ":0" +(m+offset),
        0,
        random(200),
        random(400)
      );
    } else {
      c.html(
        abs(h-offset) + ":" + (m+offset),
        0,
        random(200),
        random(400)
      );
    }
    setInterval(displayClock, 60000);
  }

  displayClock();
}


function draw() {
 
  //set up the game stuffs
  
  background(img);
  let col_2 = color(238, 252, 194);
  let col_3 = color(226, 194, 255);
  let col_4 = lerpColor(col_2,col_3,sin(millis()/2000));
  let col_5= color(255, 166, 0);
  let col_6 = color(191, 255, 0);
  

  
  let letters = ['i','n','c','o','n','s','e','q','u','e','n','t','i','a','l'];
  
  push();
	let ll = letters.length;
  for(let i=0;i<ll;i++){ 
    fill(col_4);
    textFont('Courier');
    textSize(random(12,14));
    text(letters[i],random(width),random(height));
  }
  pop();
  
  push();
  
  fill(col_6);
  ellipse(random(width),random(height),10,10); 
  pop();
}

function windowResized (){  resizeCanvas(windowWidth,windowHeight);
background(col_1);
}
