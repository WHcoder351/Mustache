noseX = 0;
noseX = 0;
function preload(){
Hair = loadImage('https://i.postimg.cc/QdspVc13/Beard-mustache.png');
}
function setup() {
    canvas = createCanvas(410, 310);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(320, 320);
    video.hide();
    Pose = ml5.poseNet(video, mL);
    Pose.on('pose', Gotposes);
}
function Gotposes(results) {
    if (results.length > 0) {
        console.log(results);
        console.log("nose x is " + results[0].pose.nose.x);
        console.log("nose y is " + results[0].pose.nose.y);
        noseX = results[0].pose.nose.x-15;
        noseY = results[0].pose.nose.y-15;
    }
}
function draw() {
    image(video, 0, 0, 420, 320);  
    image(Hair, noseX, noseY,50,50);
}

function mL() {
    console.log("PoseNet has Started"); 
}

function snap() {
    save('MyMustache-Image.png');
}