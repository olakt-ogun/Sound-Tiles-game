var clueHoldTime = 1000;
const clueHoldTime1 = 1000;
const cluePauseTime = 333;
const nextClueWaitTime = 1000;
var pattern = [];
var progress = 0; 
var gamePlaying = false;
var Play_tone = false;
var volume = 0.8;
var guesscount = 0;
var mistakes = 0;
var loop= 0;

function rand_pattern(){
  pattern = []
  for (loop = 0; loop < 8; loop++) {
  pattern.push (Math.floor(Math.random() * (6 - 1) + 1));
  }
}


function Start_game(){
    progress = 0;
    mistakes = 0;
    rand_pattern();
    gamePlaying = true;
    document.getElementById("Start_button").classList.add("hidden");
    document.getElementById("Stop_button").classList.remove("hidden");
    Sound_sequence();
}

function Stop_game(){
    gamePlaying = false;
    document.getElementById("Start_button").classList.remove("hidden");
    document.getElementById("Stop_button").classList.add("hidden");  
}

const Sounds = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 420,
  6: 295.7
}
function playTone(tile,len){ 
  o.frequency.value = Sounds[tile]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  Play_tone = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(tile){
  if(!Play_tone){
    o.frequency.value = Sounds[tile]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    Play_tone = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    Play_tone = false
}

var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(tile) {document.getElementById("tile" + tile).classList.add("lit")}

function clearButton(tile) {document.getElementById("tile" + tile).classList.remove("lit")}

function playSingleClue(tile){
  if(gamePlaying){
    lightButton(tile);
    playTone(tile,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,tile);
  }
}

function Sound_sequence(){
  guesscount = 0;
  let delay = nextClueWaitTime; 
  for(let i=0;i<=progress;i++){ 
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime1 
    delay += cluePauseTime;
    clueHoldTime -= 14;
  }
}

function guess(tile){
  console.log("user guessed: " + tile);
  if(!gamePlaying){
    return;
  }
   if(pattern[guesscount] == tile){
    if(guesscount == progress){
      if(progress == pattern.length - 1) {Win_game();}
      else{
        progress++;
        Sound_sequence();
      }
    }else{
      guesscount++;
    }
  }else{
    mistakes +=1
    Sound_sequence();
    if (mistakes == 3){
    lose_game();
    }
  }
}

function lose_game(){
  Stop_game();
  alert("Game Over. You lost.");
}

function Win_game(){
  Stop_game();
  alert("Congratulations!!!. You Won!!");
}
