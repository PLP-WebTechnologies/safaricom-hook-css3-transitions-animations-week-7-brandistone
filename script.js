// Function to toggle modal visibility
function toggleModal() {
    const modal = document.getElementById("modal")
    modal.style.display = modal.style.display === "block" ? "none" : "block"
  }
  
  // Function to calculate distance (with parameters and return value)
  function calculateDistance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
  }
  
  // Function demonstrating scope
  function handleCalculation() {
    // These variables are local to this function
    const x1 = Number.parseFloat(document.getElementById("x1").value)
    const y1 = Number.parseFloat(document.getElementById("y1").value)
    const x2 = Number.parseFloat(document.getElementById("x2").value)
    const y2 = Number.parseFloat(document.getElementById("y2").value)
  
    if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) {
      alert("Please enter valid numbers for all coordinates.")
      return
    }
  
    const distance = calculateDistance(x1, y1, x2, y2)
    document.getElementById("result").textContent = `The distance is: ${distance.toFixed(2)} units`
  }
  
  // Function to toggle planet rotation
  function toggleRotation() {
    const planet = document.getElementById("planet")
    planet.classList.toggle("rotate")
  }
  
  // Event listeners
  document.getElementById("modalBtn").addEventListener("click", toggleModal)
  document.getElementById("closeModal").addEventListener("click", toggleModal)
  document.getElementById("calculateBtn").addEventListener("click", handleCalculation)
  document.getElementById("rotatePlanet").addEventListener("click", toggleRotation)
  
  // Global variable example
  let rotationCount = 0
  
  // Event listener for planet rotation with scope demonstration
  document.getElementById("rotatePlanet").addEventListener("click", () => {
    // rotationCount is accessible here (global scope)
    rotationCount++
  
    // Local variable
    const message = `Planet has rotated ${rotationCount} times`
  
    console.log(message)
    // message is not accessible outside this function (local scope)
  })
  
  