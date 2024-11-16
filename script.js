//edit path link
const URL = "model/";

let isRunning = false; // Track the state of the process
let model, webcam, labelContainer, maxPredictions;

/* Project breakdown to code this web app
 *
 * 1. Load the model and metadata urls and initializes TensorFlow model OBJECT (Subject)/ Use TensorFlow.js
 * 2. Setup the webcam
 * 3. Append the webcam to the DOM
 * 4. Predict the webcam image
 * 5. Determine the highest probability
 * 6. Display the highest probability
 * 7. Loop the prediction
 * 8. Update the webcam frame
 * 9. Request the webcam frame
 * 10. Display the class labels
 * 11. Run algrothim on class predictions and display the highest probability
 * 
 */

// Load the image model and setup the webcam
async function init() {

  // If the process is running, stop it on click again
  if (isRunning) {
    stopProcess();
    return; //Won't excute the rest of the code
  }

  isRunning = true;
  document.querySelector('.fancy-button').innerHTML = "Stop";

  const modelURL = URL + "model.json";
  const metadataURL = URL + "metadata.json";

  // load the model and metadata from urls into TensorFlow model
  model = await tmImage.load(modelURL, metadataURL); //initializes ai model OBJECT
  maxPredictions = model.getTotalClasses(); //total number of classes(sibjects) from techable machine ai model

  // TensorFlow built in function to setup a webcam
  const flip = true; // whether to flip the webcam
  webcam = new tmImage.Webcam(300, 300, flip); // width, height, flip
  await webcam.setup(); // request access to the webcam
  await webcam.play(); //plays webcam once approved
  window.requestAnimationFrame(loop); //calls loop function to loop the prediction and frame

  // append webcam elements to the DOM
  document.getElementById("webcam-container").appendChild(webcam.canvas);

  // append class predictions to the DOM
  labelContainer = document.getElementById("label-container");
  for (let i = 0; i < maxPredictions; i++) {
    // class labels div added. DATA ADDED LATER
    labelContainer.appendChild(document.createElement("div"));
  }
}

// Stop the process and clears the webcam. sets to original state
function stopProcess() {
  isRunning = false;
  document.querySelector('.fancy-button').innerHTML = "Start";
  if (webcam) {
    webcam.stop(); // Stop the webcam
    document.getElementById("webcam-container").innerHTML = ""; // Clear the webcam container
  }
  if (labelContainer) {
    labelContainer.innerHTML = ""; // Clear the label container
  }
}

// loop the webcam frame and prediction
async function loop() {
  if (!isRunning) return;
  webcam.update(); // update the webcam frame
  await predict(); //calls predict function and runs the webcam image through the image model
  window.requestAnimationFrame(loop);
}

// run the webcam image through the image model
async function predict() {
  // predict can take in an image, video or canvas html element
  const prediction = await model.predict(webcam.canvas); //Commented out for loop so that probabiliy is not printed out
  // for (let i = 0; i < maxPredictions; i++) {
  //   const classPrediction =
  //     prediction[i].className + ": " + prediction[i].probability.toFixed(2);
  //   labelContainer.childNodes[i].innerHTML = classPrediction;
  // }

  const finalPredict = document.querySelector(".highest-prob");

  //The algrothim to determine the highest probability
  



  //TODO: Add all 26 letters once model is developed
  if (prediction[1].probability.toFixed(2) > 0.7) {
    finalPredict.innerHTML = prediction[1].className;
  } else  {
    finalPredict.innerHTML = "No Sign Detected";
  }
}
