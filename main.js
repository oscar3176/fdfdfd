
function preload() {

}

function setup() {
    canvas = createCanvas(550, 550);
    canvas.position(700,150);

    video = createCapture(VIDEO);
    video.size(550, 550);

    poseNet = ml5.poseNet(video, ModelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw() {

    background("#222222");

}

function ModelLoaded() {
    console.log("Posenet Is Initialized.");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
    }
}