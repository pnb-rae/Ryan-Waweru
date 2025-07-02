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

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
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
  const scrollHandler = debounce(() => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }, 10);
  window.addEventListener("scroll", scrollHandler);

  // Back to top button
  const backToTop = document.getElementById("back-to-top");
  const backToTopHandler = debounce(() => {
    if (window.scrollY > 300) {
      backToTop.classList.add("visible");
    } else {
      backToTop.classList.remove("visible");
    }
  }, 10);
  window.addEventListener("scroll", backToTopHandler);

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

  // EmailJS configuration
  const emailConfig = {
    userId: "syK520a6xqM02GMTC",
    serviceId: "service_naxoy4l",
    templateId: "template_i05y8jr",
  };
  emailjs.init(emailConfig.userId);

  // EmailJS form submission
  const contactForm = document.getElementById("contact-form");
  const formMessage = document.getElementById("form-message");
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const submitButton = contactForm.querySelector("button");
    submitButton.disabled = true;
    formMessage.textContent = "Sending...";
    try {
      await emailjs.send(emailConfig.serviceId, emailConfig.templateId, {
        name: contactForm.name.value,
        phone: contactForm.phone.value,
        email: contactForm.email.value,
        subject: contactForm.subject.value,
        message: contactForm.message.value,
      });
      formMessage.textContent = "Message sent successfully!";
      formMessage.classList.add("success");
      contactForm.reset();
      setTimeout(() => {
        formMessage.textContent = "";
        formMessage.classList.remove("success");
      }, 3000);
    } catch (error) {
      formMessage.textContent = "Failed to send message. Please check your connection or try again later.";
      formMessage.classList.add("error");
      console.error("EmailJS error:", error);
      setTimeout(() => {
        formMessage.classList.remove("error");
      }, 3000);
    } finally {
      submitButton.disabled = false;
    }
  });

  // Email link handler
  document.querySelectorAll('.email-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const email = link.getAttribute('data-email');
      window.location.href = `mailto:${email}`;
    });
  });

  // Hide preloader after page load
  window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    preloader.style.transition = "opacity 0.5s ease";
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

  // Cleanup event listeners on unload
  window.addEventListener("unload", () => {
    window.removeEventListener("scroll", scrollHandler);
    window.removeEventListener("scroll", backToTopHandler);
  });
});