const firstNameInput = document.getElementById("firstName");
const middleNameInput = document.getElementById("middleName");
const lastNameInput = document.getElementById("lastName");
const generateBtn = document.getElementById("generateBtn");
const clearBtn = document.getElementById("clearBtn");
const fullNameEl = document.getElementById("fullName");

generateBtn.addEventListener("click", function () {
  const firstName = firstNameInput.value.trim();
  const middleName = middleNameInput.value.trim();
  const lastName = lastNameInput.value.trim();

  fullNameEl.textContent = [firstName, middleName, lastName]
    .filter(function (part) { return part !== ""; })
    .join(" ");
});

clearBtn.addEventListener("click", function () {
  firstNameInput.value = "";
  middleNameInput.value = "";
  lastNameInput.value = "";
  fullNameEl.textContent = "";
});