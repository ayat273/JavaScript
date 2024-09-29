let selector = document.getElementById("selector");
let list = document.getElementById("list");
let options = document.getElementsByClassName("options");
let optionText = document.getElementById("optionText");
let arrowIcon = document.getElementById("arrowIcon");
selector.onclick = function () {
  list.classList.toggle("hide");
  arrowIcon.classList.toggle("rotate");
};
for (option of options) {
  option.onclick = function () {
    optionText.innerHTML = this.textContent;
    list.classList.toggle("hide");
    arrowIcon.classList.toggle("rotate");
  };
}
