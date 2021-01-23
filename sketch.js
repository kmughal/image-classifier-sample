const circles = [];
const triangles = [];
const squares = [];
let shapeClassifier;
const upperBound = 90;

function setup() {
  createCanvas(400, 400);
  loadData();
  setTimeout(() => {
    console.log("starting building model");
    buildModel();
  }, 1000);
}

function buildModel() {
  const IMAGE_WIDTH = 64;
  const IMAGE_HEIGHT = 64;
  const IMAGE_CHANNELS = 4;
  const options = {
    task: "imageClassification",
    inputs: [IMAGE_WIDTH, IMAGE_HEIGHT, IMAGE_CHANNELS],
    debug: true,
  };

  shapeClassifier = ml5.neuralNetwork(options);
 
  for (let i = 0; i < circles.length; i++) {
    shapeClassifier.addData({ image: circles[i] }, { label: "circle" });
    shapeClassifier.addData({ image: squares[i] }, { label: "square" });
  //  shapeClassifier.addData({ image: triangles[i] }, { label: "triangle" });
  }
  console.log("data added to the classifier");
  shapeClassifier.normalizeData();

  console.log("starting training ...");
  shapeClassifier.train({ epochs: 50 }, (_) => {
    console.log("training done");
    shapeClassifier.save();
  });
}

const root = "assets";
function loadData() {
  for (let i = 0; i < upperBound; i++) {
    circles.push(loadImage(`${root}/circles/circle-${i}.png`));
    squares.push(loadImage(`${root}/squares/square-${i}.png`));
    triangles.push(loadImage(`${root}/triangles/triangle-${i}.png`));
  }
  console.log(circles.length, squares.length, triangles.length);
}

function draw() {
  background(220);
  image(circles[0], 0, 0);
}
