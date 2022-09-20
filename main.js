//https://teachablemachine.withgoogle.com/models/IeH4i69Ic/

Webcam.set({
    width: 340,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function takeSnapshot() {
    Webcam.snap(function(data_uri) { document.getElementById("result").innerHTML = '<img id = "captured_image" src = "' + data_uri + '">'; });

}

console.log('ML5 Version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/IeH4i69Ic/model.json', modelLoaded);

function modelLoaded() {
    console.log('Model loaded');
}

function check() {
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = (results[0].confidence.toFixed(3) * 100) + "%";
    }
}