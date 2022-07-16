var doggy = "";
objects = [];
var status1 = "";
var color1 = "";
function preload(){
    img = loadImage("bottles.jpg");
}
function setup(){
    billi = createCanvas(380, 380);
    billi.center();
    veedeeyo = createCapture(VIDEO);
    veedeeyo.hide();
    veedeeyo.size(380, 380);
    noname = ml5.objectDetector('cocossd', modelnotLoaded);
    document.getElementById("status").innerHTML = "Status :- Detecting nothing";
}
function draw(){
    image(img, 0, 0, 380, 380);
    if(status1 == true){
        noname.detect(img, gotResults);
        for(i = 0; i < objects.length; i++){
            document.getElementById("status").innerHTML = "Status:- Object Detected";
            percentage = (objects[i].confidence.toFixed(3))*100;
            if((objects[i].confidence > 0) && (objects[i].confidence <= 0.3)){
                color1 = "red";
            }
            else if((objects[i].confidence > 0.3) && (objects[i].confidence <= 0.65)){
                color1 = "green";
            }
            else if((objects[i].confidence > 0.65) && (objects[i].confidence <= 1)){
                color1 = "blue";
            }
            stroke("white");
            fill("white");
            rect(objects[i].x, objects[i].y, (10 + (8 * (objects[i].label))));
            stroke(color1);
            fill(color1);
            text(objects[i].label);
            noFill();
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}
function modelnotLoaded(){
    console.log("Sorry, Model not loaded");
    status1 = true;
}
function gotResults(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects = results;
}