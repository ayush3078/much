function preload() {
    clown_nose=loadImage('https://i.postimg.cc/xT87Q1bf/m.png');

    leftEye=loadImage('https://i.postimg.cc/HkxJKWdk/Nice-Png-joint-png-257257.png')
}

function setup() {
    var canvas=createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    posenet = ml5.poseNet(video, modelLoded);
    posenet.on('pose', gotPoses); 
}

noseX=0;
noseY=0;

leftEyeX=0;
leftEyeY=0;

rightEyeX=0;
rightEyeY=0;



function gotPoses(results) 
{ if (results.length > 0)
{
    console.log(results);
    noseX=results[0].pose.nose.x - 18;
    noseY=results[0].pose.nose.y - 14;
    console.log("nose x = "+ noseX);
    console.log("nose y = "+ noseY);
    
    leftEyeX=results[0].pose.leftEye.x - 55;
    leftEyeY=results[0].pose.leftEye.y - 20;
    console.log("leftEye x = "+ leftEyeX);
    console.log("leftEye y = "+ leftEyeY);
    
    rightEyeX=results[0].pose.rightEye.x;
    rightEyeY=results[0].pose.rightEye.y;
    console.log("rightEye x = "+  rightEyeX);
    console.log("rightEye y = "+  rightEyeY);
}
}

function modelLoded() {
    console.log("ML5 IS WORKING");
}

function draw() {
    image(video, 0, 0, 300, 300);
   
    
    image(clown_nose, noseX, noseY, 40, 40);

   //image(leftEye, leftEyeX, leftEyeY, 80, 40);
}


function snap() {
    save('image.png');
}