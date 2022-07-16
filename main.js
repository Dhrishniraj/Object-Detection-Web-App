var doggy = "";
var status1 = "";
function preload(){
    doggy = loadImage("dog_cat.jpg");
}
function setup(){
    billi = createCanvas(640, 420);
    billi.position(((screen.width - 640) / 2), 200);
    noname = ml5.objectDetector('cocossd', modelnotLoaded);
    document.getElementById("no_status").innerHTML = "Status :- Detecting nothing";
}
function draw(){
    image(doggy, 0, 0, 600, 400);
    fill("orange");
    rect(45, 60, 80, 30);
    fill("white");
    text("Doggy", 45, 75);
    textSize(20);
    noFill();
    stroke("orange");
    strokeWeight(3);
    rect(45, 50, 450, 350);
}
function modelnotLoaded(){
    console.log("Sorry, Model not loaded");
    status1 = true;
    noname.detect(doggy, gotResults);
}
function gotResults(error, results){
    if(error){
        console.error(error);
    }
    console.log(results);
}