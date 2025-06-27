const texts = [
  "technical writer",
  "full stack developer",
  "React js developer",
  "Elixir developer",
  "copy writer"
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typewriterElement = document.getElementById("typewriter");
const typingSpeed = 100;
const deletingSpeed = 50;
const pauseTime = 1500;

function type() {
  const currentText = texts[textIndex];
  
  if (isDeleting) {
    typewriterElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typewriterElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    setTimeout(type, pauseTime);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, typingSpeed);
});