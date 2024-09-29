let scrollInfo = document.querySelector(".info");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");
scrollInfo.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollInfo.scrollLeft += evt.deltaY;
  scrollInfo.style.scrollBehavior = "auto";
});
nextBtn.addEventListener("click", () => {
  scrollInfo.scrollLeft += 900;
  scrollInfo.style.scrollBehavior = "smooth";
});
backBtn.addEventListener("click", () => {
  scrollInfo.scrollLeft -= 900;
  scrollInfo.style.scrollBehavior = "smooth";
});
