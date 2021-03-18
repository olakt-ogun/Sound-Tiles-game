
var clueHoldTime = 1000;
const cluePauseTime = 333;
const nextClueWaitTime = 1000;
var pattern = [3, 1, 5, 2, 4, 3, 5, 1, 4, 2];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.8;
var guesscount = 0;

function Start_game(){
    progress = 0;
    gamePlaying = true;
    document.getElementById("Start_button").classList.add("hidden");
    document.getElementById("Stop_button").classList.remove("hidden");
    playClueSequence();
}

function Stop_game(){
    gamePlaying = false;
    document.getElementById("Start_button").classList.remove("hidden");
    document.getElementById("Stop_button").classList.add("hidden");  
}

const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 420
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn) {document.getElementById("tile" + btn).classList.add("lit")}

function clearButton(btn) {document.getElementById("tile" + btn).classList.remove("lit")}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guesscount = 0;
  let delay = nextClueWaitTime; 
  for(let i=0;i<=progress;i++){ 
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
    clueHoldTime -= 43;
  }
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
   if(pattern[guesscount] == btn){
    if(guesscount == progress){
      if(progress == pattern.length - 1) {Win_game();}
      else{
        progress++;
        playClueSequence();
      }
    }else{
      guesscount++;
    }
  }else{
    lose_game();
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
