let shapeClassifier;

function setup() {
  createCanvas(32, 32);
  const IMAGE_WIDTH = 64;
  const IMAGE_HEIGHT = 64;
  const IMAGE_CHANNELS = 4;
  const options = {
    task: "imageClassification",
    inputs: [IMAGE_WIDTH, IMAGE_HEIGHT, IMAGE_CHANNELS],
  };

  shapeClassifier = ml5.neuralNetwork(options);

  const modelInfo = {
    model: "model/model.json",
    metadata: "model/model_meta.json",
    weights: "model/model.weights.bin",
  };
  shapeClassifier.load(modelInfo, modelLoadedCallback);
}

function modelLoadedCallback(data) {
  console.log(data);
  console.log("model loaded");
}

function mousePressed() {
  shapeClassifier.classify({ image: canvas }, getResult);
}

function getResult(err, result) {
  if (err) {
    createDiv("something went wrong see console.");
    console.log(err);
    return;
  }
  
  console.log(result);
  createDiv(result[0].label + ":" + (result[0].confidence * 100).toFixed(2));
}

function draw() {
  background(255);
  stroke(0);
  noFill();
  strokeWeight(2);
  //circle(10, 20, 10);
  square(10, 20, 10);
}
