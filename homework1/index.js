console.log("Я учу JavaScript!");
const img = document.querySelector("img");
function nextImage() {
  img.src = "cat2.jpg";
}
function prevImage() {
  img.src = "cat1.jpg";
}
