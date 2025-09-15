function startCountdown() {
  // Set the date we're counting down to (14/09/2025 23:59:59)
  const countDownDate = new Date("Sep 14, 2025 23:59:59").getTime();

  // Update the countdown every 1 second
  const countdownInterval = setInterval(function () {
    // Get current date and time
    const now = new Date().getTime();

    // Find the distance between now and the countdown date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Format numbers with leading zeros
    const formatNumber = (num) => num.toString().padStart(2, "0");

    // Display the result in the countdown elements
    document.getElementById("days").innerHTML = formatNumber(days);
    document.getElementById("hours").innerHTML = formatNumber(hours);
    document.getElementById("minutes").innerHTML = formatNumber(minutes);
    document.getElementById("seconds").innerHTML = formatNumber(seconds);

    // If the countdown is finished, display zeros
    if (distance < 0) {
      clearInterval(countdownInterval);
      document.getElementById("days").innerHTML = "00";
      document.getElementById("hours").innerHTML = "00";
      document.getElementById("minutes").innerHTML = "00";
      document.getElementById("seconds").innerHTML = "00";
    }
  }, 1000);
}

// Start the countdown when the page loads
document.addEventListener("DOMContentLoaded", startCountdown);

document.addEventListener("DOMContentLoaded", function() {
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenu.addEventListener('click', function(e) {
    if (e.target === mobileMenu) {
      mobileMenu.classList.remove('show');
    }
  });
});

// Fade in animation on scroll
function fadeInOnScroll() {
  const elements = document.querySelectorAll(".benefits-fade-in");

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add("visible");
    }
  });
}

// Initial load animation
window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".benefits-main-title").classList.add("visible");

    const cards = document.querySelectorAll(".benefits-card");
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.parentElement
          .querySelector(".benefits-fade-in")
          .classList.add("visible");
      }, index * 200);
    });
  }, 300);
});

// Scroll animation
window.addEventListener("scroll", fadeInOnScroll);

// Card hover effects
document.querySelectorAll(".benefits-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.borderColor = "#991d4a";
  });

  card.addEventListener("mouseleave", function () {
    this.style.borderColor = "#e9ecef";
  });
});

document.querySelectorAll(".info-activities-card-section").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.boxShadow = "0 8px 25px rgba(0,0,0,0.15)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
  });
});
