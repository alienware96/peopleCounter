let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

if (count == 0) {
  saveEl.innerHTML = "";
}

function increment() {
  count += +1;
  countEl.innerText = count;
}

function save() {
  if (saveEl.innerText === "") {
    saveEl.textContent = "Previous entries: ";
    saveEl.textContent += countEl.innerText;
  } else {
    saveEl.textContent += " - " + countEl.innerText;
  }

  countEl.textContent = 0;
  count = 0;
}
