var splashimg
var gameState = "wait"
var playbutton, soundonbutton, soundoffbutton

function preload() {
    splashimg = loadImage("Rumble_runner.gif")
    bgSound = loadSound("bgMusic.mp3")


}

function setup() {
createCanvas(windowWidth, windowHeight)

    playbutton = createImg("play.png")
    playbutton.position(width / 2 - 150, height - height / 5)
    playbutton.size(150, 150)

   

    soundonbutton = createImg("soundon.png")
    soundonbutton.position(playbutton.x+ 150, playbutton.y+15)
    soundonbutton.size(150, 115)
    soundonbutton.mouseClicked(mute)
    // soundonbutton.hide()


    soundoffbutton = createImg("sounoff.png")
    soundoffbutton.position(playbutton.x+ 150, playbutton.y+10)
    soundoffbutton.size(120, 125)
    soundoffbutton.hide()
    soundoffbutton.mouseClicked(mute)

    bgSound.play()


}
function draw() {

    if (gameState === "wait") {
        if (!bgSound.isPlaying) {
            bgSound.play()
        }
        background(splashimg)
    }
}


function mute() {
    if (bgSound.isPlaying()) {
        bgSound.stop();
        soundoffbutton.show();
        soundonbutton.hide();
        console.log("mute")
    }
    else {
        soundonbutton.show()
        soundoffbutton.hide();
        bgSound.play();
        console.log("unmute")
    }
}