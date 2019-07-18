let previous = document.getElementById('previous');
let next = document.getElementById('next');
let slide = document.querySelectorAll('.slide');


previous.addEventListener("click", previousSlide);
next.addEventListener("click", nextSlide);

let index = 1;
let currentSlide = document.getElementById(`slide${index}`);
console.log(currentSlide);



function previousSlide() {
  currentSlide.classList.toggle('hidden');
  index -= 1;
  currentSlide = document.getElementById(`slide${index}`);
  currentSlide.classList.toggle('hidden');
  console.log(currentSlide);
}

function nextSlide() {
  currentSlide.classList.toggle('hidden');
  index += 1;
  currentSlide = document.getElementById(`slide${index}`);
  currentSlide.classList.toggle('hidden');
  console.log(currentSlide);
}
