prediction="";

Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
})

camera = document.getElementById("camera")

Webcam.attach('#camera')

function take_snapshot(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = '<img id="captured_img" src="'+data_uri+'"/>';
    })
}

console.log('mls version:',ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/6F841zc97/model.json',modelLoaded);

function modelLoaded(){
    console.log('Model Loaded');
}
function speak(){
    var synth = window.speechSynthessis;
    speak_data_1 ="the first predicthion is" + prediction;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1);
    synth.speak(utterThis);
}