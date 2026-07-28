const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const calculateBtn = document.getElementById("calculateBtn");
const clearBtn = document.getElementById("clearBtn");

const sumEl = document.getElementById("sum");
const differenceEl = document.getElementById("difference");
const productEl = document.getElementById("product");
const quotientEl = document.getElementById("quotient");

calculateBtn.addEventListener("click", function () {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);

  if (isNaN(num1) || isNaN(num2)) {
    alert("Please enter valid numbers in both fields.");
    return;
  }

  sumEl.textContent = num1 + num2;
  differenceEl.textContent = num1 - num2;
  productEl.textContent = num1 * num2;
  quotientEl.textContent = num2 !== 0 ? num1 / num2 : "Undefined";
});

clearBtn.addEventListener("click", function () {
  num1Input.value = "";
  num2Input.value = "";
  sumEl.textContent = "";
  differenceEl.textContent = "";
  productEl.textContent = "";
  quotientEl.textContent = "";
});
