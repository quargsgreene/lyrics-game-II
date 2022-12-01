let sound;
let img;

function preload() {
  sound = loadSound('Quarter-Life-Crisis-Vocal.mp3');
  img = loadImage('backgroundImage.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // other game functionality
  // sentence
  const sentence = createP('It’s great to sing karaoke alone in my living room,\ except for when I can hear my neighbor’s rock music.\ He also won’t clean up all the dove shit.  ');
  sentence.position(width / 4, height / 2);
  sentence.class('sentence');

  const guess = createInput('');
  guess.position(width / 12, height / 12);
  guess.class('input');

  const guessButton = createButton('checK');
  guessButton.position(guess.x + width / 5, guess.y + height / 200);
  guessButton.class('guess-button');
  guessButton.mousePressed(checkMessage);

  const checkMessageContainer = createP('');
  checkMessageContainer.position(guess.x, guess.y + height / 10);
  checkMessageContainer.class('input');

  const auditoryTask = createP('lnaciqesueinnot');
  auditoryTask.position(width / 2, height / 2);

  const hintButton = createButton('Play hint...');
  hintButton.position((3 * width) / 4, (3 * height) / 4);
  hintButton.mousePressed(playSound);
  function checkMessage() {
    if (/inconsequential/i.test(guess.value()) === true) {
      checkMessageContainer.html('Yes!');
    } else {
      checkMessageContainer.html('No! I also bet that you\'ve never had neon purple belly button lint.');
    }
  }

  function playSound() {
    if (!sound.isPlaying()) {
      sound.play();
      sound.jump(195);
      hintButton.html('Discontinue hint!');
    } else {
      sound.stop();
      hintButton.html('Play hint...');
    }
  }
  // clock
  function displayClock() {
    const hours = hour();
    const minutes = minute();
    const offset = floor(random(6));
    const clock = createElement('time', `${abs(hours - offset)}:${minutes + offset}`);
    clock.class('clock');
    clock.position(random(width), random(height));
    if (minutes < 10) {
      clock.html(
        `${abs(hours - offset)}:0${minutes + offset}`,
        0,
        random(200),
        random(400),
      );
    } else {
      clock.html(
        `${abs(hours - offset)}:${minutes + offset}`,
        0,
        random(200),
        random(400),
      );
    }
    setInterval(displayClock, 60000);
  }
  displayClock();
}

function draw() {
  // set up the game stuff
  background(img);
  const from = color(238, 252, 194);
  const to = color(226, 194, 255);
  const scrambledletterColor = lerpColor(from, to, sin(millis() / 2000));
  const movingBallColor = color(191, 255, 0);

  const letters = ['i', 'n', 'c', 'o', 'n', 's', 'e', 'q', 'u', 'e', 'n', 't', 'i', 'a', 'l'];

  push();
  for (let i = 0; i < letters.length; i++) {
    fill(scrambledletterColor);
    textFont('Courier');
    textSize(random(12, 14));
    text(letters[i], random(width), random(height));
  }
  pop();

  push();
  fill(movingBallColor);
  ellipse(random(width), random(height), 10, 10);
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
