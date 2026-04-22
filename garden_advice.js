// Ask the user for the season and plant type
let season = prompt("Enter the season (summer or winter):").toLowerCase();
let plantType = prompt("Enter the plant type (flower or vegetable):").toLowerCase();

// Function to return advice based on the season
function getSeasonAdvice(season) {
    if (season === "summer") {
        return "Water your plants regularly and provide some shade.\n";
    } else if (season === "winter") {
        return "Protect your plants from frost with covers.\n";
    } else {
        return "No advice for this season.\n";
    }
}

// Function to return advice based on the plant type
function getPlantAdvice(plantType) {
    if (plantType === "flower") {
        return "Use fertiliser to encourage blooms.";
    } else if (plantType === "vegetable") {
        return "Keep an eye out for pests!";
    } else {
        return "No advice for this type of plant.";
    }
}

// Combine all advice into one message
let advice = getSeasonAdvice(season) + getPlantAdvice(plantType);

// Log the generated advice to the console
console.log(advice);