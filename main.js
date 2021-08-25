function setup(){
video = createCapture(VIDEO);
video.size(550,550);
video.position(100,400);
canvas = createCanvas(550,500);
canvas.position(700,400);
poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function draw(){
    background('#808080');
}

function modelLoaded(){
    console.log('PoseNet is intialized!')
}

function gotPoses(results){
if(results.length > 0){
    console.log(results);
}
}