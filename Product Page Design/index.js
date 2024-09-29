let ProductImg = document.getElementById("ProductImg");
let btn = document.getElementsByClassName("btn");
btn[0].onclick = function () {
  ProductImg.src = "image1.png";
  for (bt of btn) {
    bt.classList.remove("active");
  }
  this.classList.add("active");
};
btn[1].onclick = function () {
  ProductImg.src = "image2.png";
  for (bt of btn) {
    bt.classList.remove("active");
  }
  this.classList.add("active");
};
btn[2].onclick = function () {
  ProductImg.src = "image3.png";
  for (bt of btn) {
    bt.classList.remove("active");
  }
  this.classList.add("active");
};
