let attempts = 0;
const maxAttempts = 4;

function checkCode() {
  const userInput = document.getElementById("userInput").value.toLowerCase(); // Convert to lowercase
  const messageElement = document.getElementById("message");
  const body = document.body;
  const correctSound = document.getElementById("correctSound");
  const incorrectSound = document.getElementById("incorrectSound");

  // Remove blinking lights immediately
  resetLights();

  // Check if input is 'apple' (case-insensitive)
  if (userInput === "apple") {
    messageElement.textContent = "vaai erutha oombu";
    messageElement.style.color = "green";
    document.getElementById("userInput").classList.remove("incorrect");
    document.getElementById("userInput").classList.add("correct");

    correctSound.play(); // Play success sound
  } else {
    attempts++;

    if (attempts < maxAttempts) {
      messageElement.textContent = Attempt ${attempts} failed! Try again.;
      messageElement.style.color = "red";
    } else {
      body.style.backgroundColor = "black";
      messageElement.textContent = "Ne Laam Oomba Tha Laiku";
      messageElement.style.color = "red";
      document.getElementById("restartButton").style.display = "inline-block"; // Show restart button
    }

    document.getElementById("userInput").classList.remove("correct");
    document.getElementById("userInput").classList.add("incorrect");

    incorrectSound.play(); // Play failure sound
  }
}

function resetLights() {
  // Remove all blinking lights
  const blinkingLights = document.querySelectorAll(".blinking");
  blinkingLights.forEach((light) => light.remove());
}

function restartGame() {
  attempts = 0;
  document.body.style.backgroundColor = "#f0f0f0"; // Reset background color
  document.getElementById("userInput").value = ""; // Clear input field
  document.getElementById("message").textContent = ""; // Clear message
  document.getElementById("restartButton").style.display = "none"; // Hide restart button
  document.getElementById("userInput").classList.remove("correct", "incorrect"); // Reset input box style
}
function playSound(audioElement) {
    audioElement.currentTime = 0; // Reset audio to start
    audioElement.play().catch(error => console.error("Audio play failed:", error));
}

function checkCode() {
    const userInput = document.getElementById("userInput").value.toLowerCase();
    const messageElement = document.getElementById("message");
    const body = document.body;
    const correctSound = document.getElementById("correctSound");
    const incorrectSound = document.getElementById("incorrectSound");

    resetLights();

    if (userInput === "apple") {
        messageElement.textContent = "vaai erutha oombu";
        messageElement.style.color = "green";
        document.getElementById("userInput").classList.remove("incorrect");
        document.getElementById("userInput").classList.add("correct");

        playSound(correctSound); // Play success sound
    } else {
        attempts++;
        if (attempts < maxAttempts) {
            messageElement.textContent = Attempt ${attempts} failed! Try again.;
            messageElement.style.color = "red";
        } else {
            body.style.backgroundColor = "black";
            messageElement.textContent = "Ne Laam Oomba Tha Laiku";
            messageElement.style.color = "red";
            document.getElementById("restartButton").style.display = "inline-block";
        }

        document.getElementById("userInput").classList.remove("correct");
        document.getElementById("userInput").classList.add("incorrect");

        playSound(incorrectSound); // Play failure sound
    }
}
