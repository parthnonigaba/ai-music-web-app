song1 = "";
song2 = "";

function preload(){
    song1 = "https://open.spotify.com/track/1BCtK8dvweYnIB37Ld7vS9?si=53c2013658e5485a"
    song2 = "https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.1/addons/p5.sound.min.js"
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0,0, 600, 500);
}

function play(){
    song.play()

}