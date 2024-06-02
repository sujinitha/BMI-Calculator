window.onload = () => {
    let button = document.querySelector("#btn");

    // Function for calculating BMI
    button.addEventListener("click", calculateBMI);
};

function calculateBMI() {
    let height = parseInt(document.querySelector("#height").value);
    let weight = parseInt(document.querySelector("#weight").value);
    let result = document.querySelector("#result");

    if (isNaN(height) || height <= 0) {
        result.innerHTML = "<span class='error'>Please provide a valid height!</span>";
        return;
    }
    
    if (isNaN(weight) || weight <= 0) {
        result.innerHTML = "<span class='error'>Please provide a valid weight!</span>";
        return;
    }

    let bmi = (weight / ((height * height) / 10000)).toFixed(2);
    let bmiCategory = "";

    if (bmi < 18.5) {
        bmiCategory = "Underweight";
        result.innerHTML = `<div class='underweight'>${bmiCategory}: ${bmi}</div>`;
        result.innerHTML += "<h3>Underweight Tips:</h3><ul><li>Consult a healthcare professional for personalized advice.</li><li>Focus on consuming nutrient-dense foods.</li><li>Eat frequent, small meals and snacks.</li><li>Incorporate strength training exercises to build muscle mass.</li><li>Monitor progress and adjust diet and exercise regimen accordingly.</li></ul>";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        bmiCategory = "Normal weight";
        result.innerHTML = `<div class='normal'>${bmiCategory}: ${bmi}</div>`;
        result.innerHTML += "<h3>Normal Weight Tips:</h3><ul><li>Maintain a balanced diet rich in fruits, vegetables, and lean proteins.</li><li>Engage in regular physical activity.</li><li>Monitor portion sizes and practice mindful eating.</li><li>Stay hydrated and manage stress levels.</li></ul>";
    } else if (bmi >= 24.9 && bmi < 29.9) {
        bmiCategory = "Overweight";
        result.innerHTML = `<div class='overweight'>${bmiCategory}: ${bmi}</div>`;
        result.innerHTML += "<h3>Overweight Tips:</h3><ul><li>Focus on making healthy food choices.</li><li>Practice portion control and avoid overeating.</li><li>Incorporate regular physical activity into your routine.</li><li>Set realistic weight loss goals and seek support.</li></ul>";
    } else {
        bmiCategory = "Obese";
        result.innerHTML = `<div class='obese'>${bmiCategory}: ${bmi}</div>`;
        result.innerHTML += "<h3>Obese Tips:</h3><ul><li>Consult a healthcare professional for personalized weight loss advice.</li><li>Adopt healthy eating habits and limit calorie-dense foods.</li><li>Incorporate regular exercise to support weight loss goals.</li><li>Set achievable weight loss goals and track progress.</li></ul>";
    }
}
