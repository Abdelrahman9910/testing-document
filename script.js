document.addEventListener("DOMContentLoaded", function() {
  function startCounter(spanElement, targetNumber) {
    let currentNumber = 0;
    const increment = targetNumber / 100;
    const interval = 20;

    const timer = setInterval(() => {
      currentNumber += increment;
      if (currentNumber >= targetNumber) {
        clearInterval(timer);
        currentNumber = targetNumber;
      }
      spanElement.textContent = Math.floor(currentNumber) + "+";
    }, interval);
  }
  const numberSpans = document.querySelectorAll(".circle span:first-child");
  numberSpans.forEach(span => {
    const targetNumber = parseInt(span.textContent);
    startCounter(span, targetNumber);
  });
});
function toggleSideNav() {
  const sideNav = document.getElementById("sideNav");
  const overlay = document.getElementById("overlay");

  if (sideNav.style.width === "250px") {
    sideNav.style.width = "0";
    overlay.style.display = "none";
  } else {
    sideNav.style.width = "250px";
    overlay.style.display = "block";
  }
}
function toggleLanguageDropdown() {
  const dropdown = document.getElementById("customLanguageDropdown");
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
}
window.onclick = function (event) {
  if (!event.target.matches('.language-button')) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.style.display === "block") {
        openDropdown.style.display = "none";
      }
    }
  }
};
const slidesContainer = document.querySelector('.custom-carousel-slides');
if (slidesContainer) {
  const slides = document.querySelectorAll('.custom-carousel-slide');
  const indicators = document.querySelectorAll('.custom-carousel-indicators button');
  const prevButton = document.querySelector('.custom-carousel-prev');
  const nextButton = document.querySelector('.custom-carousel-next');

  let currentSlide = 0;
  const totalSlides = slides.length;

  function updateCarousel() {
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle('active', index === currentSlide);
    });
  }

  let autoSlideInterval = setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
  }, 6000);

  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      currentSlide = index;
      updateCarousel();
      clearInterval(autoSlideInterval);
      autoSlideInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
      }, 60000);
    });
  });

  prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => {
      currentSlide = (currentSlide + 1) % totalSlides;
      updateCarousel();
    }, 60000);
  });

  nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => {
      currentSlide = (currentSlide + 1) % totalSlides;
      updateCarousel();
    }, 60000);
  });

  updateCarousel();
}
const iframeContainer = document.querySelector('.iframe-fallback');
if (iframeContainer) {
  const iframe = iframeContainer.querySelector('.lazy-iframe');
  const videoThumbnail = iframeContainer.querySelector('.video-thumbnail');
  const playButton = iframeContainer.querySelector('.play-button');

  iframeContainer.addEventListener('click', function () {
    if (iframe && videoThumbnail && playButton) {
      iframe.src = iframe.getAttribute('data-src');
      videoThumbnail.style.display = 'none';
      playButton.style.display = 'none';
      iframe.style.display = 'block';
    }
  });
}
function initSlider(sliderId) {
  const slider = document.getElementById(sliderId);
  const slides = slider.querySelector(".project-slides");
  const indicators = slider.querySelectorAll(".project-indicator");
  const prevButton = slider.querySelector(".project-prev");
  const nextButton = slider.querySelector(".project-next");
  let currentIndex = 0;

  function updateSlider() {
      slides.style.transform = `translateX(-${currentIndex * 100}%)`;
      indicators.forEach((indicator, index) => {
          indicator.classList.toggle("active", index === currentIndex);
      });
  }

  prevButton.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + indicators.length) % indicators.length;
      updateSlider();
  });

  nextButton.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % indicators.length;
      updateSlider();
  });

  indicators.forEach((indicator, index) => {
      indicator.addEventListener("click", () => {
          currentIndex = index;
          updateSlider();
      });
  });
}
initSlider("slider-1");
initSlider("slider-2");
initSlider("slider-3");
initSlider("slider-4");
initSlider("slider-5");
initSlider("slider-6");
initSlider("slider-7");
initSlider("slider-8");
initSlider("slider-9");
initSlider("slider-10");
initSlider("slider-11");
initSlider("slider-12");
initSlider("slider-13");
initSlider("slider-14");
initSlider("slider-15");
initSlider("slider-16");
initSlider("slider-17");
initSlider("slider-18");
initSlider("slider-19");
initSlider("slider-20");
initSlider("slider-21");
initSlider("slider-22");
initSlider("slider-23");
initSlider("slider-24");
initSlider("slider-25");
initSlider("slider-26");
initSlider("slider-27");
initSlider("slider-28");
initSlider("slider-29");
initSlider("slider-30");
