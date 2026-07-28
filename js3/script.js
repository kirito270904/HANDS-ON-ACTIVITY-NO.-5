const numberInput = document.getElementById("number");
const insertBtn = document.getElementById("insertBtn");
const deleteAllBtn = document.getElementById("deleteAllBtn");

const numbersListEl = document.getElementById("numbersList");
const sumEl = document.getElementById("sum");
const highestEl = document.getElementById("highest");
const lowestEl = document.getElementById("lowest");

let numbers = [];

function updateDisplay() {
  numbersListEl.innerHTML = numbers.map(function (n) {
    return "<div>" + n + "</div>";
  }).join("");

  if (numbers.length === 0) {
    sumEl.textContent = "";
    highestEl.textContent = "";
    lowestEl.textContent = "";
    return;
  }

  const sum = numbers.reduce(function (total, n) { return total + n; }, 0);
  sumEl.textContent = sum;
  highestEl.textContent = Math.max.apply(null, numbers);
  lowestEl.textContent = Math.min.apply(null, numbers);
}

insertBtn.addEventListener("click", function () {
  const num = parseFloat(numberInput.value);

  if (isNaN(num)) {
    alert("Please enter a valid number.");
    return;
  }

  numbers.push(num);
  numberInput.value = "";
  updateDisplay();
});

deleteAllBtn.addEventListener("click", function () {
  numbers = [];
  updateDisplay();
});