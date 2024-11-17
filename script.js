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

  if (prediction[0].probability.toFixed(2) > 0.7) {
    finalPredict.innerHTML = prediction[0].className;
  } 
  else if (prediction[1].probability.toFixed(2) > 0.7) {
    finalPredict.innerHTML = prediction[1].className;
  } 
  else if (prediction[2].probability.toFixed(2) > 0.7) {
    finalPredict.innerHTML = prediction[2].className;
  } 
  else if (prediction[3].probability.toFixed(2) > 0.7) {
    finalPredict.innerHTML = prediction[3].className;
  } 
  else if (prediction[4].probability.toFixed(2) > 0.7) {
    finalPredict.innerHTML = prediction[4].className;
  } 
  else if (prediction[5].probability.toFixed(2) > 0.7) {
    finalPredict.innerHTML = prediction[5].className;
  } 
  else if (prediction[6].probability.toFixed(2) > 0.7) {
    finalPredict.innerHTML = prediction[6].className;
  } 
  else if (prediction[7].probability.toFixed(2) > 0.7) {
    finalPredict.innerHTML = prediction[7].className;
  } 
  else if (prediction[8].probability.toFixed(2) > 0.7) {
    finalPredict.innerHTML = prediction[8].className;
  } 
  else if (prediction[9].probability.toFixed(2) > 0.7) {
    finalPredict.innerHTML = prediction[9].className;
  } 
  else if (prediction[10].probability.toFixed(2) > 0.7) {
    finalPredict.innerHTML = prediction[10].className;
  } 
  else if (prediction[11].probability.toFixed(2) > 0.7) {
    finalPredict.innerHTML = prediction[11].className;
  } 
  else if (prediction[12].probability.toFixed(2) > 0.7) {
    finalPredict.innerHTML = prediction[12].className;
  } 
  else if (prediction[13].probability.toFixed(2) > 0.7) {
    finalPredict.innerHTML = prediction[13].className;
  } 
  else if (prediction[14].probability.toFixed(2) > 0.7) {
    finalPredict.innerHTML = prediction[14].className;
  } 
  else if (prediction[15].probability.toFixed(2) > 0.7) {
    finalPredict.innerHTML = prediction[15].className;
  } 
  else if (prediction[16].probability.toFixed(2) > 0.7) {
    finalPredict.innerHTML = prediction[16].className;
  } 
  else if (prediction[17].probability.toFixed(2) > 0.7) {
    finalPredict.innerHTML = prediction[17].className;
  } 
  else if (prediction[18].probability.toFixed(2) > 0.7) {
    finalPredict.innerHTML = prediction[18].className;
  } 
  else if (prediction[19].probability.toFixed(2) > 0.7) {
    finalPredict.innerHTML = prediction[19].className;
  } 
  else if (prediction[20].probability.toFixed(2) > 0.7) {
    finalPredict.innerHTML = prediction[20].className;
  } 
  else if (prediction[21].probability.toFixed(2) > 0.7) {
    finalPredict.innerHTML = prediction[21].className;
  } 
  else if (prediction[22].probability.toFixed(2) > 0.7) {
    finalPredict.innerHTML = prediction[22].className;
  } 
  else if (prediction[23].probability.toFixed(2) > 0.7) {
    finalPredict.innerHTML = prediction[23].className;
  } 
  else if (prediction[24].probability.toFixed(2) > 0.7) {
    finalPredict.innerHTML = prediction[24].className;
  } 
  else if (prediction[25].probability.toFixed(2) > 0.7) {
    finalPredict.innerHTML = prediction[25].className;
  } 
  else if (prediction[26].probability.toFixed(2) > 0.7) {
    finalPredict.innerHTML = prediction[26].className;
  } 
  else if (prediction[27].probability.toFixed(2) > 0.7) {
    finalPredict.innerHTML = prediction[27].className;
  } 
}
