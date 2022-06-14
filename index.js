const track = document.querySelector(".image__track");
const slides = Array.from(track.children);
const prevButton = document.querySelector(".carousel__button--left");
const nextButton = document.querySelector(".carousel__button--right");
const navDots = document.querySelector(".carousel__nav");
const dot = Array.from(navDots.children);
const width = slides[0].getBoundingClientRect().width;

console.log(width);

// loop through slides array for each width
slides[0].style.left = 0;
slides[1].style.left = "700px";
slides[2].style.left = "1400px";

// for (let i = 0; i < slides.length; i++) {
//   slides[i].style.left = width * i * "px";
// }

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = "transtaleX( : " + targetSlide.style.left + ")";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

// when I click  left, move slides left
prevButton.addEventListener("click", () => {
  const currentSlide = track.querySelector(".current-slide");
  const prevSlide = currentSlide.prevElementSibling;

  moveToSlide(track, currentSlide, prevSlide);

  console.log(currentSlide);
});

nextButton.addEventListener("click", () => {
  const currentSlide = track.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;

  moveToSlide(track, currentSlide, nextSlide);

  console.log(currentSlide);
});
