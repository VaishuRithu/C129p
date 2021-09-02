 song1 = "";
 song2 ="";
 leftWristX = 0;
 leftWristY = 0;
 rightWristX = 0;
 rightWristY = 0;
 scoreLeftWrist = 0;
 scoreRightWrist = 0;
 var ply;

 function preload(){
    song1 = loadSound("invisible.mp3");
    song2 = loadSound("dontletmedown.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

    ply = song1.isPlaying();
    console.log(ply);

    song1.play();
}

function modelLoaded() {
    console.log("Model Loaded!");
}

function draw() {
    image(video, 0, 0, 600, 500);

    ply = song1.isPlaying();
    console.log(ply);

    

    song1.play();

    fill("#FF0000");
    stroke("#FF0000");

    if(scoreLeftWrist > 0.2)
    {
        circle(rightWristX, rightWristY, 20);

        song2.stop();

        if(ply = false){
            
            song1.play();

            document.getElementById("song-name").innerHTML = "Invisible By Julius Dreisig and Zeus X Crona";

        }
    }
}

function gotPoses(results){
    if (results.length > 0)
    {
        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist = " + scoreLeftWrist);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);
        
    }
}

function isPlaying() 
{
    song.isPlaying();
}
