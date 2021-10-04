let count = 0;
function increment() {
  count = count + 1;
  document.getElementById("count-el").textContent = count;
}
let string_container = " ";
function save() {
  string_container = document.getElementById("count-el").textContent + " - ";
  document.getElementById("output").textContent += string_container;
  count = 0;
  document.getElementById("count-el").textContent = 0;
}
