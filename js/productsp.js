const sliderMainImage = document.getElementById("product-main-image"); //product container image
const sliderImageList = document.getElementsByClassName("image-list"); // image thumblian group selection
console.log(sliderImageList);

sliderImageList[0].onclick = function () {
  sliderMainImage.src = sliderImageList[0].src;
  console.log(sliderMainImage.src);
};

sliderImageList[1].onclick = function () {
  sliderMainImage.src = sliderImageList[1].src;
  console.log(sliderMainImage.src);
};

sliderImageList[2].onclick = function () {
  sliderMainImage.src = sliderImageList[2].src;
  console.log(sliderMainImage.src);
};

sliderImageList[3].onclick = function () {
  sliderMainImage.src = sliderImageList[3].src;
  console.log(sliderMainImage.src);
};
var btnOpen = document.querySelector(".open-modal-btn");
var modal = document.querySelector(".modal");
var iconcloes = document.querySelector(".modal_header i");
var btncloes = document.querySelector(".modal_footer button");

function toggleModal(e) {
  console.log(e.target);
  modal.classList.toggle("hide1");
  V;
}

btnOpen.addEventListener("click", toggleModal);
btncloes.addEventListener("click", toggleModal);
iconcloes.addEventListener("click", toggleModal);
modal.addEventListener("click", function (e) {
  if (e.target == e.currentTarget) {
    toggleModal();
  }
});

const fags = document.querySelectorAll(".fag");
fags.forEach((fag) => {
  fag.addEventListener("click", () => {
    fag.classList.toggle("active");
  });
});
