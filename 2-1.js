var calculateButton = document.getElementById("calculateButton");
var resetButton = document.getElementById("resetButton");
calculateButton.addEventListener("click", function() {
var yearOfBirth = prompt("うまれたのは何年ですか");
var currentYear = new Date().getFullYear();
var daysSinceBirth = (currentYear - parseInt(yearOfBirth)) * 365;
if (!isNaN(daysSinceBirth)) {
var result = "生まれてからの日数: " + daysSinceBirth + "日";
var resultDiv = document.createElement("div");
resultDiv.textContent = result;
document.body.appendChild(resultDiv);
}
});
resetButton.addEventListener("click", function() {
var resultDiv = document.querySelector("div");
if (resultDiv) {
resultDiv.remove();
}
});