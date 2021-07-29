objects=[];
status="";

function preload(){
}

function setup(){
    canvas=createCanvas(480,380)
    canvas.center()
    video=createCapture(VIDEO)
    video.size(480,380)
video.hide()
objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="status:detecting objects";
}

function modelLoaded(){
    console.log("modelLoaded");
    status=true;
}

function gotResult(error,results){
    if(error){
        console.log(error)
    }
console.log(results);
objects=results
}

function draw(){
    image(video,0,0,480,380)
    if(status!=""){
        objectDetector.detect(video,gotResult);
        for(i=0;i<objects.length;i++){
            document.getElementById("status").innerHTML="status:objectDetected";
            document.getElementById("Number_of_objects").innerHTML="number of objects detected are:"
        +objects.length;
        fill("blue");
        persent=floor(objects[i].confidence*100);
        text(objects[i].label+" "+persent+"%",objects[i].x+15,objects[i].y+15)
        noFill()
        stroke("blue")
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height)
        if(objects[i].label="person"){
            document.getElementById("Number_of_objects").innerHTML="baby found"
            if(objects[i].label="person"){
                document.getElementById("Number_of_objects").innerHTML="baby found"
                
            }
            else{
                document.getElementById("Number_of_objects").innerHTML="baby not found"  
            }
        }
        if(objects.length=0){
            document.getElementById("Number_of_objects").innerHTML="baby not found"
        }
        }
    }
}