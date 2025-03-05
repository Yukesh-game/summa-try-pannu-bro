let attempts = 0;
const maxAttempts = 4;
let blinkingInterval;

function checkCode() {
  const userInput = document.getElementById("userInput").value.toLowerCase(); // Convert to lowercase
  const messageElement = document.getElementById("message");
  const body = document.body;

  // Blink lights if the user has remaining attempts
  if (attempts < maxAttempts) {
    attempts++;
    blinkLights(attempts);
  }

  // Check if input is 'apple' (case-insensitive)
  if (userInput === "apple") {
    messageElement.textContent = "vaai erutha oombu";
    messageElement.style.color = "green";
    clearInterval(blinkingInterval);
    resetLights();
  } else if (attempts < maxAttempts) {
    messageElement.textContent = `Attempt ${attempts} failed! Try again.`;
    messageElement.style.color = "red";
  } else {
    // If the user fails all 4 attempts
    body.style.backgroundColor = "black";
    messageElement.textContent = "Ne Laam Oomba Tha Laiku";
    messageElement.style.color = "red";
    clearInterval(blinkingInterval);
    resetLights();
    document.getElementById("restartButton").style.display = "inline-block"; // Show restart button
  }
}

function blinkLights(attemptNumber) {
  const colors = ["green", "yellow", "orange", "red"];
  let i = 0;

  // Create the blinking lights at corners
  const topLeft = createBlinkingLight("top-left", colors[0]);
  const topRight = createBlinkingLight("top-right", colors[1]);
  const bottomLeft = createBlinkingLight("bottom-left", colors[2]);
  const bottomRight = createBlinkingLight("bottom-right", colors[3]);

  // Set interval to blink lights
  blinkingInterval = setInterval(() => {
    topLeft.style.borderColor = colors[i % 4];
    topRight.style.borderColor = colors[(i + 1) % 4];
    bottomLeft.style.borderColor = colors[(i + 2) % 4];
    bottomRight.style.borderColor = colors[(i + 3) % 4];
    i++;
  }, 100);

  // Set timeout to stop blinking after 4 cycles
  setTimeout(() => {
    clearInterval(blinkingInterval);
    resetLights();
  }, 400); // Blink for 0.4 seconds
}

function createBlinkingLight(positionClass, color) {
  const light = document.createElement("div");
  light.classList.add("blinking", positionClass);
  light.style.borderColor = color;
  document.body.appendChild(light);
  return light;
}

function resetLights() {
  // Remove all blinking lights
  const blinkingLights = document.querySelectorAll(".blinking");
  blinkingLights.forEach((light) => light.remove());
}

function restartGame() {
  // Reset the attempts and the background color
  attempts = 0;
  document.body.style.backgroundColor = "#f0f0f0"; // Reset to original background color
  document.getElementById("userInput").value = ""; // Clear input field
  document.getElementById("message").textContent = ""; // Clear message
  document.getElementById("restartButton").style.display = "none"; // Hide the restart button
}
// Add these lines in your checkCode function
if (userInput === "apple") {
  // ...
  document.getElementById("userInput").classList.remove("incorrect");
  document.getElementById("userInput").classList.add("correct");
} else {
  // ...
  document.getElementById("userInput").classList.remove("correct");
  document.getElementById("userInput").classList.add("incorrect");
}
// Add these lines in your checkCode function
const correctSound = document.getElementById("correctSound");
const incorrectSound = document.getElementById("incorrectSound");

if (userInput === "apple") {
  // ...
  correctSound.play();
} else {
  // ...
  incorrectSound.play();
}
