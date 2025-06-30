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
  // Typewriter effect
  setTimeout(type, typingSpeed);

  // Hamburger menu toggle
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });

  // Sticky header scroll effect
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Back to top button
  const backToTop = document.getElementById("back-to-top");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTop.classList.add("visible");
    } else {
      backToTop.classList.remove("visible");
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Dark mode toggle
  const themeToggle = document.getElementById("theme-toggle");
  const currentTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") {
    themeToggle.querySelector("i").classList.replace("ri-moon-line", "ri-sun-line");
  }

  themeToggle.addEventListener("click", () => {
    const theme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    themeToggle.querySelector("i").classList.toggle("ri-moon-line");
    themeToggle.querySelector("i").classList.toggle("ri-sun-line");
  });

  // EmailJS form submission
  emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
  const contactForm = document.getElementById("contact-form");
  const formMessage = document.getElementById("form-message");
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
      name: contactForm.name.value,
      phone: contactForm.phone.value,
      email: contactForm.email.value,
      subject: contactForm.subject.value,
      message: contactForm.message.value,
    })
    .then(() => {
      formMessage.textContent = "Message sent successfully!";
      formMessage.style.color = "green";
      contactForm.reset();
      setTimeout(() => { formMessage.textContent = ""; }, 3000);
    }, (error) => {
      formMessage.textContent = "Failed to send message. Please try again.";
      formMessage.style.color = "red";
      console.error("EmailJS error:", error);
    });
  });

  // Hide preloader after page load
  window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    preloader.style.opacity = "0";
    setTimeout(() => {
      preloader.style.display = "none";
    }, 500);
  });

  // Section animations
  const sections = document.querySelectorAll(".animate-section");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => {
    observer.observe(section);
  });
});